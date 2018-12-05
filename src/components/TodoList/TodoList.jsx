import './TodoList.css';
import React from 'react';
import PropTypes from 'prop-types';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import { ListGroup, } from 'reactstrap';
import TodoContainer from 'containers/TodoContainer';

export default function TodoList(props) {
    const { user_id, todos, loading, onDelete, onCheck, onTodoTitleEdit } = props;
    
    return (          
        !loading ?       
            <TransitionGroup component={ListGroup} className="todo-list">                
                {todos.map((todo, idx) => 
                    <CSSTransition
                        key={idx}
                        timeout={500}
                        classNames="slide"
                    >
                        <TodoContainer 
                            key={todo.id} 
                            user_id={user_id}
                            {...todo}
                            onDelete={onDelete}
                            onCheck={onCheck}
                            onTodoTitleEdit={onTodoTitleEdit} 
                        /> 
                    </CSSTransition>                       
                )}                 
            </TransitionGroup>
        :
            <div style={{ textAlign: 'center', }}>...loading</div>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onCheck: PropTypes.func.isRequired,
    onTodoTitleEdit: PropTypes.func.isRequired,
};