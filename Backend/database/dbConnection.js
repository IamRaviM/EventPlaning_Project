 import mongoose from "mongoose";

 export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URL,{dbName: "MERN_STACk_EVENT_MESSAGE"}).then(()=>{
    console.log("dbConnected!...");
    }).catch((err)=>{
        console.log("Some Err Occured while database to Connection  ",err);
    })
};

