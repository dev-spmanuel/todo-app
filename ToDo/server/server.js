import express from "express"
import connectDB from "./src/config/db.js"
import cors from "cors"
import Note from "./src/model/note.js"

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

app.get("/api/notes", async (req, res) => {

  try {
    const notes = await Note.find()
    res.status(200).json(notes)
  } catch (error) {
    res.status(500).json({ message: "Error fetching notes", error })
  }
})

app.post("/api/notes", async (req, res) => {
  const { title, tasks } = req.body

  const newNote = new Note({ title, tasks })

  try {
    const savedNote = await newNote.save()
    res.status(201).json(savedNote)
  } catch (error) {
    res.status(400).json({ message: "Error creating note", error })
  }
})

app.put("/api/notes/:id", async (req, res) => {
  const { id } = req.params
  const { title, tasks } = req.body

  try {
    const updatedNote = await Note.findByIdAndUpdate(id, { title, tasks }, { new: true })
    res.status(200).json(updatedNote)
  } catch (error) {
    res.status(500).json({ message: "Error updating note", error })
  }

})

app.delete("/api/notes/:id", async (req, res) => {

  const { id } = req.params

  try {
    const note = await Note.findByIdAndDelete(id)
    res.status(200).json({ message: "Note Deleted", note })
  } catch (error) {
    res.status(500).json({ message: "Error deleting note", error })
  }
})

app.use((req, res) => {
  res.status(404).send("<h1>Not Found</h1>")
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})