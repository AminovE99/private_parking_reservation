import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import  ParkingListItem  from './ParkingListItem'

const TakenParkingPlaces = ({ history }) => {
    return (
        <div className='occupy-parking-places'>
            <div className='label'><h2>Занятые</h2></div>
            <ParkingListItem />
        </div>
    )
}

export default TakenParkingPlaces