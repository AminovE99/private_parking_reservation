import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {

    // const authenticated = useSelector(state => state.get('auth').get('authenticated'))

    // console.log(authenticated)

    // const navbarLinks = () => {
    //     if (authenticated) {
    //         return [
    //             {/* <li key="profile"><Link to="/profile">Profile</Link></li>,
    //             <li key="signout"><Link to="/signout">Sign out</Link></li> */}
    //         ]
    //     }
    //     return [
    //         {/* <li key="signin"><Link to="/signin">Sign in</Link></li>,
    //         <li key="signup"><Link to="/signup">Sign up</Link></li> */}
    //     ]
    // }

    // const onChange = (value) => {
    //     console.log('change city action (&)')
    //     console.log(value)
    // }

    // if (authenticated) {

    // }

    return (
        <div className='footer'>
            <a href='#'><img src='C:\Users\vlada\Desktop\learningjs\parking-reserve\src\resourse\Vector.png'/></a>
            <a href='#'><img src='C:\Users\vlada\Desktop\learningjs\parking-reserve\src\resourse\Vector.png'/></a>
            <a href='#'><img src='C:\Users\vlada\Desktop\learningjs\parking-reserve\src\resourse\Vector.png'/></a>
            <a href='#'><img src='C:\Users\vlada\Desktop\learningjs\parking-reserve\src\resourse\Vector.png'/></a>
            <a href='#'><img src='C:\Users\vlada\Desktop\learningjs\parking-reserve\src\resourse\Vector.png'/></a>
        </div>
    )
}

export default Navbar