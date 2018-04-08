import axios from 'axios'

export default class SearchService {
  search (query) {
    return axios.get(`https://images-api.nasa.gov/search?q=${encodeURIComponent(query)}`)
      .then((response) => {
        return response.data.collection
      })
  }
}
