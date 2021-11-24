const {Router} = require('express')
const router = Router();
// middleware

// /api/auth/register
router.post('/register',async(req,res) => {
    try{

    } catch(e){
        res.status(500).json({message:''})
    }
})

// /api/auth/login
router.post('/login',async(req,res) => {

})

module.exports = router;