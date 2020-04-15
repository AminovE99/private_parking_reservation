import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

export default (ComposedComponent) => (props) => {

    const authenticated = useSelector(state => state.get('auth').get('authenticated'))
    
    console.log(props)
    console.log(props.history)
    
    useEffect(() => {
        if (authenticated) {
            props.history.push('/profile')
        }
    }, [])

    return <ComposedComponent {...props} />
}