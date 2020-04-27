import React, { useState, useCallback } from 'react'
import { Modal, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
// import SignInForm from '../SignInForm'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import EditUserModal from './EditUserInfoModal'
import EditUserInfoForm from './EditUserInfoForm'


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
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false)
    };

    // const userProfile = useSelector()
    return (
        <div className='user-info'>
            <Avatar size={64} icon={<UserOutlined />} />
            <div className='user-data'>
                <div className='user-name'>
                    <span>ФИО <span style={{ color: '#6574FF' }}>(login)</span></span>
                </div>
                <div className='user-age'>
                    <span style={{ color: '#A7A7A7' }}>18 лет (20.02.1999)</span>
                </div>
                <div className='phone-number'>
                    <span style={{ color: '#A7A7A7' }}>+7(987)323-42-42</span>
                </div>
            </div>
            {/* TODO */}
            <div className='edit-btn'>
                {/* <EditUserModal /> */}
                <Button type="primary" onClick={showModal}>
                    Редактировать
                    </Button>
                <Modal
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
                </Modal>
            </div>
        </div>
    )
}

export default UserInfo