const { Router } = require('express')
const productServices = require('../services/productServices')
const router = Router()
const {validateProduct} = require('./helpers/productHelper')


router.get('/', (req, res) => {
    let products = productServices.getAll(req.query)
    res.render('home', { title: 'Products', products })
})
router.get('/create', (req, res) => {
    res.render('create', { title: 'Create' })
})
router.post('/create', validateProduct, (req, res) => {
     
    //TODO: VALIDATE INPUTS!    
    productServices.create(req.body)
    .then(() => res.redirect('/'))
    .catch(() => res.status(500).end())
        
})

router.get('/details/:productId', (req, res) => {
    let products = productServices.getById(req.params.productId)
    res.render('details', { title: 'Product Details',products })
})

module.exports = router