const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    let obj = {
        a:"dsad",
        num:57
    }
    res.json(obj);
})

module.exports=router
