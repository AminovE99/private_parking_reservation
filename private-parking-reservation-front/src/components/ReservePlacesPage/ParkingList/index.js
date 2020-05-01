import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ParkingListItem from './ParkingListItem'

const ParkingList = ({ history }) => {
    return (
        <div className='parking-list'>
            <ParkingListItem /> 
        </div>
    )
}

export default ParkingList