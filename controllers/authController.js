const { Router } = require('express')

const router = Router()


router.get('/login',(req,res)=>{
    res.render('login',{title: 'Login'})
})


router.get('/register',(req,res)=>{
    res.render('register',{title: 'Register'})
})



module.exports = router



module.exports = router