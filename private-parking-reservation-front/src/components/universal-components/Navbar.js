import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Cascader, Badge, Avatar } from 'antd'
import { UserOutlined, CarOutlined } from '@ant-design/icons'

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

            <CarOutlined />

            <NavLink exact to="/" className='nav-item' activeClassName='nav-item-active'>
                <span>Забронировать</span>
            </NavLink>

            <NavLink exact to="/my_parking_places" className='nav-item' activeClassName='nav-item-active'>
                <span>Сдать</span>
            </NavLink>

            <NavLink exact to="/profile" className='nav-item' activeClassName='nav-item-active'>
                <span>Профиль</span>
            </NavLink>

            <NavLink exact to="/login" className='nav-item' activeClassName='nav-item-active'>
                <span>Вход</span>
            </NavLink>

            <NavLink exact to="/register" className='nav-item' activeClassName='nav-item-active'>
                <span>Регистрация</span>
            </NavLink>

            <Cascader options={options} onChange={onChange} placeholder="Please select" />

            <NavLink exact to="/profile">
                <span className='navbar-avatar'>
                    <Badge count={5}>
                        <Avatar
                            style={{
                                backgroundColor: '#87d068',
                            }}
                            icon={<UserOutlined />}
                        />
                        {/* <span className="head-example" /> */}
                    </Badge>
                </span>
            </NavLink>

        </div>
    )
}

const options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
]

export default Navbar