import express from "express"
import path from "path"
import cookieParser from "cookie-parser"
import connectDB from "./db.js"

import { restrictToLogginUserOnly, checkAuth } from "./middlewares/auth.js"
import URL from "./models/url.js"


import urlRoute from "./routes/url.js"
import staticRoute from './routes/staticRouter.js'
import userRoute from './routes/user.js'

const app = express()
const port = 8080

connectDB()

app.set('view engine', "ejs") // set the view engine 
app.set('views', path.resolve('./views'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/',checkAuth,staticRoute)
app.use('/url', restrictToLogginUserOnly, urlRoute)
app.use('/user',userRoute)


app.get('/url/:shortId', async (req, res) => {

    const shortId = req.params.shortId
    try {
        const entry = await URL.findOneAndUpdate(
            {
                shortId
            },
            {
                $push: {
                    visitHistroy: {
                        timestraps: Date.now(),

                    }

                }
            }
        )
        res.redirect(entry.redirectURL)
    } catch (err) {
        console.log(err)
    }
})


app.listen(port, () => {
    console.log(`server started at port ${port}`)
})
