import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getTodos, deleteTodo, checkTodo, editTodoTitle, } from '../actions';

import TodoList from 'components/TodoList';

class TodoListContainer extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { onGetTodos } = this.props;
        onGetTodos();
    }
    
    render() {
        const { todos, loading, onDelete, onCheck, onTodoTitleEdit } = this.props;

        return(
            <TodoList 
                todos={todos}
                loading={loading}  
                onDelete={onDelete}  
                onCheck={onCheck}
                onTodoTitleEdit={onTodoTitleEdit}            
            />
        );
    }
};

function mapStateToProps(state) {
    return {
        todos: state.todos,
        loading: state.loading.todos,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        onGetTodos: () => dispatch(getTodos()),
        onDelete: id => dispatch(deleteTodo(id)),
        onCheck: (id, complete) => dispatch(checkTodo(id, complete)),
        onTodoTitleEdit: (id, title) => dispatch(editTodoTitle(id, title)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);