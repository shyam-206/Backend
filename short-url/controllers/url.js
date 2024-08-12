import shortid from "shortid"
import URL from "../models/url.js"

export const generateNewShortURL = async (req,res) => {

    const body = req.body

    // console.log(body.url)
    if(!body.url) return res.status(400).send({err : "url is required..."})

    const shortID = shortid()

    await URL.create({
        shortId : shortID,
        redirectURL : body.url,
        visitHistroy : [],
        createdBy : req.user._id,
    })

    return res.render('home',{
        id : shortID
    })
}

export const handleGetAnalytics =  async (req,res)=> {

    const shortId = req.params.shortId

    const result = await URL.findOne({ shortId })

    // console.log(result.visitHistroy.length,result.visitHistroy[0])
    // console.log("timestraps",Date.now())
    return res.json({
        totalClicks : result.visitHistroy.length,
        analytics : result.visitHistroy,
    })
}