import React, { useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import EditUserModal from './EditUserInfoModal'
import EditUserInfoForm from './EditUserInfoForm'
import avatarImg from '../../../resourse/images/avatar.svg'
import photoImg from '../../../resourse/images/photo.svg'

const UserInfo = ({ history }) => {

    const [ModalText, setModalText] = useState('Content of the modal')
    const [visible, setVisible] = useState(false)
    const [confirmLoading, setConfirmLoading] = useState(false)

    const showModal = () => {
        setModalText(true)
    }

    const handleOk = () => {
        setModalText('The modal will be closed after one second')
        setConfirmLoading(true)
        setTimeout(() => {
            setVisible(false)
            setConfirmLoading(false)
        }, 1000)
    }

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false)
    }

    return (
        <div className='user-info'>
            <div className='user-avatar'>
                <img src={avatarImg} />
                <input type='image' src={photoImg} />
            </div>
            <div className='user-data'>
                <h2 id='fio'>Иванов Иван Иванович <a id='login'>(ivan123)</a></h2>
                <li id='age'>18 лет (27.09.2001)</li>
    			<li id='phone-number'>+7(800)535-35-35</li>
            </div>

            {/* TODO */}
            {/* <div className='edit-btn'> */}
                {/* <EditUserModal /> */}
                <button type='button' onClick={showModal}>
                    Редактировать
                </button>
                {/* <Modal
                    title="Title"
                    visible={visible}
                    onOk={handleOk}
                    //                    loading={confirmLoading}
                    onCancel={handleCancel}
                    footer={[
                        <Button key="back" onClick={handleCancel}>
                            Return
                        </Button>,
                        <Button key="submit" type="primary" loading={confirmLoading} onClick={handleOk}>
                            Submit
                        </Button>,
                    ]}
                >
                    <p>{ModalText}</p>
                    <EditUserInfoForm />
                </Modal> */}
            {/* </div> */}
            <div className='border' />            
        </div>
    )
}

export default UserInfo