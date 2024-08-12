import { getUser } from "../service/auth.js"

async function restrictToLogginUserOnly(req, res, next) {
    const userUid = req.cookies?.uid
    //sesson ID is not their
    if (!userUid) {
        console.log("userid is not fetch")
        return res.redirect('/login')
    }
    const user = getUser(userUid)

    //user is not exist in the db
    if (!user) {
        console.log("user is login in")
        return res.redirect('/login')
    }
    req.user = user
    next()
}


async function checkAuth(req, res, next){
    const userUid = req.cookies?.uid


    
    const user = getUser(userUid)
    req.user = user
    next()
}   

export { restrictToLogginUserOnly , checkAuth}