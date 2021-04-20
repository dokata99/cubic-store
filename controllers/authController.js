const { Router } = require('express')
const authServices = require('../services/authServices')
const config = require('../config/config')
const isVerified = require('../middlewares/isVerified')
const isGuest = require('../middlewares/isGuest')

const router = Router()


router.get('/login', isGuest,(req,res)=>{
    res.render('login',{title: 'Login'})
})

router.post('/login', isGuest, async (req, res) =>{
    const {username, password} = req.body
    try{
        let token = await authServices.login({username, password});
        
        res.cookie(config.COOKIE_NAME,token)
        res.redirect('/');
    }catch(error){
        console.log(error)
        res.render('login', {error})
    }
})

router.get('/register', isGuest,(req,res)=>{
    res.render('register',{title: 'Register'})  
})

router.post('/register', isGuest, async(req, res) =>{
    const {username, password, repeatPassword} = req.body

    if(password !== repeatPassword){
        return res.render('register', {title: 'Register', error: 'The password does not match!'})
        
    }

    try {
        let user = await authServices.register({username, password})

        console.log(user);
        res.redirect('/auth/login')
    } catch (error) {
        res.render('register', {error, title: 'Register'})
    }
})
router.get('/logout', (req, res) =>{
    res.clearCookie(config.COOKIE_NAME)
    res.redirect('/')
})




module.exports = router



module.exports = router