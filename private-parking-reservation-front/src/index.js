import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import store, { history } from './store/index'
import Root from './components/Root'
import './App.css'
// import './styles/styles.scss' // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
// import App from './components/App'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import { authenticatedUser } from './store/features/auth/index'

const rootElement = document.getElementById('root')

const user = localStorage.getItem('user')

if (user) {
    store.dispatch(authenticatedUser())
}

render(
    <AppContainer>
        <Root store={store} history={history} />
    </AppContainer>,
    rootElement
)

if (module.hot) {
    module.hot.accept('./components/Root', () => {
        const NewRoot = require('./components/Root').default
        render(
            <AppContainer>
                <NewRoot store={store} history={history} />
            </AppContainer>,
            rootElement
        )
    })
}

serviceWorker.unregister()

