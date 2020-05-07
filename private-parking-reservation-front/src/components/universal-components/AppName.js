import React from 'react'
import mainLogo from '../../resourse/images/name.svg'
import styled from 'styled-components'

const AppName = () => {
    return (
        <div id='header'>
                <img src={mainLogo} />
                <n>PARKING RESERVATION</n>
        </div>
    )
}

export default AppName