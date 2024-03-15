import mongoose from "mongoose"

const DB_NAME="chattingApp"

const connectDB=async()=>{
try {
    let connectionDB=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`/n mongodb connected !! DB HOST: ${connectionDB.connection.host}`)
} catch (error) {
    console.log('mongodb connection error',error)
    process.exit(1)
}
}

export default connectDB