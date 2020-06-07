import React from 'react'
import redoImg from '../../../resourse/images/redo.svg'
import undoImg from '../../../resourse/images/undo.svg'

const OperationHistoryItem = ({ item, direction, status }) => {

    const statusClassName = status === 'Арендуется' ? 'status1' : 'status2'
    const imgToShow = direction === 'redo' ? redoImg : undoImg

    return (
        <div className='operation'>
			<img src={imgToShow} />
			<div className='notification'>Ваше место арендовали</div>
			<div className='place'>ул. Вишнеского, д.61<div className='quantity'>1 место</div></div>
			<div className='date'>13.03.2019</div>
			<div className={statusClassName}>{status}</div>
		</div>
    )
}

export default OperationHistoryItem