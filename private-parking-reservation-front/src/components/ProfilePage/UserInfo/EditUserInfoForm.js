import React from 'react'
import { useForm, useField } from 'react-final-form-hooks'
import { updateProfileAction } from '../../../store/features/user-profile/index'
import { useDispatch, useSelector } from 'react-redux'

const validate = values => {
    const errors = {}

    if (!values.login) {
        errors.login = 'Введите логин или email!'
    }

    if (!values.email) {
        errors.email = 'Введите почту!'
    }

    if (!values.phonenumber) {
        errors.phonenumber = 'Введите номер телефона!'
    }

    if (!values.fio) {
        errors.fio = 'Введите Ф.И.О.!'
    }

    if (!values.birthday) {
        errors.birthday = 'Введите дату рождения!'
    }
    
    // if (!values.avatar) {
    //     errors.avatar = 'Введите дату рождения!'
    // }

    return errors
}

// login: 'admin',
// email: 'some@ya.ru',
// phonenumber: '+79872921954',
// fio: 'Админов Админ Админыч',
// birthday: new Date(1945, 0, 1),
// avatar: '/url_to_avatar',

const EditUserInfoForm = () => {

    const onSubmit = async values => {
        console.log(JSON.stringify(values, 0, 3))
        dispatch(updateProfileAction(values))
    }

    const dispatch = useDispatch()
    // const profile = useSelector()

    const { form, handleSubmit, values, pristine, submitting } = useForm({
        onSubmit,
        validate
    })
    
    const login = useField('login', form)
    const email = useField('email', form)
    const phonenumber = useField('phonenumber', form)
    const fio = useField('fio', form)
    const birthday = useField('bithday', form)

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input {...login.input} placeholder="Ваш логин" />
                {login.meta.touched &&
                    login.meta.error && <span>{login.meta.error}</span>}
            </div>
            
            <div>
                <input {...email.input} placeholder="Ваша почта" />
                {email.meta.touched &&
                    email.meta.error && <span>{email.meta.error}</span>}
            </div>

            <div>
                <input {...phonenumber.input} placeholder="phonenumber" />
                {phonenumber.meta.touched &&
                    phonenumber.meta.error && <span>{phonenumber.meta.error}</span>}
            </div>

            <div>
                <input {...fio.input} placeholder="fio" />
                {fio.meta.touched &&
                    fio.meta.error && <span>{fio.meta.error}</span>}
            </div>
            <div>
                <input {...birthday.input} placeholder="birthday" />
                {birthday.meta.touched &&
                    birthday.meta.error && <span>{birthday.meta.error}</span>}
            </div>
        </form>
    )
}

export default EditUserInfoForm