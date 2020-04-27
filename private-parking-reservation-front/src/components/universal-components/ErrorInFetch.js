import React from 'react'

const ErrorInFetch = ({ className, text }) => {
    return (
        <div>
            <span className={className}>
                <b><i>{text}</i></b>
            </span>
        </div>
    )
}

export default ErrorInFetch