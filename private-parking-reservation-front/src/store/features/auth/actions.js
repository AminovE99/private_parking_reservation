import { createActions } from 'redux-actions'
import { host } from '../../../constants'
import { fetchJSON } from '../../../utils/methods-to-work-with-api'
// import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'

export const {
    authenticatedUser,
    unauthenticatedUser,
    authenticationError
} = createActions(
    'AUTHENTICATED_USER',
    'UNAUTHENTICATED_USER',
    'AUTHENTICATION_ERROR',
)

export const loginAction = ({ login, password }, history) => {
    return async (dispatch) => {
        try {
            console.log({ login, password} )
            const response = await axios.post(`${host}/login`, { login, password })
            console.log(response)
            console.log(response.data.token)
            dispatch(authenticatedUser())
            localStorage.setItem('user', response.data.token)
            history.push('/profile')
        } catch (error) {
            dispatch(authenticationError('Invalid email or password'))
        }
    }
}

// export const autoLogin = () => dispatch => {
//     fetch(`http://localhost:4000/auto_login`, {
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//             "Authorization": `Bearer ${localStorage.getItem("token")}`
//         }
//     })
//     .then(res => res.json())
//     .then(data => {
//         // data sent back will in the format of
//         // {
//         //     user: {},
//         //.    token: "aaaaa.bbbbb.bbbbb"
//         // }
//         localStorage.setItem("token", data.token)
//         dispatch(setUser(data.user))
//     })
// }

export const registerAction = ({ login, email, password }, history) => {
    return async (dispatch) => {
        try {
            // const id = uuidv4()
            console.log({ login, email, password })
            const response = await fetchJSON(
                `${host}/register`,
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ login, email, password })
                }
            )
            console.log(response)
            // console.log(history)
            // axios.post(`${host}/register`, { login, email, password })
            // const response = await 
            // console.log(response)
            // dispatch(authenticatedUser())
            // history.push('/login')
        } catch (error) {
            console.log(error)
        }
    }
}

export const signOutAction = () => {
    return (dispatch) => {
        localStorage.clear();
        dispatch(unauthenticatedUser)
    }
}