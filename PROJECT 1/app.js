import express from "express"
import connectDB from "./db.js"
import userRouter from './routes/users.js'

const app = express()

connectDB()

// app.set('view engine','ejs')
app.use(express.urlencoded({extended : false}))
app.use(userRouter)


app.listen(8080,()=>{
    console.log('Server started at port 8080')
})




