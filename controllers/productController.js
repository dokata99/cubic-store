const { Router } = require('express')
const productServices = require('../services/productServices')
const router = Router()


router.get('/', (req, res) => {
    let products = productServices.getAll()
    res.render('home', { title: 'Products', products })
})
router.get('/create', (req, res) => {
    res.render('create', { title: 'Create' })
})
router.post('/create', (req, res) => {
    console.log(req.body)

    //TODO: VALIDATE INPUTS!    
    productServices.create(req.body)
   
    res.redirect('/')

})

router.get('/details/:productId', (req, res) => {
    res.render('details', { title: 'Product Details' })
})

module.exports = router