import axios from 'axios'

export default {
  name: "shipmentsApi",

  addShipment (shipment) {
    let url = 'https://boiling-badlands-97720.herokuapp.com/api/v1/shipments'
    return axios.post(url, shipment)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },

  editShipment (shipment) {
    let url = 'https://boiling-badlands-97720.herokuapp.com/api/v1/shipments/' + shipment._id
    return axios.put(url, shipment)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },

  getShipments () {
    let url = 'https://boiling-badlands-97720.herokuapp.com/api/v1/shipments'
    return axios.get(url)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },

  getShipmentsByTracking (trackindId) {
    let url = 'https://boiling-badlands-97720.herokuapp.com/api/v1/shipments/track/' + trackindId
    return axios.get(url)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },

  getUsers () {
    let url = 'https://boiling-badlands-97720.herokuapp.com/api/v1/users'
    return axios.get(url)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  }
}