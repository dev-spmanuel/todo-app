const API_URL = 'http://localhost:5000/api/lists';

export async function addList() {
  const newList = { title: "New List", tasks: [] }
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newList)
  })

  if (!response.ok) {
    throw new Error("Error adding list")
  }

  return await response.json()
}

export async function updateList(updatedList) {
  const response = await fetch(`${API_URL}/${updatedList._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedList)
  })

  if (!response.ok) {
    throw new Error("Error updating list")
  }

  return await response.json()
}

export async function deleteList(listId) {
  const response = await fetch(`${API_URL}/${listId}`, {
    method: "DELETE"
  })

  if (!response.ok) {
    throw new Error("Error deleting list")
  }

  return await response.json()
}