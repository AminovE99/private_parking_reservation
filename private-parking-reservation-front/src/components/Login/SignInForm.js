import React from 'react'
import { useForm, useField } from 'react-final-form-hooks'
// import SendFormButton from './SendFormButton'
// import FormInput from './FormInput'
import { loginAction } from '../../store/features/auth/index'
import { useDispatch } from 'react-redux'


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
        <form onSubmit={handleSubmit}>
            <div>
                <input {...login.input} placeholder="Ваш логин" />
                {login.meta.touched &&
                    login.meta.error && <span>{login.meta.error}</span>}
            </div>
            <div>
                <input {...password.input} placeholder="Ваш пароль" type='password' />
                {password.meta.touched &&
                    password.meta.error && <span>{password.meta.error}</span>}
            </div>
            <div className="button">
                <button type="submit" disabled={submitting}>
                    Войти
                </button>
            </div>
        </form>
    )
}

export default SignInForm

{/* <div className='sign-in-form-input'>
            <FormInput className={'login'}
                handleOnChange={handleOnChangeLogin}
                value={login}
                placeholder={'Ваш логин'} />
        </div>
        <div className='sign-in-form-input'>
            <FormInput className={'password'}
                handleOnChange={handleOnChangePassword}
                value={password}
                placeholder={'Ваш пароль'} />
        </div>

        <SendFormButton text={'Войти'}
            handleOnSubmit={handleOnSubmit} /> */}
