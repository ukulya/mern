module.exports = (res,req,next) => { // next - позволяеь продолжить выполнение запроса
    if(req.method === 'OPTIONS'){
        return next()
    }

    try {
        
        const token = req.headers.authorization.spl // bearer TOKEN
    } catch (e) {
        
    }

}