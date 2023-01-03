import express from "express";
import { SUCCESS } from "../constant.js";
import { createUser } from "../models/user/UserModel.js";
const router = express.Router();

router.get("/", (req,res,next)=>{
    try{
        res.json({
            status:SUCCESS,
            Message: "todgot uesr"
        })

    }catch (error){
        next(error);
    }
});

// create new ueuser 

router.post("/", async (req, res, next) => {
    try {
      
      const result = await createUser(req.body);
  
      result?._id
        ? res.json({
            status: "success",
            message: "User has been created successfully, you may login in ",
          })
        : res.json({
            status: "error",
            message: "Unable to login,please try again later.",
          });
    } catch (error) {
        console.log(error.message);
        if (error.message.includes("E1100 duplicate key"))
      
        
      next(error);
    }
  });


  export default router;