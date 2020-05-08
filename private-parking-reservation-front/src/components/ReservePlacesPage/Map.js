import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import bigmapImg from '../../resourse/images/bigmap.png'

const Map = ({ history }) => {
    return (
        <div className='map'>
			<img src={bigmapImg}/>
		</div>
    )
}

export default Map

