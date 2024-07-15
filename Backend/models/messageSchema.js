 import mongoose, { Schema } from "mongoose";
import validator from "validator";

 const messageSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name Required!"],
        minLength:[3,"Name Must Contain at least 3 Caracters!"]
    },
    email:{
        type:String,
        required:[true,"Email Required!"],
        validate:[validator.isEmail,"Please Provide valid Email"]
    },
    subject:{
        type:String,
        required:[true,"Subject Required!"],
        minLength:[5,"Subject Must Contain at least 5 Caracters!"]
    },
    message:{
        type:String,
        required:[true,"Message Required!"],
        minLength:[10,"Message Must Contain at least 10 Caracters!"],
    },
 });

 export const Message = mongoose.model("Message",messageSchema);
 