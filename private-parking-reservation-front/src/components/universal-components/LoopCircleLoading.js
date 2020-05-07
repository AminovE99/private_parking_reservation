import React from 'react'
import { LoopCircleLoading as Loading } from 'react-loadingg'

const LoopCircleLoading = ({ className }) => {
    return (
        <div className={className}>
            <Loading color='#47c4da' size='small' />
        </div>
    )
}

export default LoopCircleLoading