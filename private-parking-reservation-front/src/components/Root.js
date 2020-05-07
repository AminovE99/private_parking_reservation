import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router/immutable'
import { Provider } from 'react-redux'
import App from './App'

const Root = ({ store, history }) => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </Provider>
    )
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}

export default Root