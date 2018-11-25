import './Timer.css';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Clock, Calendar, Watch, Check, X } from 'react-feather';
import { 
    Button,
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    Input, 
    Form,
    FormFeedback, 
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
        date,
        time,
        onChange,
        minDate,
        maxDate,
        modal,
        timeLag,
        splitButtonOpen,
        dateInvalid,
        timeInvalid,
        dateInvalidText,
        timeInvalidText,
        dateValidDecor,
        timeValidDecor,
        deadline, 
        onToggle,
        onToggleSplit,
        onDeadlineSet, 
        onTimerReset,
        timeLeft, 
        outputDate,       
    } = props; 

    const hour = 3600000;
    const warning = Date.parse(deadline) - Date.now() - hour;
    const timeLeftStyle = classNames('time-left', 
        (warning < 0) ? 'timer-warning' : ''
    );    
    let dateEl;
    let timeEl;
    const onFocus = elem => elem.focus();

    return ( 
        <div>
            {deadline ? 
                <ButtonComponent 
                    className="timer-btn"
                    onClick={onToggle}
                >
                    <div className={timeLeftStyle}>{timeLeft}</div>
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
                                className="timer-input" 
                                type="date"   
                                name="date" 
                                value={date}   
                                min={minDate}                       
                                max={maxDate}
                                innerRef={elem => dateEl = elem}                                            
                                onChange={onChange}
                                invalid={dateInvalid}
                                valid={dateValidDecor}                 
                            />
                            <InputGroupAddon addonType="append" onClick={() => onFocus(dateEl)}><InputGroupText><Calendar /></InputGroupText></InputGroupAddon>
                            <FormFeedback>{dateInvalidText}</FormFeedback>
                        </InputGroup>
                        <InputGroup>
                            <Input 
                                className="timer-input" 
                                type="time" 
                                name="time"
                                value={time}                                                           
                                innerRef={elem => timeEl = elem}                                
                                onChange={onChange}
                                invalid={timeInvalid}
                                valid={timeValidDecor}   
                            />         
                            <InputGroupAddon addonType="append" onClick={() => onFocus(timeEl)}><InputGroupText><Watch /></InputGroupText></InputGroupAddon>
                            <FormFeedback>{timeInvalidText}</FormFeedback>
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
                                <DropdownItem className="timer-reset" onClick={onTimerReset}> <X /> Reset timer</DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>                  
                    </ModalFooter>
                </Form>
            </Modal>
        </div>     
    );   
};

Timer.propTypes = {

    // onHandleEdit: PropTypes.func.isRequired,
};