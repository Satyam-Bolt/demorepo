const express=require('express');
const { findById } = require('../models/User');
const User=require('../models/User')
const router=express.Router();

//create a user using: POST "/api/auth"....Authentication not required

router.post('/',(req,res)=>{
    const user=User(req.body);
    user.save();
    res.send(req.body);
})
module.exports=router
