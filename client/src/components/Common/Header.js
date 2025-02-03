import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"

const Header = () => {
  const { user, logout } = useContext(AuthContext)

  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">College Event Registration</h1>
        <nav>
          {user ? (
            <>
              <span className="mr-4">Welcome, {user.username}</span>
              <button onClick={logout} className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600">
                Logout
              </button>
            </>
          ) : (
            <Link to="/" className="text-white hover:underline">
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header

