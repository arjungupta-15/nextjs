import exp from "constants";
import mongoose from "mongoose";

type ConnectionObject ={
    isconnected?:number
}
const connection:ConnectionObject={}

async function Dbconect():Promise<void>{
    if(connection.isconnected){
        console.log('mongodb connection is already');
        return
    }
    try{
     const db =await mongoose.connect(process.env.MONGO_URI || '',{})
     connection.isconnected = db.connections[0].readyState;
     console.log("mondodb is connected")
    }

    catch(e){
        console.log("connection is failed",e)
    process.exit(1);
    }
}

export default Dbconect;