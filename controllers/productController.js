const { Router } = require('express')
const productServices = require('../services/productServices')
const router = Router()
const { validateProduct } = require('./helpers/productHelper')


router.get('/', (req, res) => {
    productServices.getAll(req.query)
        .then((products) => {
            res.render('home', { title: 'Products', products })
        }).catch(() => res.status(500).end())
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

router.get('/details/:productId', async(req, res) => {
    let products = await productServices.getById(req.params.productId)
    
    res.render('details', { title: 'Product Details', products })
})

module.exports = router