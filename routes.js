const { Router } = require('express')
const router = Router()
const productController = require('./controllers/productController')
const aboutController = require('./controllers/aboutController')
const accessoryController = require('./controllers/accessoryController')


router.use('/',productController)
router.use('/about',aboutController)
router.use('/accessories', accessoryController)
router.get('*',(req,res)=>{
    res.render('404',{title:"Page Not Found 404"})
})


module.exports = router