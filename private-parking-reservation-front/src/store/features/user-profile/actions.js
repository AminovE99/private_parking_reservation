import { createActions } from 'redux-actions'
import { host } from '../../../constants'
import { fetchData, updateEntity } from '../../../utils/methods-to-work-with-api'

export const {
    requestProfile,
    receiveProfile,
    handleError,
    updateProfile
} = createActions(
    'REQUEST_PROFILE',
    'RECEIVE_PROFILE',
    'HANDLE_ERROR',
    'UPDATE_PROFILE'
)

export const fetchProfileData = () => {
    return dispatch => fetchData(dispatch, `${host}/profile`, requestProfile, receiveProfile, handleError)
}

export const updateProfileAction = (dataToUpdate) => {
    return async dispatch => updateEntity(dispatch, dataToUpdate, `${host}/profile`, updateProfile)
}