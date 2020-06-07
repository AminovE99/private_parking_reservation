import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Search = ({ history }) => {
    return (
        <div className='search-form'>
            <input type='search' placeholder='&#128269;' /> 
            <input type='submit' value='Найти' />
            <div className='parameters'>
                <input type='text' placeholder='Км:' /> 
                <input type='text' placeholder='От:' /> 
                <input type='text' placeholder='До:' /> 
            </div>   
            {/* <Input.Group compact>
                <Input placeholder='Км' style={{ width: '20%' }} />
                <Input placeholder='От' style={{ width: '20%' }} />
                <Input placeholder='До' style={{ width: '20%' }} />
                <Input.Search placeholder="input search text"
                    style={{ width: '20%' }}
                    enterButton="Найти"
                    prefix={<SearchOutlined />}
                    onSearch={value => console.log(value)} />
            </Input.Group> */}
        </div>
    )
}

export default Search