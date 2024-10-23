import express from 'express'
import List from '../model/list.js'

const listsRouter = express.Router()

listsRouter.get("/", async (req, res) => {
  try {
    const lists = await List.find()
    res.status(200).json(lists)
  } catch (error) {
    res.status(500).json({ message: "Error fetching lists", error })
  }
})

listsRouter.post("/", async (req, res) => {
  const { title, tasks } = req.body

  const newList = new List({ title, tasks })

  try {
    const savedList = await newList.save()
    res.status(201).json(savedList)
  } catch (error) {
    res.status(400).json({ message: "Error creating list", error })
  }
})

listsRouter.put("/:id", async (req, res) => {
  const { id } = req.params
  const { title, tasks } = req.body

  try {
    const updatedList = await List.findByIdAndUpdate(id, { title, tasks }, { new: true })
    res.status(200).json(updatedList)
  } catch (error) {
    res.status(500).json({ message: "Error updating list", error })
  }
})

listsRouter.delete("/:id", async (req, res) => {
  const { id } = req.params

  try {
    const list = await List.findByIdAndDelete(id)
    res.status(200).json({ message: "List Deleted", list })
  } catch (error) {
    res.status(500).json({ message: "Error deleting list", error })
  }
})

export default listsRouter