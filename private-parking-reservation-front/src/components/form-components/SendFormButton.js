import React from 'react'

const SendFormButton = ({ text, handleOnSubmit }) => {
    return (
        <button className={'btn-send'}
            onClick={handleOnSubmit}>
            {text}
        </button>
    )
}

export default SendFormButton