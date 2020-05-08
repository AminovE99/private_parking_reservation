import React, { useState, useEffect, useCallback } from 'react'
import OperationHistoryItem from './OperationsHistoryItem'
import axios from 'axios'
import messageImg from '../../../resourse/images/message.svg'

const count = 3
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`

const OperationHistory = ({ history }) => {
    const [initLoading, setInitLoading] = useState(true)
    const [loading, setloading] = useState(false)
    const [data, setData] = useState([])
    const [list, setList] = useState([])

    const getData = async callback => {
        const response = await axios.get(fakeDataUrl)
        console.log(response)
        callback(response)
    }

    const onLoadMore = () => {
        console.log('load more...')
        // this.setState({
        //     loading: true,
        //     list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
        // });
        // this.getData(res => {
        //     const data = this.state.data.concat(res.results);
        //     this.setState(
        //         {
        //             data,
        //             list: data,
        //             loading: false,
        //         },
        //         () => {
        //             // Resetting window's offsetTop so:to display react-virtualized demo underfloor.
        //             // In real scene, you can using public method of react-virtualized:
        //             // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        //             window.dispatchEvent(new Event('resize'));
        //         }
        //     )
        // })
    }

    useEffect(() => {
        getData(res => {
            setInitLoading(false)
            setData(res.results)
            setList(res.results)
        })
    }, [])

    const loadMore =
        !initLoading && !loading ? (
            {/* <div
                style={{
                    textAlign: 'center',
                    marginTop: 12,
                    height: 32,
                    lineHeight: '32px',
                }}
            >
                <Button onClick={onLoadMore}>loading more</Button>
            </div> */}
        ) : null

    return (
        <div className='operations-history'>
            <h1>История</h1>
            {/* Переделать в норм badge с числом внутри (для navbar тоже)*/}
		    <img src={messageImg} />
            <div className='operations'>
                <OperationHistoryItem direction={'redo'} status={'Арендуется'} />
                <div className='br' />
                <OperationHistoryItem direction={'undo'} status={'Завершено'} />
                <div className='br' />
                <OperationHistoryItem direction={'undo'} status={'Арендуется'} /> 
            </div>
            {/* <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={list}
                renderItem={item => (
                    <OperationHistoryItem item={item} />
                )}
            /> */}
        </div>
    )
}

export default OperationHistory