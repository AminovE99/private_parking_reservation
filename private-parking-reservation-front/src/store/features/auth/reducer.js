import { handleActions } from 'redux-actions'
import { authenticatedUser, unauthenticatedUser, authenticationError } from './actions'
import { authenticated, error } from '../../../constants'
import initialState from '../../inintial-state'

export const auth = handleActions({

    [authenticatedUser]: (state, action) => (
        state.set(authenticated, true)
    ),

    [unauthenticatedUser]: (state, action) => (
        state.set(authenticated, false)
    ),

    [authenticationError]: (state, action) => (
        state.set(error, action.payload)
    )

}, initialState.auth)

export default auth