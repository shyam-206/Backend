import  mongoose  from "mongoose"

const urlSchema = new mongoose.Schema(
    {
        shortId : {
            type : String,
            required : true,
            unique : true
        },
        redirectURL : {
            type : String,
            required : true
        },
        visitHistroy : [{
            timestramps : { type : Number}
        }],
        createdBy : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'user'
        }
    },
    { timestamps: true }
)

export default URL = mongoose.model("url",urlSchema)
