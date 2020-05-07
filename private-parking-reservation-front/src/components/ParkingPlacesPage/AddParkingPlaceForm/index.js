import React from 'react'
import { useForm, useField } from 'react-final-form-hooks'
import { addParkingPlaceAction } from '../../../store/features/parking-place/index'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'antd'
import { CameraOutlined } from '@ant-design/icons'
import Gallery from './Gallery'
import Map from './Map'

const validate = values => {
    const errors = {}

    if (!values.city) {
        errors.city = 'Укажите город!'
    }

    if (!values.street) {
        errors.street = 'Укажите улицу!'
    }

    if (!values.house) {
        errors.house = 'Укажите номер дома!'
    }

    if (!values.payment) {
        errors.payment = 'Укажите стоимость!'
    }

    // if (!values.birthday) {
    //     errors.birthday = 'Введите дату рождения!'
    // }

    // if (!values.avatar) {
    //     errors.avatar = 'Введите дату рождения!'
    // }

    return errors
}

// placeId: '',
// ownerId: '',
// city: 'Kazan',
// street: 'Fuchike',
//  house: '86A',
//             photos: List(['/...', '/...', '/...']), // photos
// address: 'yл. Вишневского, д.11',
//             payment: 100,
//             coordinates: [-1.135171, 52.6376],
//             placementDate: new Date(2019, 12, 21),
//             status: ''

const AddParkingPlace = () => {

    const onSubmit = async values => {
        console.log(JSON.stringify(values, 0, 4))
        dispatch(addParkingPlaceAction(values))
    }

    const dispatch = useDispatch()
    // const profile = useSelector()

    const { form, handleSubmit, values, pristine, submitting } = useForm({
        onSubmit,
        validate
    })

    const city = useField('city', form)
    const street = useField('street', form)
    const house = useField('house', form)
    const payment = useField('payment', form)
    // const coordinates = useField('coordinates', form)
    // сonst photos = useField('photos', form)

    return (
        <form onSubmit={handleSubmit}>
            <div className='add-place-wrapper-with-map'>
                <div className='add-place-inputs-wrapper'>
                    <div>
                        <input {...login.input} placeholder="Ваш логин" />
                        {city.meta.touched &&
                            city.meta.error && <span>{city.meta.error}</span>}
                    </div>

                    <div>
                        <input {...street.input} placeholder="Ваша почта" />
                        {street.meta.touched &&
                            street.meta.error && <span>{street.meta.error}</span>}
                    </div>

                    <div>
                        <input {...house.input} placeholder="phonenumber" />
                        {house.meta.touched &&
                            house.meta.error && <span>{house.meta.error}</span>}
                    </div>

                    <div>
                        <input {...payment.input} placeholder="fio" />
                        {payment.meta.touched &&
                            payment.meta.error && <span>{payment.meta.error}</span>}
                    </div>
                </div>
                <Map />
            </div>
            <Button><CameraOutlined /> Загрузите фото</Button>
            <Gallery />
            <Button type='primary'>Сохранить</Button>
        </form>
    )
}

export default AddParkingPlace