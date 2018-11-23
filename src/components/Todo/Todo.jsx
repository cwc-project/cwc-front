import './Todo.css';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ListGroupItem, ListGroupItemHeading } from 'reactstrap';
import { CheckSquare, Square, Edit2 } from 'react-feather';

import Timer from 'containers/TimerContainer';
import ButtonComponent from 'components/ButtonComponent';


export default function Todo(props) {    
    const { id, title, completed, deadline, project_id, onCheck, onEdit } = props;
    const todoCheck = classNames( 'todo',
        completed ? 'completed' : 'uncompleted'
    );

    return (
        <ListGroupItem className={todoCheck}>
            <div className="todo-left-side">
                <ButtonComponent 
                    className="checkbox-btn"
                    icon={completed ? <CheckSquare /> : <Square />}
                    onClick={onCheck}            
                />
                <ListGroupItemHeading className="todo-title">{title}</ListGroupItemHeading>                
            </div>
            <div className="todo-right-side">
                <Timer 
                    id={id}
                    deadline={deadline} 
                    project_id={project_id}               
                />
                <ButtonComponent 
                    className="edit-btn"
                    icon={<Edit2 />}  
                    onClick={onEdit}        
                />   
            </div>
        </ListGroupItem>
    );
};