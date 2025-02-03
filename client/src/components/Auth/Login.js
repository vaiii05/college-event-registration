import { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { login } from "../../services/auth"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { setUser } = useContext(AuthContext)
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = await login(username, password)
      setUser(data.user)
      localStorage.setItem("token", data.token)
      history.push(`/${data.user.role}`)
    } catch (error) {
      console.error("Login error:", error)
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block mb-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login

