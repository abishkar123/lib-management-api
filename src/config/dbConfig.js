import mongoose from "mongoose";

export const connectDB = async() => {
  try {
    if(!process.env.MONGO_URL){
        return console.log("make sure evir variable MONGO_URL has mongodb connect link");
        
    };
    mongoose.set("strictQuery", true);
    const conn =  await mongoose.connect(process.env.MONGO_URL);

    conn
      ? console.log("Mongo Connected")
      : console.log("Unable to connect Mongo");
  } catch (error) {
    console.log(error);
  }
};