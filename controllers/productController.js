const { Router } = require('express')
const isVerified = require('../middlewares/isVerified')
const isGuest = require('../middlewares/isGuest')
const productServices = require('../services/productServices')
const accessoryServices = require('../services/accessoryServices')
const router = Router()
const { validateProduct } = require('./helpers/productHelper')



router.get('/', (req, res) => {
    productServices.getAll(req.query)
        .then((products) => {
            res.render('home', { title: 'Products', products })
        }).catch(() => res.status(500).end())
})
router.get('/create', isVerified, (req, res) => {
    res.render('create', { title: 'Create' })
})
router.post('/create', isVerified, validateProduct, (req, res) => {

    //TODO: VALIDATE INPUTS!    
    productServices.create(req.body)
        .then(() => res.redirect('/'))
        .catch(() => res.status(500).end())

})

router.get('/details/:productId', async (req, res) => {
    let products = await productServices.getByIdWithAccessories(req.params.productId)

    res.render('details', { title: 'Product Details', products })
})

router.get('/:productId/attach', isVerified, async (req, res) => {
    let products = await productServices.getById(req.params.productId)
    let accessories = await accessoryServices.getAllWithout(products.accessories)

    res.render('attachAccessory', { title: 'Attach Accsessory', products, accessories })
})
router.post('/:productId/attach', isVerified, (req, res) => {
    productServices.attachAccessory(req.params.productId, req.body.accessory)
        .then(() => res.redirect(`/details/${req.params.productId}`))
})
router.get('/:productId/edit', isVerified,(req, res) => {
    productServices.getById(req.params.productId)
    .then(product =>{
        res.render('edit', {title:'Edit', product} )
    })
})
router.post('/:productId/edit', isVerified, (req, res) => {

    productServices.edit(req.params.productId, req.body)
    .then(() =>
        res.redirect(`/details/${req.params.productId}`)
    )
    
})
router.get('/:productId/delete', isVerified, async (req, res) => {
    
})
router.post('/:productId/delete', isVerified, async (req, res) => {
    //TODO
})
module.exports = router