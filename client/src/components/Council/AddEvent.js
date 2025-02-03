import { useState } from "react"
import { createEvent } from "../../services/api"

const AddEvent = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await createEvent({ name, description, date })
      alert("Event created successfully!")
      setName("")
      setDescription("")
      setDate("")
    } catch (error) {
      console.error("Error creating event:", error)
    }
  }

  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">Add New Event</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">
            Event Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block mb-1">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="date" className="block mb-1">
            Date
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Create Event
        </button>
      </form>
    </div>
  )
}

export default AddEvent

