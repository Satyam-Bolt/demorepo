const express = require("express");
const fetchUser = require("../middlewares/fetchUser");
const router = express.Router();
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");
//R1. /getAllNotes .Login Required
router.get("/getAllNotes", fetchUser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    console.log("Success😊..User Notes are" + notes);
    res.status(200).json(notes);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ err: "INTERNAL_SERVER_ERROR" });
  }
});

//R2. /addNote Login Required
router.post("/addNote", fetchUser,[
    body("name").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
], async (req, res) => {

    try{
    const errors=validationResult(req);
    if(!errors.isEmpty){
        console.log("Enter legit notes details");
        return res.status(200).json({errors:errors.array()})
    }
    const {title,description,tag}=req.body;
    let note=new Notes({
        title,description,tag,user:req.user.id
    })
    const savedNote=await note.save();

    console.log("Notes added for user " + savedNote);
    res.status(200).json({ note});
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ err: "INTERNAL_SERVER_ERROR" });
  }
});

//upating the note
router.put('/updateNote/:id',fetchUser,async(req,res)=>{
    try {
        let note=await Notes.findById(req.params.id);
        if(!note)
        return res.status(401).json({err:"note not found"})
        if(note.user.toString()!==req.user.id){
            return res.status(400).json({err:"You are not authorized to perform this action"})      
        }
        const {title,description,tag}=req.body;
        const newNote={};
        if(title){newNote.title=title};
        if(description){newNote.description=description}
        if(tag){newNote.tag=tag}
        note =await Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
        res.status(200).json({note})
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ err: "INTERNAL_SERVER_ERROR" })
    }

})

router.delete('/deleteNote/:id',fetchUser,async(req,res)=>{
    try{
    let note=await Notes.findById(req.params.id);
    if(!note)return res.status(400).json({err:"No Note Found"});
    if(note.user.toString()!==req.user.id) return res.status(400).json({err:"User is not authorized to perform this action"})
    note=await Notes.findByIdAndDelete(req.params.id);
    res.status(200).json({msg:"success😀"});
} catch (error) {
    console.log(error.message);
    return res.status(500).json({ err: "INTERNAL_SERVER_ERROR" })
}



})

module.exports = router;
