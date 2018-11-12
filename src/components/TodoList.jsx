import React from 'react';
import { ListGroup, } from 'reactstrap';
import PropTypes from 'prop-types';

import TodoContainer from 'containers/TodoContainer';

export default function TodoList(props) {
    const { todos: { todos, fetching }, onDelete, onCheck, onTodoTitleEdit } = props;
    
    return (          
        <ListGroup>     
            { !fetching && todos.length ?
                todos.map((todo, idx) => 
                    <TodoContainer 
                        key={todo.id} 
                        {...todo}
                        onDelete={onDelete}
                        onCheck={onCheck}
                        onTodoTitleEdit={onTodoTitleEdit} 
                    /> 
                )
                :
                <div style={{ textAlign: 'center', }}>...loading</div>
            }
        </ListGroup>   
    );
};

TodoList.propTypes = {
    todos: PropTypes.object.isRequired,
};