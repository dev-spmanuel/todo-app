import { mongoose } from 'mongoose'

const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/ToDo'

async function connectDB() {
  try {
    await mongoose.connect(mongoURL)
    console.log("MongoDB connected")
  } catch (error) {
    console.error("Error connecting to the database:", error)
    throw error
  }
}

export default connectDB