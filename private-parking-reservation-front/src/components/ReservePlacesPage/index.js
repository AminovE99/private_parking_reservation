import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import SignInForm from '../SignInForm'
import Search from './Search'
import Map from './Map'
import ParkingList from './ParkingList/index'

const ReservePlacesPage = ({ history }) => {
    return(
        <div>
            <Search />
            <Map />
            <ParkingList />
        </div>
    )
}

export default ReservePlacesPage