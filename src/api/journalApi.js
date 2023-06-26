import axios from 'axios'

const journalApi = axios.create({
  baseURL: 'API_KEY'
})

export default journalApi
