import React from 'react'
import phoneImg from '../../resourse/images/phone.svg'
import chatImg from '../../resourse/images/chat.svg'
import instaImg from '../../resourse/images/instagramm.svg'
import youtubeImg from '../../resourse/images/youtube.svg'
import vkImg from '../../resourse/images/vk.svg'

const Footer = () => {
    return (
		<footer className='footer'>
			<div className='icons'>
				<div className='communication'>
					<input type='image' src={phoneImg} />
					<input type='image' src={chatImg} />
				</div>
				<div className='contacts'>
					<input type='image' src={instaImg} />
					<input type='image' src={youtubeImg} />
					<input type='image' src={vkImg} />
				</div>
			</div>
		</footer>
    )
}

export default Footer