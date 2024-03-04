const express = require('express')
const path  = require('path')
const app = express()
const PORT = process.env.PORT || 3000
const mainRouter = require('./routes/index')
const productRouter = require('./routes/products')
const ErrorHandler = require('./errors/ErrorHandler')

app.use(express.static('public'))

/*
simple file rendering 

app.get('/' , (req,res) =>{
    res.sendFile(path.resolve(__dirname) + '/index.html')
})

app.get('/about' , (req,res) =>{
    res.sendFile(path.resolve(__dirname) + '/about.html')
})

app.get('/download', (req,res) => {
    res.download(path.resolve(__dirname) + '/about.html')
})
*/

//EJS
//in the any thing want to display then <%= titie%>
//or anything render <%- include('...'); -%>
app.set('view engine', 'ejs')
/*
app.get('/',(req,res) => {
    
    // in the single  inverted comma file name render two parameter
    //1. template name 
    //2. object and data for the dynamic you want to chnage
    res.render('index' , {
        title : 'My Home Page'
    })
})

app.get('/about',(req,res) => {
    res.render('about',{
        title : 'My About Page'
    })
}) */


//for an use with an router
app.use(express.json())
// app.use(express.urlencoded({ extended : false}))
app.use(productRouter)
app.use(mainRouter)

app.use((req,res,next) => {

    return res.json({message : 'Page not found!'})
})

//express error handling middleware
app.use((err,req,res,next) => {
    if(err instanceof ErrorHandler) {
        res.status(err.status).json({
            error : {
                status : err.status,
                message : err.message
            }
        })
    }else {
        res.status(500).json({
            error : {
                status : err.status,
                message : err.message
            }
        })
    }
    console.log('Error : ',err.message)
    next()
})


app.listen(PORT , () => {
    console.log(`Listening on port ${PORT}`)
})