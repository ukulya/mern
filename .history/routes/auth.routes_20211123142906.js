const {Router} = require('express')
const bcrypt = require('bcryptjs'); // позволяет хэшировать пароли и сравнивать 
const User = require('../models/User')
const router = Router();
// middleware

// /api/auth/register
router.post('/register',async(req,res) => {
    try{
        // we send two objects - email & password
        const {email,password} = req.body

        const candidate = await User.findOne({email}) // ключ и значение совпадают - поэтому можно опустить {email: email}

        if(candidate){
           return res.status(400).json({message: 'Такой юзер уже есть'})
        }

        const hashedPassword = 

    } catch(e){
        res.status(500).json({message:'Something went wrong.Try again'})
    }
})

// /api/auth/login
router.post('/login',async(req,res) => {

})

module.exports = router;