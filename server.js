import dotenv from 'dotenv'
 dotenv.config()
 import express from 'express'

 const app = express()
 const PORT = process.env.NODE_ENV || 8000
 //connnet db 
 import { connectDB } from './src/config/dbConfig.js'
 connectDB();

 //  all uncaught request 
 app.use("*", (req, res, next) => {
    const error = {
      message: "404 page not found!",
      code: 404,
    };
    next(error);
  });

 // global error handler
 app.use((error, req,res,next)=>{
    console.log(error)
    const errorCode = error.code ||500;
    res.status(errorCode).jason({
      status: "error",
      message: error.message,
    });
  });



 //run the server 
 app.listen(PORT, error=>{
    error
    ? console.log(error)
    : console.log(`you server is ready at http://localhost:${PORT}`);
 })