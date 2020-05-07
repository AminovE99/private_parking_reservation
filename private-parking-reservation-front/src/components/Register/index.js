import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import AppName from '../universal-components/AppName'
import SignUpForm from './SignUpForm'
import styles from '../../resourse/LoginAndReg.css'

const Register = ({ history }) => {

    console.log(history)
    const error = useSelector(state => state.get('auth').get('error'))

    const errorMessage = () => {
        if (error) {
            return (
                <div className="info-red">
                    {error}
                </div>
            )
        }
    }

    return (
        <div className='auth'>
            <AppName />
            <SignUpForm />

            <div id="redirect" style={{paddingTop: '10%'}}>
                <n>Уже регистрировались?</n>
                <NavLink exact to="/login">
                    <button>Перейти ко входу</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Register