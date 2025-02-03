import api from "./api"

export const login = (username, password) => api.post("/auth/login", { username, password }).then((res) => res.data)
export const register = (username, password, role) =>
  api.post("/auth/register", { username, password, role }).then((res) => res.data)
export const getCurrentUser = () => api.get("/auth/me").then((res) => res.data)

