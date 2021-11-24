const {Router} = require('express');
const config = require('config');
const shortId = require('shor')
const Link = require('../models/Link');
const auth = require('../middleware/auth.middleware')
const router = Router()

router.post('/generate',async(req,res) =>{
    try{
        const baseUrl = config.get('baseUrl')
        const {from} = req.body;

        const shortId = 

    } catch(e){
        res.status(500).json({message:'something went wrong'})
    }
} )
router.get('/',async(req,res) =>{
     try {
         const links = await Link.find({owner:null}) // ??
         res.json(links)
     } catch (e) {
        res.status(500).json({message:'something went wrong'})
     }
} )
router.get('/:id',async(req,res) =>{
    try {
        const links = await Link.findById(req.params.id)
        res.json(links)
    } catch (e) {
       res.status(500).json({message:'something went wrong'})
    }
} )

module.exports = router;