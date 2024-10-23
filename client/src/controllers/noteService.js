const API_URL = 'http://localhost:5000/api/notes';

export async function addNote() {
  const newNote = { title: "New Note", tasks: [] }
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newNote)
  })

  if (!response.ok) {
    throw new Error("Error adding note")
  }

  return await response.json()
}

export async function updateNote(updatedNote) {
  const response = await fetch(`${API_URL}/${updatedNote._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedNote)
  })

  if (!response.ok) {
    throw new Error("Error updating note")
  }

  return await response.json()
}

export async function deleteNote(noteId) {
  const response = await fetch(`${API_URL}/${noteId}`, {
    method: "DELETE"
  })

  if (!response.ok) {
    throw new Error("Error deleting note")
  }

  return await response.json()
}