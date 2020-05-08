import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import phonePurpImg from '../../../resourse/images/phonepurp.svg'
import dotImg from '../../../resourse/images/dot1.svg'

const ParkingListItem = ({ history }) => {
    return (
        <div className='parking-list-item'>
            <img src={dotImg}/>
            <div className='location'>
                ул. Вишнеского, д.11
			</div>
            <div className='empty'>
                Свободно:<div className='num'>1</div>
            </div>
            <div className='cost'>
                100 ₽ / час
				</div>
            <div className='renter'>
                <img src={phonePurpImg} />
            </div>
            <button>
                Забронировать
			</button>
        </div>
    )
}

export default ParkingListItem