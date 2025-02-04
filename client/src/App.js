import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import Header from "./components/Common/Header"
import Login from "./components/Auth/Login"
import StudentDashboard from "./components/Student/StudentDashboard"
import CouncilDashboard from "./components/Council/CouncilDashboard"
import AdminDashboard from "./components/Admin/AdminDashboard"
import PrivateRoute from "./components/Common/PrivateRoute"

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <main className="container mx-auto mt-8 px-4">
            <Switch>
              <Route exact path="/" component={Login} />
              <PrivateRoute path="/student" role="student" component={StudentDashboard} />
              <PrivateRoute path="/council" role="council" component={CouncilDashboard} />
              <PrivateRoute path="/admin" role="admin" component={AdminDashboard} />
            </Switch>
          </main>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App

