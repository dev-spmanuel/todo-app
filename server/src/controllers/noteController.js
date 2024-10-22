import express from 'express'
import Note from '../model/note.js'

const notesRouter = express.Router()

notesRouter.get("/", async (req, res) => {
  try {
    const notes = await Note.find()
    res.status(200).json(notes)
  } catch (error) {
    res.status(500).json({ message: "Error fetching notes", error })
  }
})

notesRouter.post("/", async (req, res) => {
  const { title, tasks } = req.body

  const newNote = new Note({ title, tasks })

  try {
    const savedNote = await newNote.save()
    res.status(201).json(savedNote)
  } catch (error) {
    res.status(400).json({ message: "Error creating note", error })
  }
})

notesRouter.put("/:id", async (req, res) => {
  const { id } = req.params
  const { title, tasks } = req.body

  try {
    const updatedNote = await Note.findByIdAndUpdate(id, { title, tasks }, { new: true })
    res.status(200).json(updatedNote)
  } catch (error) {
    res.status(500).json({ message: "Error updating note", error })
  }
})

notesRouter.delete("/:id", async (req, res) => {
  const { id } = req.params

  try {
    const note = await Note.findByIdAndDelete(id)
    res.status(200).json({ message: "Note Deleted", note })
  } catch (error) {
    res.status(500).json({ message: "Error deleting note", error })
  }
})

export default notesRouter