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
  addSchool (schoolData) {
    let url = 'https://schools-under-trees-op4he.ondigitalocean.app/create-school/'
    return axios.post(url, schoolData)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  addDistrict (districtData) {
    let url = 'https://schools-under-trees-op4he.ondigitalocean.app/create-district/'
    return axios.post(url, districtData)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
  sendEmail (emailForm) {
    let url = "https://schools-under-trees-op4he.ondigitalocean.app/send-email/"
    return axios.post(url, emailForm)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  },
  uploadImages (fileData) {
    let url = "https://schools-under-trees-op4he.ondigitalocean.app/upload-images/"
    return axios.post(url, fileData)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  },
  addSchoolImages (images) {
    let url = "https://schools-under-trees-op4he.ondigitalocean.app/add-images/"
    return axios.post(url, images)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  }
}