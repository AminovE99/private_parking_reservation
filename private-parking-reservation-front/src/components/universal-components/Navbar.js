import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import userImg from '../../resourse/images/user.svg'
import locImg from '../../resourse/images/loc.svg'
import logoImg from '../../resourse/images/logo.svg'

const Navbar = () => {

    const authenticated = useSelector(state => state.get('auth').get('authenticated'))

    console.log(authenticated)

    const navbarLinks = () => {
        if (authenticated) {
            return [
                {/* <li key="profile"><Link to="/profile">Profile</Link></li>,
                <li key="signout"><Link to="/signout">Sign out</Link></li> */}
            ]
        }
        return [
            {/* <li key="signin"><Link to="/signin">Sign in</Link></li>,
            <li key="signup"><Link to="/signup">Sign up</Link></li> */}
        ]
    }

    const onChange = (value) => {
        console.log('change city action (&)')
        console.log(value)
    }

    if (authenticated) {

    }

    return (
        <div className='navbar'>
            <div className='logo-container'>
                <img src={logoImg} />
            </div>

            <nav className='menu'>
                <li>
                    <NavLink exact to='/' className='nav-item' activeClassName='nav-item-active'>
                        <span>Забронировать</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink exact to='/my_parking_places' className='nav-item' activeClassName='nav-item-active'>
                        <span>Сдать</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink exact to='/help' className='nav-item' activeClassName='nav-item-active'>
                        <span>Помощь</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink exact to='/about' className='nav-item' activeClassName='nav-item-active'>
                        <span>О нас</span>
                    </NavLink>
                </li>
            </nav>

            <div className='profilebar'>
                <div className='location'>
                    <img src={locImg} />
                    <span>Казань</span>
                </div>
                <NavLink exact to='/profile'>
                    <div className='avatar'>
                        <img src={userImg} />
                        <span>Ваня</span>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar