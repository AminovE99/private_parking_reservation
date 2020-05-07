import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import  ParkingListItem  from './ParkingListItem'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

const TakenParkingPlaces = ({ history }) => {
    return (
        <div className='taken-parking-places'>
            <span>Занятые места</span>
            <ParkingListItem /> 
        </div>
    )
}

export default TakenParkingPlaces