import axios from 'axios'

export default {
  name: "schoolsApi",

  getSchoolsList () {
    let url = 'https://schools-under-trees-op4he.ondigitalocean.app/all-schools/'
    return axios.get(url)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },

  getSchoolRegions () {
    let url = 'https://schools-under-trees-op4he.ondigitalocean.app/regions/'
    return axios.get(url)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
}