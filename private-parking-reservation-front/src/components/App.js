import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'
// import NotFoundPage from './NotFoundPage'
import PropTypes from 'prop-types'
import '../App.css'
import Login from './Login/index'
import Register from './Register/index'
import Profile from './ProfilePage/index'
import HomePage from './ReservePlacesPage/index'
import MyParkingPlaces from './ParkingPlacesPage/index'
import NotFoundPage from './universal-components/NotFoundPage'
import requireAuth from './HOC/require-auth'
import noRequireAuth from './HOC/no-require-auth'
import Signout from './universal-components/SignOut'
import Navbar from './universal-components/Navbar'
import Footer from './universal-components/Footer'

const App = () => {

    return (
        <div className='app'>
            {/* <Navbar /> */}
            {/* <Footer /> */}
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path='/login' component={noRequireAuth(Login)} />
                <Route path='/register' component={noRequireAuth(Register)} />
                <Route path='/signout' component={noRequireAuth(Signout)} />
                <Route path='/profile' component={noRequireAuth(Profile)} />
                <Route path='/my_parking_places' component={noRequireAuth(MyParkingPlaces)} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    )
}

export default App