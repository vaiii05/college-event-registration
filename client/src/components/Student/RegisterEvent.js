import { useState } from "react"
import { registerForEvent } from "../../services/api"

const RegisterEvent = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await registerForEvent(selectedEvent)
      alert("Successfully registered for the event!")
      setSelectedEvent("")
    } catch (error) {
      console.error("Error registering for event:", error)
    }
  }

  return (
    <div className="mt-4">
      <h3 className="text-xl font-semibold mb-2">Register for an Event</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="event" className="block mb-1">
            Select Event
          </label>
          <select
            id="event"
            value={selectedEvent}
            onChange={(e) => setSelectedEvent(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          >
            <option value="">Select an event</option>
            {events.map((event) => (
              <option key={event._id} value={event._id}>
                {event.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
          Register
        </button>
      </form>
    </div>
  )
}

export default RegisterEvent

