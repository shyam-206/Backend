import Express from "express"
import users from "./MOCK_DATA.json" assert  {type : "json"}
import * as fs from 'node:fs'
import connectDB  from "./db.js"

const app = Express()
const PORT = 8000

//mongoose
connectDB()


//middleare plugin for the enknown data handing

app.use(Express.urlencoded({extended : false}))

//for the log entry
app.use((req,res,next) => {
    fs.appendFile('log.txt' , 
    `${Date.now()}: ${req.method}: ${req.path}\n`,
        (err,data) =>{
            next()
    })
})

//create own middleware example 
app.use((req,res,next) => {

    console.log('hello from middleware 1')

    //creating a variable
    req.myUserName = "Shyam Dhokiya" // now you can any where access in the next router

    // return res.send('Hello from middleware 1') // they will end the next all thing

    next() //they will just pass the next req main
})

app.use((req,res,next) => {

    console.log('hello from middleware 2' ,req.myUserName)

    // return res.send('end the req res cycle') // they will end the next all thing

    next() //they will just pass the next req main
})


//Routes

app.get('/users',(req,res) =>{
    const html = `
        <ul>
            ${users.map(user => `<li>${user.first_name}</li>`).join("")}
        </ul>
    `
    return res.send(html)
})

app.get('/api/users',(req,res) => {

    console.log("I am get route",req.myUserName)
   return res.json(users)
})

app.get('/api/users/:id' ,(req,res) =>{
    const id = Number(req.params.id) //string get the string now convert the number

    //NOW FIND THE PARTICULAR USER FROM THE USERS DATA
    const user = users.find((user) => user.id === id)

    if(!user) {
        return res.status(404).send({error : "User not found"})
    }
    //return the user of particular id
    return res.json(user)

})

//create new users
app.post('/api/users',(req,res)=>{
    const body = req.body 
    // console.log("Body" ,body)

    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
        return res.status(400).send({msg : "All fields are required..."})
    }

    //now push the data 
    users.push({...body, id: users.length + 1})

    //append the into the file
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users) ,(err,data) => {

        return res.status(201).json({status : "success" , id: users.length})
    })
})

//edit the user with ID
app.patch('/api/users/:id',(req,res) => {
    return res.json({status : "pending"})
})

//delete the user with ID
app.delete('/api/users/:id',(req,res) =>{
    return res.json({status : "pending"})
})

app.listen(PORT ,()=> {
    // console.log(users)
    console.log(`server is running on ${PORT}`)
})
