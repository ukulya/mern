const {Router} = require('express')
const Link = require('../models/Link')
const router = Router()

router.post('/generate',async(req,res) =>{
    try{

    } catch(e){
        res.status(500).json({message:'something went wrong'})
    }
} )
router.post('/',async(req,res) =>{
     try {
         const links = await Link.find({owner:null})
     } catch (e) {
        res.status(500).json({message:'something went wrong'})
     }
} )
router.post('/',async(req,res) =>{
    try {
        const links = await Link.find({owner:null})
    } catch (e) {
       res.status(500).json({message:'something went wrong'})
    }
} )

module.exports = router;