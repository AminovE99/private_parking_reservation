import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ParkingPlaces from './ParkingPlaces/index'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

const MyParkingPlaces = ({ history }) => {
    return (
        <div className='my-parking-places'>
            <div>
                <span>Мои парковочные места</span>
                <Button><PlusOutlined /><span>Добавить</span></Button>
                <ParkingPlaces />
            </div>
        </div>
    )
}

export default MyParkingPlaces