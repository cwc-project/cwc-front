import React from 'react';
import PropTypes from 'prop-types';

import { Clock } from 'react-feather';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Form } from 'reactstrap';
import ButtonComponent from 'components/ButtonComponent';

export default function Timer(props) {
    const { defaultIco, modal, deadline, onHandleEdit, onToggle, onTimeSet } = props;

    // function logg (event) {
    //     console.log(event.target.value)
    //     const date = new Date();
    //     console.log(date)
    // }
    // function onDate() {
    //     // const date = new Date(milliseconds);
    //     // var nowD = Date.now();
    //     // alert( nowD );
    //     // var d = new Date();
    //     // alert( d.toISOString() );
    //     // var now = new Date();
    //     // var nowDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    //     // console.log(nowDate)
    //     const iii = document.getElementById('iii');
    //     console.log(iii.value)

    // }
    var now = new Date();
    // var nowDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const nowDate = `${year}-${month}-${day}`
    const maxDate = `${year + 1}-${month}-${day}`
    const nowTime = `${hours > 9 ? hours : '0' + hours}:${minutes > 9 ? minutes : '0' + minutes}`
    const date = null;
    return ( 
        <div>
            {defaultIco ? 
                <ButtonComponent
                    className="timer"
                    icon={<Clock />}
                    onClick={onToggle}       
                />  
            : <span onClick={onToggle}>1d 3h 24m</span>}     
            <Modal isOpen={modal} fade={false}>
                <ModalHeader toggle={onToggle}>Укажите планируемую дату и время завершения задачи</ModalHeader>
                <ModalBody> 
                   <Form>
                    <Input 
                        type="date" 
                        value={nowDate}
                        min={nowDate}
                        max={maxDate}
                        onChange={logg}                        
                   />
                    <Input 
                        type="time" 
                        min={date === nowDate ? nowTime : ''}
                        value={nowTime}
                        onChange={logg}
                   /> 
                </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={onDate}>Установить таймер</Button>{' '}
                    <Button color="secondary" onClick={onToggle}>Отмена</Button>
                </ModalFooter>
            </Modal>
        </div> 

    );
};

Timer.propTypes = {
    defaultIco: PropTypes.bool.isRequired,
    onHandleEdit: PropTypes.func.isRequired,
};