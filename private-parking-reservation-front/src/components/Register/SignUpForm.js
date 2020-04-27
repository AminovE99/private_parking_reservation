import React, { useState } from 'react'
import { useForm, useField } from 'react-final-form-hooks'
import { registerAction } from '../../store/features/auth/index'
// import { useFormInput, useFormSubmit } from '../../hooks/customHooksForForm'
// import SendFormButton from '../form-components/SendFormButton'
// import FormInput from '../form-components/FormInput'
// import '../form.css'
import { useDispatch } from 'react-redux'

const validate = values => {
    const errors = {}

    if (!values.login) {
        errors.login = 'Введите логин или email!'
    }

    if (!values.email) {
        errors.email = 'Введите почту!'
    }
    
    if (!values.password) {
        errors.password = 'Введите пароль!'
    }

    return errors
}

const SignUpForm = () => {
    const onSubmit = async values => {
        console.log(JSON.stringify(values, 0, 3))
        dispatch(registerAction(values))
    }

    const dispatch = useDispatch()

    const { form, handleSubmit, values, pristine, submitting } = useForm({
        onSubmit,
        validate
    })

    const login = useField('login', form)
    const email = useField('email', form)
    const password = useField('password', form)

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input {...login.input} placeholder="Ваш логин" />
                {login.meta.touched &&
                    login.meta.error && <span>{login.meta.error}</span>}
            </div>
            <div>
                <input {...email.input} type='email' placeholder="Ваша почта" />
                {email.meta.touched &&
                    email.meta.error && <span>{email.meta.error}</span>}
            </div>
            <div>
                <input {...password.input} type='password' placeholder="Ваш пароль" />
                {password.meta.touched &&
                    password.meta.error && <span>{password.meta.error}</span>}
            </div>
            <div className="button">
                <button type="submit" disabled={submitting}>
                    Зарегистрироваться
                </button>
            </div>
        </form>
    )
}

export default SignUpForm