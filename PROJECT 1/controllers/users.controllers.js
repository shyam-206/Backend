import User from "../models/user.model.js";

export const handleGetAllUsers = async (req, res) => {
    await User.find({})
        .then(users => {
            return res.json(users)
        })
        .catch(err => {
            return res.json(err)
        })
}

export const getUserById = async (req, res) => {

    const id = req.params.id;
    await User.findById(id)
        .then(user => {
            if (!user) {
                return res.status(404).send({ err: "User not found" })
            }
            return res.send(user)
        })
        .catch(err => {
            return res.send(err)
        })
}

export const createNewUser = async (req,res) => {
    const { name, email, password, age } = req.body;

    const myUser = new User();
    myUser.name = name;
    myUser.email = email;
    myUser.password = password; // Make sure you hash the passowrd;
    myUser.age = age;

    myUser.save()
        .then(() => res.send('User inserted into db'))
        .catch(err => res.send(err))
}