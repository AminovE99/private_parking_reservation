import { handleActions } from 'redux-actions'
import {
    requestParkingPlaces,
    receiveParkingPlaces,
    handleError,
    addParkingPlace,
    updateParkingPlace,
    deleteParkingPlace
} from './index'
import initialState from '../../inintial-state'
import {
    isFetching,
    didInvalidate
} from '../../../constants'

export const parkingPlaces = handleActions({

    [receiveParkingPlaces]: (state, action) => (
        state.merge(action.payload.parkingPlaces)
    ),

    [addParkingPlace]: (state, action) => (
        state.push({
            placeId: action.payload.placeId,
            ownerId: action.payload.ownerId,
            city: action.payload.city,
            street: action.payload.street,
            house: action.payload.house,
            photos: action.payload.photos, // photos
            address: action.payload.address,
            payment: action.payload.payment,
            coordinates: action.payload.coordinates,
            placementDate: action.payload.placementDate,
            status: action.payload.status
        })
    ),

    [updateParkingPlace]: (state, action) => {
        const index = state.findIndex(i => i.id === action.payload.placeId)
        return state.set(index, {
            placeId: action.payload.placeId,
            ownerId: action.payload.ownerId,
            city: action.payload.city,
            street: action.payload.street,
            house: action.payload.house,
            photos: action.payload.photos, // photos
            address: action.payload.address,
            payment: action.payload.payment,
            coordinates: action.payload.coordinates,
            placementDate: action.payload.placementDate,
            status: action.payload.status
        })
    },

    [deleteParkingPlace]: (state, action) => {
        const index = state.findIndex(i => i.id === action.payload)
        return state.delete(index)
    },
}, initialState.parkingPlaces)

export const parkingPlacesMeta = handleActions({
    [requestParkingPlaces]: (state, action) => (
        state.set(isFetching, action.payload.isFetching)
    ),

    [handleError]: (state, action) => (
        state.set(didInvalidate, action.payload.didInvalidate)
    ),
}, initialState.parkingPlacesMeta)