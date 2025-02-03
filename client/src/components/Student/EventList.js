const EventList = ({ events }) => {
    return (
      <div>
        <h3 className="text-xl font-semibold mb-2">Available Events</h3>
        <ul className="space-y-2">
          {events.map((event) => (
            <li key={event._id} className="border p-2 rounded">
              <h4 className="font-bold">{event.name}</h4>
              <p>{event.description}</p>
              <p>Date: {new Date(event.date).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  
  export default EventList
  
  