import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ParkingListItem from './ParkingListItem'

const FreeParkingPlaces = ({ history }) => {
    return (
        <div className='free-parking-places'>
            <span>Cвободные места</span>
            <ParkingListItem /> 
        </div>
    )
}

export default FreeParkingPlaces