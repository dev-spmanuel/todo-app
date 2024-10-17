import { useEffect } from 'react'

export default function useTheme(theme) {
  useEffect(() => {
    // Add or remove the 'dark' class from the html element
    if (theme) {
      document.querySelector("html").classList.remove("dark")
    } else {
      document.querySelector("html").classList.add("dark")
    }
  }, [theme])
}