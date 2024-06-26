import axios from "axios"

const url:string = "https://pokeapi.co/api/v2/pokemon"

export const api = axios.create({
  baseURL: "https://pokeapi.co"
})