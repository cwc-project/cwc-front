import './TodoList.css';
import React from 'react';
import PropTypes from 'prop-types';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import { ListGroup, } from 'reactstrap';
import TodoContainer from 'containers/TodoContainer';

export default function TodoList(props) {
    const { user_id, todos, loading, onDelete, onCheck, onTodoTitleEdit } = props;
    
    return (          
        !loading ?   
            <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    <div ref={provided.innerRef}>  
                        <TransitionGroup 
                            component={ListGroup} 
                            className="todo-list" 
                        >                
                            {todos.map((todo, index) => 
                                <CSSTransition
                                    key={todo.id}
                                    timeout={500}
                                    classNames="slide"
                                >
                                    <Draggable key={todo.id} draggableId={todo.id} index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >                                            
                                                <TodoContainer 
                                                    key={todo.id} 
                                                    index={index}
                                                    user_id={user_id}
                                                    {...todo}
                                                    onDelete={onDelete}
                                                    onCheck={onCheck}
                                                    onTodoTitleEdit={onTodoTitleEdit} 
                                                
                                                />  
                                            </div>                                    
                                        )}
                                    </Draggable>
                                </CSSTransition>    
                            )}           
                        </TransitionGroup>
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>  
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