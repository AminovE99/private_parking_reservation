import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import AppName from '../universal-components/AppName'
import SignUpForm from './SignUpForm'
import Styles from '../Login/Styles'

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
            <label>Регистрация</label>
            <div>
                <Styles>
                    <SignUpForm />
                </Styles>
            </div>

            <label>Уже регистрировались?</label>
            <div>
                <NavLink exact to="/login" className='nav-to'>
                    <span>Перейти ко входу</span>
                </NavLink>
            </div>
        </div>
    )
}

export default Register