import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Carousel, Button } from 'antd'


const ParkingReservation = ({ history }) => {
    return (
        <div className='parking-reserve-view'>
            <Carousel autoplay>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
            </Carousel>
            <div className='parking-place-info'>
                <div>
                    <span>Ул. ... д. ....</span>
                    <span>100р/ч</span>
                </div>
                <br />
                <span>Город,регион,страна</span>
            </div>
            <Button>Забронировать</Button>
        </div>
    )
}

export default ParkingReservation