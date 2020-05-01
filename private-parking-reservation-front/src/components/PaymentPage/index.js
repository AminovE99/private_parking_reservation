import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ParkingPlaces from './ParkingPlaces/index'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

const PaymentPage = ({ history }) => {
    return (
        <div className='payment-page'>
            <span>Оплата и подтверждение</span>
            {/* <div>
                <span>Мои парковочные места</span>
                <Button><PlusOutlined /><span>Добавить</span></Button>
                <ParkingPlaces />
            </div> */}
        </div>
    )
}

export default PaymentPage