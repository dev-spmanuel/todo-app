import express from "express"
import connectDB from "./src/config/db.js"
import cors from "cors"
import Note from "./src/model/note.js"

import notesRouter from "./src/controllers/noteController.js"

const app = express()
const PORT = process.env.PORT || 5000

// Conexión a la base de datos
connectDB();

// Middlewares
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" })
  res.end('Hola mundo')
})

app.use("/api/notes", notesRouter)

app.use((req, res) => {
  res.status(404).send("<h1>Not Found</h1>")
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})