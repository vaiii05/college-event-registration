import { useContext } from "react"
import { Route, Redirect } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"

const PrivateRoute = ({ component: Component, role, ...rest }) => {
  const { user } = useContext(AuthContext)

  return (
    <Route
      {...rest}
      render={(props) => (user && user.role === role ? <Component {...props} /> : <Redirect to="/" />)}
    />
  )
}

export default PrivateRoute

