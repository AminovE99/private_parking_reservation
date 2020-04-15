import { handleActions } from 'redux-actions'
import {
    requestProfile,
    receiveProfile,
    handleError,
    updateProfile
} from './index'
import initialState from '../../inintial-state'
import {
    isFetching,
    didInvalidate
} from '../../../constants'

export const userProfile = handleActions({

    [receiveProfile]: (state, action) => (
        state.merge(action.payload.parkingPlaces)
    ),

    [updateProfile]: (state, action) => {
        const index = state.findIndex(i => i.id === action.payload.id)
        return state.set(index, {
            id: action.payload.id,
            login: action.payload.login,
            email: action.payload.email,
            phonenumber: action.payload.phonenumber,
            fio: action.payload.fio,
            birthday: action.payload.birthday,
            avatar: action.payload.avatar,

        })
    },
}, initialState.userProfile)

export const userProfileMeta = handleActions({
    [requestProfile]: (state, action) => (
        state.set(isFetching, action.payload.isFetching)
    ),

    [handleError]: (state, action) => (
        state.set(didInvalidate, action.payload.didInvalidate)
    ),
}, initialState.userProfileMeta)