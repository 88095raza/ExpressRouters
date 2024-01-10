const express=require('express')
const router= express.Router()



router.get('/',(req,res)=>{
    res.send("All dogs");
}) 
router.get('/:id',(req,res)=>{
    res.send("Viewing 1 dogs");
})
router.get('/edit',(req,res)=>{
    res.send("Editing dogs");
})

module.exports=router
