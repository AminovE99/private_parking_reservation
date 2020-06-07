import React, { useCallback } from 'react'
import photo1Img from '../../../resourse/images/photo1.png'
import photo2Img from '../../../resourse/images/photo2.png'
import photo3Img from '../../../resourse/images/photo3.png'
import photo4Img from '../../../resourse/images/photo4.png'

const Gallery = ({ history }) => {
    return (
<div className='photos'>
			<img src={photo1Img}/>
			<img src={photo2Img}/>
			<img src={photo3Img}/>
			<img src={photo4Img}/>
			<button>Сохранить</button>			
		</div>
    )
}

export default Gallery