import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ParkingPlaces from './ParkingPlaces/index'
import plusImg from '../../resourse/images/plus.svg'
import style from './parking-places-page.css'

const MyParkingPlaces = ({ history }) => {
    return (
        <div className='my-parking-places-page'>
            <h1>Мои парковочные места</h1>
            <button>
                <div className='button-content'>
                    <img src={plusImg} />
                    <span>Добавить место</span>
                </div>
            </button>
            <ParkingPlaces />
        </div>
    )
}

export default MyParkingPlaces