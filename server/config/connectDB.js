import mongoose, { connect } from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()


if (!process.env.MONGODB_URI) {
    throw new Error(
        "Please define the MONGODB_URI environment variable inside .env file"
    )
}


async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connect DB")
    } catch (error) {
        console.log("Mongodb connect error ", error)
        process.exit(1)

    }
}
export default connectDB;