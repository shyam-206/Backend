import express from "express"
import path from "path"
import multer from 'multer'


const app = express()


const storage = multer.diskStorage({
    destination : function(req,file,cb){

        return cb(null,"uploads")
    },
    filename : function(req,file,cb){
        return cb(null,`${Date.now()}-${file.originalname}`)
    }

})

const upload = multer({storage})

app.set("view engine","ejs")
app.set("views",path.resolve('./views'))
app.use(express.json())

app.use(express.urlencoded({ extended : false})) // form data 

app.get("/",(req,res)=> {
    return res.render('home')
})

app.post('/upload', upload.single('profileImage'), (req,res) =>{
    console.log(req.body)
    console.log(req.file)

    return res.redirect('/')
})

app.listen(8000,()=> {
    console.log('server started at port : 8000')
})