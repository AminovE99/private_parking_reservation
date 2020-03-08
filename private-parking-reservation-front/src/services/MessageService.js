import axios from 'axios'

const url = 'http://localhost:8080'

export const TOKEN = 'token'

class ParkingService {

    // retrieveAllMessages() {
    //     //console.log('executed service')
    //     return axios.get(`${url}/messages`,
    //         //{ headers: { authorization: 'Basic ' + window.btoa(INSTRUCTOR + ":" + PASSWORD) } }
    //         {headers: {Authorization : 'Bearer ' + localStorage.getItem(TOKEN)}});
    // }

    // connect() {

    // }

    // send(text) {
    //     return axios.post(`${url}/messages`, {
    //         text
    //     }, {headers: {Authorization : 'Bearer ' + localStorage.getItem(TOKEN)}});
    // }
}

export default new ParkingService()