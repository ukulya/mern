const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = (res,req,next) => { // next - позволяеь продолжить выполнение запроса
    if(req.method === 'OPTIONS'){
        return next()
    }

    try {
        
        const token = req.headers.authorization.split(' ')[1] // bearer TOKEN

        if(!token){
            return res.status(401).json({message: 'Not authorized'})
        }

        const decoded = jwt.verify(token,config.get('jwtSecret'))
        req.user = 

    } catch (e) {
        
    }

}