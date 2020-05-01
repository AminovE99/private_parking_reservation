import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import AppName from '../universal-components/AppName'
import Styles from './Styles'
import SignInForm from './SignInForm'
// import { Field, reduxForm } from 'redux-form'

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

    // const submit = (values) => {
    //     console.log(values)
    //     dispatch(loginAction(values))
    // }

    // const handleOnSubmit = useCallback(e => {
    //     e.preventDefault()
    //     submit()
    // }, [])

    // const { handleSubmit } = this.props
    // console.log(handleSubmit)

    return (
        <div className='auth'>
            <AppName />
            <label>Войдите или создайте новую учетную запись</label>
            <div>
                <Styles>
                    <SignInForm />
                </Styles>

                <div style={{ marginBottom: '20%' }}>
                    <a href="#" className="forgot-pass">
                        Забыли пароль?
                        </a>
                </div>
            </div>

            <label>Вы тут впервые?</label>
            <div>
                <NavLink exact to="/register" className='nav-to'>
                    <span>Зарегистрироваться</span>
                </NavLink>
            </div>
        </div>
    )
}

export default Login


{/* <div className="container">
                        <h2>Sign In</h2>
                        <form onSubmit={handleOnSubmit}>
                            <Field name="email"
                                component="input"
                                type="text"
                                placeholder="Email"
                            />
                            <Field name="password"
                                component="input"
                                type="password"
                                placeholder="Password"
                            />
                            <button type="submit" className="blue">Sign in</button>
                        </form>
                        {errorMessage()}
                    </div>

export default reduxForm({
    form: 'login'
})(Login) */}