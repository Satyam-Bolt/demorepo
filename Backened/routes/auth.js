const express = require("express");
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const router = express.Router();
const bcrpyt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchUser=require('../middlewares/fetchUser')
const JWT_SECTRET = "BoltIsAFantasticCSGOPlayer";


//R1: POST "/api/auth/createUser"....Authentication not required
router.post(
  "/createuser",
  [
    body("name").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    //validation results of request body
    console.log("Validating user details....");
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("Failed😬!!Invalid req body...");
      return res.status(400).json({ errors: errors.array() });
    }
    console.log("Validation Success😀....");
    console.log("Validating if user already exist....");
    try {
      //if email already exists..
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: "User already esist..." });
      }

      console.log("No user Found!!! Creating User....");

      //encrypting the password + salt added
      let salt = await bcrpyt.genSalt(10);
      let secpass = await bcrpyt.hash(req.body.password, salt);

      //create a new User
      user = await User.create({
        name: req.body.name,
        password: secpass,
        email: req.body.email,
      });

      console.log("User created " + user);
      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECTRET);

      console.log("Success😊.. You auth tokrn is \n " + authToken);
      res.json({ authToken });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ err: "INTERNAL_SERVER_ERROR" });
    }
  }
);

router.post(
  "/login",
  [
    body("email", "Enter a valid mail").isEmail(),
    body("password", "password can not be blank").exists(),
  ],
  async (req, res) => {
    console.log("Validating User details...");
    const error = validationResult(req);
    if (!error.isEmpty()) {
      res.status(400).json({ err: error.array() });
    }

    const { email, password } = req.body;
    try {
      //if user already exists
      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ err: "Please enter correct User Credentials" });
      }
      const passComp = await bcrpyt.compare(password, user.password);
      if (!passComp) {
        return res
          .status(400)
          .json({ err: "Please enter correct User Credentials" });
      }
      console.log("Validation Successful!! User Found---");
      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECTRET);
      console.log("Success😊!!!User auth is \n" + authToken);
      res.status(200).json(authToken);
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ err: "INTERNAL_SERVER_ERROR" });
    }
  }
);

router.post('/getUser',fetchUser,async(req,res)=>{
    
  try {
    const userId=req.user.id
    const user=await User.findById(userId).select('-password');
    console.log("Data found!!!")
    return res.status(200).json({user});

  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ err: "INTERNAL_SERVER_ERROR" });
  
  }
})

module.exports = router;
