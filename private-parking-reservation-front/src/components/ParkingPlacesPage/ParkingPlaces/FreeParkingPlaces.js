import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ParkingListItem from './ParkingListItem'

const FreeParkingPlaces = ({ history }) => {
    return (
        <div className='vacant-parking-places'>
            <div className='label'><h2>Свободные</h2></div>
            <ParkingListItem />
            <ParkingListItem />
            <ParkingListItem />
        </div>
    )
}

export default FreeParkingPlaces