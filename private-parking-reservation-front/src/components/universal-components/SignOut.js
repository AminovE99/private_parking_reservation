import React, { useCallback } from 'react'
import { signOutAction } from '../../store/features/auth/index'
import { useDispatch } from 'react-redux'
// import SignInForm from '../SignInForm'

export const SignOut = () => {

    const dispatch = useDispatch()

    const handleOnSubmit = useCallback(e => {
        e.preventDefault()
        dispatch(signOutAction()) 
    }, [])

    return (
        <div className='logout'>
            <span onClick={handleOnSubmit}>Log out</span>
        </div>
    )
}

export default SignOut