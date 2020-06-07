import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import  FreeParkingPlaces  from './FreeParkingPlaces'
import  TakenParkingPlaces  from './TakenParkingPlaces'

const ParkingPlaces = ({ history }) => {
    return (
        <div className='parking-places'>
            <FreeParkingPlaces />
            <hr />
            <TakenParkingPlaces />
        </div>
    )
}

export default ParkingPlaces

