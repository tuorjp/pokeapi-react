import axios from "axios"

//https://pokeapi.co/api/v2/pokemon/{id or name}/

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
    headers: {
        'Content-Type': 'application/json'
    },
})

export default api