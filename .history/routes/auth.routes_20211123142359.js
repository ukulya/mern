const {Router} = require('express')
const User = require('../models/User')
const router = Router();
// middleware

// /api/auth/register
router.post('/register',async(req,res) => {
    try{
        // we send two objects - email & password
        const {email,password} = req.body

        const candidate = await User.findOne({email}) // ключ и значене 
    } catch(e){
        res.status(500).json({message:'Something went wrong.Try again'})
    }
})

// /api/auth/login
router.post('/login',async(req,res) => {

})

module.exports = router;