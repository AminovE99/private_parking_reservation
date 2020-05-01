import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createBrowserHistory } from 'history'
import { routerMiddleware, connectRouter } from 'connected-react-router/immutable'
import { combineReducers } from 'redux-immutable'
import { fromJS } from 'immutable'
import initialState from './inintial-state'
import { reducer as formReducer } from 'redux-form'
import { auth } from './features/auth/index'
import { parkingPlaces, parkingPlacesMeta } from './features/parking-place/index'
import { userProfile, userProfileMeta } from './features/user-profile/index'

export const history = createBrowserHistory()

const rootReducer = combineReducers({
    router: connectRouter(history),
    form: formReducer,
    auth,
    userProfile,
    userProfileMeta,
    parkingPlaces,
    parkingPlacesMeta
})

const enhancers = []

const composedEnhancers = compose(
    applyMiddleware(routerMiddleware(history), thunk, logger),
    ...enhancers
)

const store = createStore(
    rootReducer,
    fromJS(initialState),
    composedEnhancers
)

export default store