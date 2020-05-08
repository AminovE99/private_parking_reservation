import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import SignInForm from '../SignInForm'
import Search from './Search'
import Map from './Map'
import ParkingList from './ParkingList/index'
import css from './reserve-place-page.css'

const ReservePlacesPage = ({ history }) => {
    return(
        <div className='booking'>
            <Search />
            <Map />
            <ParkingList />
        </div>
    )
}

export default ReservePlacesPage