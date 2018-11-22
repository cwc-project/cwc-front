import React from 'react';
import PropTypes from 'prop-types';

import { Clock } from 'react-feather';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Form, } from 'reactstrap';
import ButtonComponent from 'components/ButtonComponent';

export default function Timer (props) {
    const { modal, date, time, deadline, onToggle, onDeadlineSet, onGetDate, onGetTime  } = props;

    const now = new Date();    
    const year = deadline ? new Date(deadline).getFullYear() : now.getFullYear();
    const month = deadline ? new Date(deadline).getMonth() + 1 : now.getMonth() + 1;
    const day =  deadline ? new Date(deadline).getDate() : now.getDate(); 
    const hours = deadline ? new Date(deadline).getHours() : now.getHours();
    const minutes =  deadline ? new Date(deadline).getMinutes() : now.getMinutes();
    const nowDate = `${year}-${month > 9 ? month : '0' + month}-${day > 9 ? day : '0' + day}`;
    const maxDate = `${year + 5}-${month}-${day}`;
    const nowTime = `${hours > 9 ? hours : '0' + hours}:${minutes > 9 ? minutes : '0' + minutes}`;
    const minTime = `${hours > 9 ? hours : '0' + hours}:${minutes > 9 ? minutes + 1 : '0' + minutes + 1}`;  
    

    return ( 
        <div>
            {deadline ? 
                <Button onClick={onToggle}>{day}d {hours}h:{minutes}m</Button>
            : 
                <ButtonComponent
                    className="timer"
                    icon={<Clock />}
                    onClick={onToggle}       
                />  
            }     
            <Modal isOpen={modal} fade={false}>
                <ModalHeader toggle={onToggle}>Укажите планируемую дату и время завершения задачи</ModalHeader>
                <Form>
                    <ModalBody>  
                        <Input 
                            type="date"   
                            name="date"                         
                            defaultValue={date ? date : nowDate}
                            min={nowDate}
                            max={maxDate}
                            // onChange={onChange} 
                            innerRef={elem => onGetDate(elem)}
                            required                       
                        />
                        <Input 
                            type="time" 
                            name="time"
                            min={date === nowDate ? minTime : ''}
                            defaultValue={time ? time : nowTime}
                            // onChange={onChange}
                            innerRef={elem => onGetTime(elem)}
                            required
                        />                     
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={onDeadlineSet}>Установить таймер</Button>{' '}
                        <Button color="secondary" onClick={onToggle}>Отмена</Button>
                    </ModalFooter>
                </Form>
            </Modal>
        </div>     
    );
    
};

Timer.propTypes = {
    // defaultIco: PropTypes.bool.isRequired,
    // onHandleEdit: PropTypes.func.isRequired,
};