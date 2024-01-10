    const express=require('express')
const router= express.Router()

router.get('/',(req,res)=>{
    res.send("All shelter");
})

router.post('/',(req,res)=>{
    res.send("Creating shelters");
})

router.get('/:id',(req,res)=>{
    res.send("Viewing 1 shelter");
})
router.get('/edit',(req,res)=>{
    res.send("Editing Shelter");
})

module.exports=router


