const jwt = require("jsonwebtoken");

const JWT_SECTRET = "BoltIsAFantasticCSGOPlayer";

const fetchUser=(req,res,next)=>{

    const token=req.header("auth-token");
    if(!token){
        return res.status(401).json({err:"OOPS😣!!Invalid Token"})
    }
    try {
        const data=jwt.verify(token,JWT_SECTRET);
        if(!data){
            return res.status(401).json({err:"Verification Failed!! Please try again"})
        }
        req.user=data.user;
    next();
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ err: "INTERNAL_SERVER_ERROR" });
      
      }
   
    
}

module.exports=fetchUser