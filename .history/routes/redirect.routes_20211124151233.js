const {Router} = require('express');
const Link = require('../models/Link');
const router = Router();

router.get('/:code',async(req,res) => {
    try {
        const link = await Link.findOne({code: req.params.code})
        
        if(link){

        }
        res.status
    } catch (e) {
       res.status(500).json({message:'something went wrong'})
    }
})

module.exports = router;