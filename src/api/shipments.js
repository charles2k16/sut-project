import axios from 'axios'

export default {
  name: "shipmentsApi",

  addShipment (shipment) {
    let url = 'https://boiling-badlands-97720.herokuapp.com/api/v1/shipments'
    return axios.post(url, shipment)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  },

  getShipments () {
    let url = 'https://boiling-badlands-97720.herokuapp.com/api/v1/shipments'
    return axios.get(url)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  }
}