import { useEffect, useState } from 'react'
import Navigation from './components/Navigation/Navigation'
import Results from './components/Results'

import useFetch from './hooks/useFetch'
import useTheme from './hooks/useTheme'

import { addList, updateList, deleteList } from './services/listService'


export default function App() {

  const API_URL = 'http://localhost:5000/api/lists'

  const [theme, setTheme] = useState(() => {
    // Returns 1 if the windows theme is 'light' and 0 if it is 'dark'
    return window.matchMedia("(prefers-color-scheme: light)").matches
  })

  useTheme(theme)

  function handleThemeChange() {
    setTheme(!theme)
  }

  const { data, error } = useFetch(API_URL)

  const [lists, setLists] = useState([])

  useEffect(() => {
    if (data) {
      setLists(data)
    }
  }, [data])


  async function handleAddList() {
    try {
      const newList = await addList()
      setLists(prevLists => [...prevLists, newList])
    } catch (error) {
      console.error("Error adding list", error)
    }
  }

  async function handleUpdateList(updatedList) {
    try {
      const updated = await updateList(updatedList)
      setLists(prevLists => prevLists.map(list => list._id === updated._id ? updated : list))
    } catch (error) {
      console.error("Error updating list", error)
    }
  }

  async function handleDeleteList(listId) {
    try {
      await deleteList(listId)
      setLists(prevLists => prevLists.filter(list => list._id !== listId))
    } catch (error) {
      console.error("Error deleting list", error)
    }
  }

  return (
    <div>
      <Navigation
        theme={theme}
        handleThemeChange={handleThemeChange}
        handleAddList={handleAddList}
      />
      {error && <div>Error fetching lists: {error}</div>}
      <Results
        lists={lists}
        updateList={handleUpdateList}
        deleteList={handleDeleteList}
      />
    </div>

  )
}
