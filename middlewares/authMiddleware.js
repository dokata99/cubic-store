const { COOKIE_NAME, KEY } = require('../config/config')
const jwt = require('jsonwebtoken')


module.exports = function () {
    return (req,res, next) => {
        let token = req.cookies[COOKIE_NAME]

        if(token){
            jwt.verify(token, KEY , function (err, decoded){
                if(err){
                    res.clearCookie(COOKIE_NAME)
                }else{
                    req.user = decoded
                    req.locals = decoded
                    res.locals.isAuthenticated = true
                }
            })
        }
        next()
    
    }
}