import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import  FreeParkingPlaces  from './FreeParkingPlaces'
import  TakenParkingPlaces  from './TakenParkingPlaces'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

const ParkingPlaces = ({ history }) => {
    return (
        <div className='parking-places'>
            <span>Свободные</span>
            <FreeParkingPlaces />
            <hr />
            <span>Занятые</span>
            <TakenParkingPlaces />
        </div>
    )
}

export default ParkingPlaces

