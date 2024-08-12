import express from "express"
import { authCourse,authPage } from "./middleware.js"

const app = express()

app.use(express.json())

app.get('/home',(req,res)=>{
    return res.send('home page')
})

app.get('/course/grades' ,authPage(["teacher","admin"]) ,(req,res)=>{
    return res.send({
        maths : 100,
        science : 95,
        gujarati : 35,
        english : 67
    })
})

app.get('/course/:number',authCourse,(req,res)=>{
    const courseNumber = req.params.number
    res.send(`you have to permission to see course ${courseNumber} `)
})

app.listen(8000,()=> {
    console.log("server is started")
})