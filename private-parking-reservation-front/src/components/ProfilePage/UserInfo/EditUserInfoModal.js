import React, { useState, useCallback } from 'react'
// import { Modal, Button } from 'antd';
import EditUserInfoForm from './EditUserInfoForm'

const EditUserInfoModal = () => {

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

    return (
        <div>
            {/* <Button type="primary" onClick={showModal}>
                Редактировать
            </Button> */}
            {/* <Modal
                title="Title"
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            > */}
                <p>{ModalText}</p>
                {/* <EditUserInfoForm /> */}
            {/* </Modal> */}
        </div>
    )
}

export default EditUserInfoModal