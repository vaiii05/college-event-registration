import { useState, useEffect } from "react"
import { getUnapprovedEvents, approveEvent } from "../../services/api"

const ApproveEvents = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getUnapprovedEvents()
        setEvents(data)
      } catch (error) {
        console.error("Error fetching unapproved events:", error)
      }
    }
    fetchEvents()
  }, [])

  const handleApprove = async (eventId) => {
    try {
      await approveEvent(eventId)
      setEvents(events.filter((event) => event._id !== eventId))
    } catch (error) {
      console.error("Error approving event:", error)
    }
  }

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-2">Approve Events</h3>
      <ul className="space-y-2">
        {events.map((event) => (
          <li key={event._id} className="border p-2 rounded flex justify-between items-center">
            <div>
              <h4 className="font-bold">{event.name}</h4>
              <p>{event.description}</p>
              <p>Date: {new Date(event.date).toLocaleDateString()}</p>
            </div>
            <button
              onClick={() => handleApprove(event._id)}
              className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600"
            >
              Approve
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ApproveEvents

