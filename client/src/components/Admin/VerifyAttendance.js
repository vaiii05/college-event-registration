import { useState, useEffect } from "react"
import { getRegistrations, verifyAttendance } from "../../services/api"

const VerifyAttendance = () => {
  const [registrations, setRegistrations] = useState([])

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const data = await getRegistrations()
        setRegistrations(data)
      } catch (error) {
        console.error("Error fetching registrations:", error)
      }
    }
    fetchRegistrations()
  }, [])

  const handleVerify = async (registrationId) => {
    try {
      await verifyAttendance(registrationId)
      setRegistrations(registrations.map((reg) => (reg._id === registrationId ? { ...reg, attended: true } : reg)))
    } catch (error) {
      console.error("Error verifying attendance:", error)
    }
  }

  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">Verify Attendance</h3>
      <ul className="space-y-2">
        {registrations.map((registration) => (
          <li key={registration._id} className="border p-2 rounded flex justify-between items-center">
            <div>
              <h4 className="font-bold">{registration.event.name}</h4>
              <p>Student: {registration.student.username}</p>
              <p>Date: {new Date(registration.event.date).toLocaleDateString()}</p>
            </div>
            {!registration.attended && (
              <button
                onClick={() => handleVerify(registration._id)}
                className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
              >
                Verify Attendance
              </button>
            )}
            {registration.attended && <span className="text-green-500 font-semibold">Attended</span>}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default VerifyAttendance

