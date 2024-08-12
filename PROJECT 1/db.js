import dotenv from "dotenv"
import mongoose from 'mongoose'

dotenv.config()
const connectURL = process.env.db_url

const connectDB = async () => {
    try{
        await mongoose.connect(connectURL, {
            autoIndex : true
        })
        console.log('Connected to Mongodb Atlas')
    } catch(err){
        console.log(err)
    }
}

export default connectDB