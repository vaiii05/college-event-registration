import { useState, useEffect } from "react"
import EventList from "./EventList"
import RegisterEvent from "./RegisterEvent"
import { getEvents } from "../../services/api"

const StudentDashboard = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getEvents()
        setEvents(data)
      } catch (error) {
        console.error("Error fetching events:", error)
      }
    }
    fetchEvents()
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Student Dashboard</h2>
      <EventList events={events} />
      <RegisterEvent events={events} />
    </div>
  )
}

export default StudentDashboard

