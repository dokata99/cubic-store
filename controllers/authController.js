const { Router } = require('express')
const authServices = require('../services/authServices')

const router = Router()


router.get('/login',(req,res)=>{
    res.render('login',{title: 'Login'})
})

router.post('/login', async (req, res) =>{
    const {username, password} = req.body
    try{
        let token = await authServices.login({username, password});
        
        res.cookie('USER_SESSION',token)
        res.redirect('/');
    }catch(error){
        console.log(error)
        res.render('login', {error})
    }
})

router.get('/register',(req,res)=>{
    res.render('register',{title: 'Register'})  
})

router.post('/register', async(req, res) =>{
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




module.exports = router



module.exports = router