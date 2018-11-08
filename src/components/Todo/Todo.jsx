import './Todo.css';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ListGroupItem, ListGroupItemHeading, Col, Row } from 'reactstrap';
import { CheckSquare, Square, Edit2 } from 'react-feather';

import Timer from 'containers/TimerContainer';
import ButtonComponent from 'components/ButtonComponent';


export default function Todo(props) {    
    const { completed, onCheck } = props;
    const todoCheck = classNames( 'todo',
        completed ? 'completed' : 'uncompleted'
    );

    return (
        <ListGroupItem className={todoCheck}>
            <div className="todo-left-side">
                <ButtonComponent 
                    className="checkbox"
                    icon={completed ? <CheckSquare /> : <Square />}
                    onClick={onCheck}            
                />
                <ListGroupItemHeading className="todo-title">Доделать дизайн, добавить шапку проекта, загружать todo через API</ListGroupItemHeading>                
            </div>
            <div className="todo-right-side">
                <Timer />
                <ButtonComponent 
                    className="edit"
                    icon={<Edit2 />}          
                />   
            </div>
        </ListGroupItem>
    );
};