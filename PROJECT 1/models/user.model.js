import mongoose from 'mongoose'


const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
    unique: true,
  },
  password:{
    type: String,
    required: true,
  },
  age: {
    type: Number
  }
},{timestraps : true})

const user = mongoose.model('users', userSchema);

export default user
