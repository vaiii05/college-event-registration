import axios from "axios"

const API_URL = "http://localhost:5000/api"

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export const getEvents = () => api.get("/events").then((res) => res.data)
export const createEvent = (eventData) => api.post("/events", eventData).then((res) => res.data)
export const getUnapprovedEvents = () => api.get("/events/unapproved").then((res) => res.data)
export const approveEvent = (eventId) => api.patch(`/events/${eventId}/approve`).then((res) => res.data)
export const registerForEvent = (eventId) => api.post("/registrations", { eventId }).then((res) => res.data)
export const getRegistrations = () => api.get("/registrations").then((res) => res.data)
export const verifyAttendance = (registrationId) =>
  api.patch(`/registrations/${registrationId}/verify`).then((res) => res.data)

export default api

