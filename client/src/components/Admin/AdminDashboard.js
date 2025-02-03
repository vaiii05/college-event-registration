import ApproveEvents from "./ApproveEvents"
import VerifyAttendance from "./VerifyAttendance"

const AdminDashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <ApproveEvents />
      <VerifyAttendance />
    </div>
  )
}

export default AdminDashboard

