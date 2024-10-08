import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  title: { type: String, required: true },
  completed: { type: Boolean, default: false }
})

const noteSchema = new Schema({
  title: { type: String, required: true },
  tasks: [taskSchema]
})

const Note = model('Note', noteSchema)

export default Note