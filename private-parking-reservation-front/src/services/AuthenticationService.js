import axios from 'axios'
import Cookies from 'universal-cookie';

const API_URL = 'http://localhost:8080'
const cookies = new Cookies();

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
export const TOKEN = 'token'

class AuthenticationService {

    //     executeJwtLogin(login, password) {
    //         console.log(login);
    //         return axios.post(`${API_URL}/login`, {
    //             login,
    //             password
    //         })
    //     }

    //     executeJwtRegister(login, email, password) {
    //         console.log(login);
    //         return axios.post(`${API_URL}/register`, {
    //             login,
    //             email,
    //             password
    //         })
    //     }

    //     registerSuccessfulLoginForJwt(username, token) {
    //         localStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
    //         localStorage.setItem('AUTH', token)
    //         cookies.set('AUTH', token, { path: '/' });
    //         //this.setupAxiosInterceptors(/*this.createJWTToken(token)*/token)
    //     }

    //     // createJWTToken(token) {
    //     //     return 'Bearer ' + token
    //     // }


    //     logout() {
    //         localStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    //         localStorage.removeItem(TOKEN);
    //     }

    //     isUserLoggedIn() {
    //         let user = localStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
    //         if (user === null) return false
    //         return true
    //     }

    //     getLoggedInUserName() {
    //         let user = localStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
    //         if (user === null) return ''
    //         return user
    //     }

    //     setupAxiosInterceptors(token) {
    // /*        axios.interceptors.request.use(
    //             (config) => {
    //                 if (this.isUserLoggedIn()) {
    //                     config.headers.AUTH = token
    //                 }
    //                 return config
    //             }
    //         )*/
    //         axios.defaults.headers.common['AUTH'] = token;
    //     }
}

export default new AuthenticationService()