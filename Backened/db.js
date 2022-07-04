const mongoose = require('mongoose');
//Set up default mongoose connection
const mongoURI = "mongodb://localhost:27017/inotebook"


const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected...")
    })
}

module.exports=connectToMongo;

