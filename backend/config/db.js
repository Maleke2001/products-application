import mongoose from "mongoose"

export const connectDB = async ()=>{
 try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongosDB connenct: ${conn.connection.host}`);

    
 } catch (error) {
    console.error(`erro: ${error.message}`)
    process.exit(1)
    // 1 Exit with failure.. 0 means sucess
 }


}
export default connectDB