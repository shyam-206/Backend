import http from "http"
import dotenv from 'dotenv'
import mathfs from "fs"
import url from "url"
import Express from "express"
import {add} from "./math.js"

dotenv.config()

function myHandler (req,res)  {
    // console.log('New Req')
    if(req.url === '/favicon.ico') return res.end()

    const log = `${Date.now()}: ${req.method} ${req.url} New Req Received \n`
    const myUrl = url.parse(req.url,true)
   

    fs.appendFile('log.txt',log ,(err, data) => {
        // res.end('Hello From server again')
        switch(myUrl.pathname){
            case  '/' : res.end("Home Page")
            break

            case '/about' : 
                const username = myUrl.query.name
                res.end( `Hi ${username}`)
            break

            case '/signup' :
                if(req.method === 'GET')
                    return res.end('This is sign up form ')
                else if(req.method === 'POST')

                    return res.end('success')
            break 
            default : res.end('404 not found')
        }
    })
}
const PORT = process.env.PORT
const app = Express()

app.get('/',(req,res)=> {
    return res.send('Hello Home page')
})
app.get('./about',(req,res) => {
    return res.send('Hello About Page')
})

app.listen(PORT , ()=>{
    console.log(`server is running ${PORT}`)
    console.log(add(2,3))
})

