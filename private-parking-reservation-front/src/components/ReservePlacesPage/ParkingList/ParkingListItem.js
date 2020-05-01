import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'antd'

const ParkingListItem = ({ history }) => {
    return (
        <div className='parking-place-item'>
            <span>Адрес</span>
            <span>01.01.2020</span>
            <span>100у.е/час</span>
            <Button>Забронировать</Button>
        </div>
    )
}

export default ParkingListItem