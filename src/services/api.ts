import axios from "axios"

export const api = axios.create({
  baseURL: "https://pokeapi.co"
})
export const db = axios.create({
  baseURL: "http://localhost:8002"
})