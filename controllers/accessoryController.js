const { Router } = require('express')
const router = Router()
const accessoryServices = require('../services//accessoryServices')

router.get('/create', (req, res)=>{

    res.render('createAccessory', {title: 'Attach Accsessory'})
})
router.post('/create', (req, res)=>{
    accessoryServices.create(req.body)
    .then(() => res.redirect('/'))
    .catch(() => res.status(500).end())
})



module.exports = router