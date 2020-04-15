import React from 'react'

const FormInput = ({ className, value, placeholder, handleOnChange }) => {
    return (
        <input className={className}
            onChange={handleOnChange}
            value={value}
            placeholder={placeholder} />
    )
}

export default FormInput