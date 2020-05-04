import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import AppName from '../universal-components/AppName'
import styles from '../../resourse/LoginAndReg.css'
import SignInForm from './SignInForm'
import styled from 'styled-components'

const linkToReg = styled.span`
    position: absolute;
    width: 260px;
    height: 50px;
    border-radius: 10px;
    background:  none;
    border: 1px solid #ffffff;
    font: 18px 'SF Display';
    font-weight: 100;
    color: #ffffff;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
`
const Redirect = styled.div`
    margin-left: 20%
    position: relative;
    height: 220px;
`
const Label = styled.label`
    position: absolute;
	width: 130px;
	height: 21px;
	bottom: 70px;
	left: 0;
	right: 0;
	margin: auto;
	font: 18px 'SF Display';
	font-weight: 100;
	color: #ffffff;
`

export const Login = ({ history }) => {

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
            <SignInForm />
            <div id='redirect' style={{paddingTop: '5%'}}>
                <n style={{ left: '30px', right: '0px'}}>
                    Вы тут впервые?
                </n>
                <NavLink exact to='/register'>
                    <button>Зарегистрироваться</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Login