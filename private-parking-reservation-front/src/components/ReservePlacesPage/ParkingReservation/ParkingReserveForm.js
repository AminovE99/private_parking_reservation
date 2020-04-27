import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Checkbox, InputNumber } from 'antd'

function onChange(value) {
    console.log('changed', value);
}

function onClick(value) {
    console.log('click', value);
}

// onChange = e => {
//     console.log('checked = ', e.target.checked);
//     this.setState({
//       checked: e.target.checked,
//     });
//   };

const ParkingReservationForm = ({ history }) => {

    const [checked, setChecked] = useState(false)
    const [disabled, setDisabled] = useState(true)

    const label = `${checked ? 'Checked' : 'Unchecked'}`

    return (
        <div className='parking-reserve-form'>

            <span>Бронирование</span>
            <div>
                <div className='photo'>
                    Первое фото из слайдера
                 </div>
                <div className='input-hours'>
                    <div><span>Ул. ... д. ....</span></div>
                    <div><span>Город,регион,страна</span></div>
                    <div>
                        <span>Часы</span>
                        <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
                    </div>
                </div>
                <div className='total'>
                    <div><span>Итого</span></div>
                    <div><span>Часы * На стоимость в итеме листа всех парк. мест</span></div>
                </div>
            </div>

            <div className='privacy-policy'>
                <p style={{ marginBottom: '20px' }}>
                    <Checkbox
                        checked={checked}

                        onChange={onChange}
                    >
                        {label}
                    </Checkbox>
                </p>
            </div>
            <Button disabled={disabled}
                onClick={onClick}>
                Перейти к оплате
            </Button>
        </div>
    )
}

export default ParkingReservationForm