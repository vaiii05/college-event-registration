import { createContext, useState, useEffect } from "react"
import { getCurrentUser } from "../services/auth"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token")
      if (token) {
        try {
          const userData = await getCurrentUser()
          setUser(userData)
        } catch (error) {
          console.error("Error fetching current user:", error)
          localStorage.removeItem("token")
        }
      }
    }
    fetchUser()
  }, [])

  const logout = () => {
    localStorage.removeItem("token")
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, setUser, logout }}>{children}</AuthContext.Provider>
}

