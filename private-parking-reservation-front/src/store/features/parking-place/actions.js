import { createActions } from 'redux-actions'
import { host } from '../../../constants'
import { fetchData, fetchJSON, addEntity, updateEntity } from '../../../utils/methods-to-work-with-api'

export const {
    requestParkingPlaces,
    receiveParkingPlaces,
    handleError,
    addParkingPlace,
    deleteParkingPlace,
    updateParkingPlace
} = createActions(
    'REQUEST_PARKINKG_PLACES',
    'RECEIVE_PARKINKG_PLACES',
    'HANDLE_ERROR',
    'ADD_PARKINKG_PLACE',
    'DELETE_PARKINKG_PLACE',
    'UPDATE_PARKINKG_PLACE'
)

export const fetchParkingPlacesData = () => {
    return dispatch => fetchData(dispatch, `${host}/parking_places`, requestParkingPlaces, receiveParkingPlaces, handleError)
}

export const addParkingPlaceAction = (dataToAdd) => {
    return async dispatch => addEntity(dispatch, dataToAdd, `${host}/parking_places`, addParkingPlace)
}

export const updateParkingPlaceAction = (dataToUpdate) => {
    return async dispatch => updateEntity(dispatch, dataToUpdate, `${host}/parking_places`, updateParkingPlace)
}

export const deleteParkingPlaceAction = (id) => {
    return async dispatch => {
        try {
            const delParkingPlaceResponse = await fetchJSON(
                `${host}/parking_places/${id}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                }
            )
            dispatch(deleteParkingPlace(id))
        } catch (error) {
            console.log(error)
        }
    }
}