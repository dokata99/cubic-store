const { Router } = require('express')
const router = Router()
const productController = require('./controllers/productController')
const aboutController = require('./controllers/aboutController')
const accessoryController = require('./controllers/accessoryController')
const authController = require('./controllers/authController')
const isVerified = require('./middlewares/isVerified')
const isGuest = require('./middlewares/isGuest')



router.use('/',productController)
router.use('/auth', isGuest, authController)
router.use('/about',aboutController)
router.use('/accessories', accessoryController)
router.get('*',(req,res)=>{
    res.render('404',{title:"Page Not Found 404"})
})


module.exports = router