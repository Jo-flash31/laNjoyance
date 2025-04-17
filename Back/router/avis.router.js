const requireAuth = require('../middleware/verifyToken');
const express = require('express');
const avis = require('../models/avis.model');
const patisserie = require('../models/patisserie.model');


router.post('/add',async (req,res) => { 
    try{   
    const avis = await avis.create(req.body);
    const patisserie = await patisserie.findByIdAndUpdate(req.body.article,
        {
        $push: {
            avis: avis._id
        }
    },{new: true}
    )
    res.status(201).json(patisserie)
    }catch(error){
        console.log('Error:' ,error.message);
        res.status(500).json(error.message)
    }
})
router.get('/all' , async (req, res) => {
    try{
        const result = await avis.find()
        res.status(200).json(result)
    }catch(error){
        console.log('Error : ', error.message);
        
    }
})
router.delete('/delete/:id' , async (req, res) =>{
    try{
        const result = await Avis.findOneAndDelete()
        res.status(200).json(result)
    }catch(error){
        console.log('Error : ', error.message);
        
    }
    
})
router.put('/update/:id' , async (req, res) =>{
    try{
        const result = await avis.findByIdAndUpdate(req.params.id, req.body, {new : true})
        res.status(200).json(result)
    }catch(error){
        console.log('Error : ' , error.message);
        
    }
})



module.exports = router;