import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

const ParkingListItem = ({ history }) => {
    return (
        <div className='parking-place-item'>
            <span>Адрес</span>
            <span>100у.е/час</span>
            <span>01.01.2020</span>
            <Button>Посмотреть</Button>
        </div>
    )
}

export default ParkingListItem