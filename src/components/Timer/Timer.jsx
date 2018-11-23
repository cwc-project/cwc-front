import './Timer.css';
import React from 'react';
import PropTypes from 'prop-types';

import { Clock, Calendar, Watch, Check, X } from 'react-feather';
import { 
    Button,
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    Input, 
    Form, 
    InputGroup, 
    InputGroupAddon, 
    InputGroupText,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
 } from 'reactstrap';
import ButtonComponent from 'components/ButtonComponent';

export default function Timer(props) {
    const { 
        modal,
        splitButtonOpen,
        deadline, 
        onToggle,
        onToggleSplit,
        onDeadlineSet, 
        onGetDate, 
        onGetTime, 
        onFocusDate,
        onFocusTime,
        timeLeft, 
        outputDate,       
    } = props;

    const now = new Date();    
    const year = deadline ? new Date(deadline).getFullYear() : now.getFullYear();
    const month = deadline ? new Date(deadline).getMonth() + 1 : now.getMonth() + 1;
    const day =  deadline ? new Date(deadline).getDate() : now.getDate(); 
    const hours = deadline ? new Date(deadline).getHours() : now.getHours();
    const minutes =  deadline ? new Date(deadline).getMinutes() : now.getMinutes();
    const date = `${year}-${month > 9 ? month : '0' + month}-${day > 9 ? day : '0' + day}`;
    const maxDate = `${year + 5}-${month}-${day}`;
    const time = `${hours > 9 ? hours : '0' + hours}:${minutes > 9 ? minutes : '0' + minutes}`;
    const minTime = `${hours > 9 ? hours : '0' + hours}:${minutes > 9 ? minutes + 1 : '0' + minutes + 1}`;  
    

    return ( 
        <div>
            {deadline ? 
                <ButtonComponent 
                    className="timer-btn"
                    onClick={onToggle}
                >
                    <div>{timeLeft}</div>
                    <sub className="date-output">{outputDate}</sub>
                </ButtonComponent>
            : 
                <ButtonComponent
                    className="timer"
                    icon={<Clock />}
                    onClick={onToggle}       
                />  
            }     
            <Modal isOpen={modal} fade={false} className="timer-modal-form">
                <ModalHeader toggle={onToggle}>Set deadline for your task!</ModalHeader>
                <Form>
                    <ModalBody className="timer-form-body">  
                        <InputGroup className="timer-date-input-group">
                            <Input 
                                type="date"   
                                name="date"  
                                className="timer-input"                       
                                defaultValue={date}                            
                                max={maxDate}
                                innerRef={elem => onGetDate(elem)}
                                required                       
                            />
                            <InputGroupAddon addonType="append" onClick={onFocusDate}><InputGroupText><Calendar /></InputGroupText></InputGroupAddon>
                        </InputGroup>
                        <InputGroup>
                            <Input 
                                type="time" 
                                name="time"
                                className="timer-input"  
                                
                                min={minTime}
                                defaultValue={time}
                                innerRef={elem => onGetTime(elem)}
                                required
                            />         
                            <InputGroupAddon addonType="append" onClick={onFocusTime}><InputGroupText><Watch /></InputGroupText></InputGroupAddon>
                        </InputGroup>                   

                    </ModalBody>
                    <ModalFooter>                     
                        <Button color="secondary" onClick={onToggle}>Cancel</Button>
                        <ButtonDropdown 
                            addonType="prepend"                           
                            color="primary"
                            isOpen={splitButtonOpen} 
                            toggle={onToggleSplit}
                        >
                            <Button color="primary" className="timer-set-btn" onClick={onDeadlineSet}><Check /> Set timer </Button>{' '}
                            <DropdownToggle caret color="primary" split outline />
                            <DropdownMenu>
                                <DropdownItem header>Advanced options</DropdownItem> 
                                <DropdownItem divider />             
                                <DropdownItem className="timer-reset"> <X /> Reset timer</DropdownItem>
                                </DropdownMenu>
                        </ButtonDropdown>                  
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