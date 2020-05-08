import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import pointImg from '../../../resourse/images/point.svg'

const ParkingListItem = ({ history }) => {
    return (
        <div className='parking-place-item'>
            <img src={pointImg} />
            <div className='spaceinfo'>
                <div>
                    <span className='street'>ул. Вишнеского, д.11</span>
                </div>
                <div>
                    <span className='cost'>100 ₽ / час</span>
                </div>
                <div>
                    <span className='count'>2 места</span>
                </div>
                <div>
                    <span className='day'>13.03.2019</span>
                </div>
            </div>
            <button>Посмотреть</button>
        </div>
    )
}

export default ParkingListItem