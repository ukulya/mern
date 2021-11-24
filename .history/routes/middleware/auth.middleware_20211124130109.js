module.exports = (res,req,next) => { // next - позволяеь продолжить выполнение запроса
    if(req.method === 'OPTIONS'){
        return next()
    }

    try {
        
        const token = req.headers.authorization.split(' ')[1] // bearer TOKEN
    } catch (e) {
        
    }

}