import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Input, } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

const Search = ({ history }) => {
    return (
        <div className='search-form'>
            <Input.Group compact>
                <Input placeholder='Км' style={{ width: '20%' }} />
                <Input placeholder='От' style={{ width: '20%' }} />
                <Input placeholder='До' style={{ width: '20%' }} />
                <Input.Search placeholder="input search text"
                    style={{ width: '20%' }}
                    enterButton="Найти"
                    prefix={<SearchOutlined />}
                    onSearch={value => console.log(value)} />
            </Input.Group>
        </div>
    )
}

export default Search