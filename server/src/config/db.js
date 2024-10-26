import { mongoose } from 'mongoose'

const mongoURL = 'mongodb://mongo:27017/ToDo'

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