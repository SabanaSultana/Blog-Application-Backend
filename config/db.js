
const mongoose=require("mongoose")
const dotenv=require("dotenv")

dotenv.config()

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database is connected successfully")
    }
    catch(error){
        console.log(error)
        console.log("Error occured while connecting with database")
    }
}

module.exports=connectDB