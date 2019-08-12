import axios from 'axios'

const instance = axios.create({
   baseURL: 'https://api.thedogapi.com/v1/',
   headers: {'x-api-key': process.env.REACT_APP_API_KEY}
})

export default instance