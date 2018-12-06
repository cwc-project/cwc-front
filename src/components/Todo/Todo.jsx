import './Todo.css';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ListGroupItem, ListGroupItemHeading } from 'reactstrap';
import { CheckSquare, Square, Edit2 } from 'react-feather';
import Timer from 'containers/TimerContainer';
import ButtonComponent from 'components/ButtonComponent';

export default function Todo(props) {  
    
    const { user_id, id, title, completed, deadline, project_id, timeElapsed, outputDate, onCheck, onEdit } = props;

    const todoCheck = classNames( 'todo',
        completed ? 'completed' : 'uncompleted',
        !completed && timeElapsed === 0 && deadline ? 'overdue-task' : ''
    );
    const outputMobile = classNames('output-mobile',
        !deadline && 'd-none',
    );
    

    function onClick() {
        if (window.innerWidth < 479)
            onEdit();        
    };

    return (
        <ListGroupItem 
            className={todoCheck} 
            tag='div'
        >
            <div className={outputMobile}>{outputDate}</div>
            <div className="todo-wrapper">
                <div className="todo-left-side">
                    <ButtonComponent 
                        className="checkbox-btn"
                        icon={completed ? <CheckSquare /> : <Square />}
                        onClick={onCheck}  
                                
                    />
                    <ListGroupItemHeading 
                        className="todo-title"
                        onClick={onClick}
                    >
                        {title}   
                    </ListGroupItemHeading>                
                </div>
                <div className="todo-right-side">
                    <Timer                         
                        id={id}
                        completed={completed}
                        deadline={deadline} 
                        project_id={project_id} 
                        user_id={user_id}
                        timeElapsed={timeElapsed} 
                        outputDate={outputDate}
                    />
                    <ButtonComponent 
                        className="edit-btn"
                        icon={<Edit2 />}  
                        onClick={onEdit}        
                    />   
                </div>
            </div>
        </ListGroupItem>
    );
};