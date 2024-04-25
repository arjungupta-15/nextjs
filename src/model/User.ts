import mongoose,{Schema,Document} from "mongoose";
import { Content } from "next/font/google";

export interface Message extends Document{
    contents:string;
    create:Date
}
const messageSchema :Schema<Message>= new Schema({
    contents:{
        type:String,
        required:true,
    },
    create:{
        type:Date,
        required:true,
        default:Date.now,
    }
})

export interface User extends Document{
    username:string,
    email:string,
    password:string,
    verifycode:string,
    verifycodexpiry:Date,
    verified:boolean,
    Accept:boolean,
    messages:Message[]

}

const UserSchema : Schema<User> = new Schema({
    username:{
        type:String,
        required:[true,"username is required"],
        unique:true,
        trim:true,


    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true,
        match:[/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"please valid email id"],
    },
    password:{
        type:String,
        required:[true,"password is required"],
    },
    verifycode:{
        type:String,
        required:[true,"verifycode is required"],
    },
    verifycodexpiry:{
        type:Date,
        required:[true,"verifycodeexpiry is required"],
    },
    verified:{
        type:Boolean,
        default:false,
        },
    Accept:{
        type:Boolean,
        default:true,
    },
    messages:[messageSchema]
})

const Usermodel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User",UserSchema);

export default Usermodel;