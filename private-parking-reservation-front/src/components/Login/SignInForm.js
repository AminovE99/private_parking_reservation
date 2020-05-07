import React from 'react'
import { useForm, useField } from 'react-final-form-hooks'
import { loginAction } from '../../store/features/auth/index'
import { useDispatch } from 'react-redux'
import loginImg from '../../resourse/images/login.svg'
import pswImg from '../../resourse/images/password.svg'
import styled from 'styled-components'

const Form = styled.div`
    position: absolute;
    width: 396px;
    height: 250px;
    left: 0;
    right: 0;
    bottom: 0;
    top:0;
    margin:auto;
`;

const ImgInInput = styled.img`
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    bottom: 0;
    margin: auto;
`

const validate = values => {
    const errors = {}

    if (!values.login) {
        errors.login = 'Введите логин или email!'
    }

    if (!values.password) {
        errors.password = 'Введите пароль!'
    }

    return errors
}

export const SignInForm = () => {

    const onSubmit = async values => {
        console.log(JSON.stringify(values, 0, 2))
        dispatch(loginAction(values))
    }

    const dispatch = useDispatch()

    const { form, handleSubmit, values, pristine, submitting } = useForm({
        onSubmit,
        validate
    })

    const login = useField('login', form)
    const password = useField('password', form)

    return (
        <div id="log">
            <n>Войдите или создайте новую учетную запись</n>
            <form onSubmit={handleSubmit}>
                <div id="in">
                    <p>
                        <ImgInInput src={loginImg} />
                        <input {...login.input}
                            placeholder='Ваш логин'
                            type='text' />
                        {login.meta.touched &&
                            login.meta.error && <span>{login.meta.error}</span>}
                    </p>

                    <p>
                        <ImgInInput src={pswImg} />
                        <input {...password.input} 
                            placeholder='Ваш пароль' 
                            type='password' />
                        {password.meta.touched &&
                            password.meta.error && <span>{password.meta.error}</span>}
                    </p>

                    <button type='submit' 
                        disabled={submitting} 
                        style={{ margin: 'auto', marginTop: '4%' }}>
                        Войти
                    </button>
                    <div id='forgot'>
                        <a href='#'>
                            <n>Забыли пароль?</n>
                        </a>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignInForm