import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://acnhapi.com/',
})

const useApi = () => {
  return { instance }
}

export default useApi
