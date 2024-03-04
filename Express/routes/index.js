const router = require('express').Router()
const apiKeyMiddleware = require('../middlewares/apiKey')

//router.use(apiKeyMiddleware) for all the route path use


router.get('/',(req,res) => {
    res.render('index', {
        title : 'My Home Page'
    })
})

router.get('/about', (req,res) => {
    res.render('about',{
        title : 'My About Page'
    })
})


router.get('/download',(req,res) => {
    res.download(path.resolve(__dirname) + '/about.html')
})


// router.get('/api/products',apiKeyMiddleware,(req,res)=> {
//     res.json([
//         {
//             id : '123',
//             name : 'Chrome'
//         },
//         {
//             id : '124',
//             name : 'Firebox'
//         }
//     ])
// })


module.exports = router