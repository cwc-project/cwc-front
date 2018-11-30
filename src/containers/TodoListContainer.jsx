import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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
        const { todos, loading, onDelete, onCheck, onTodoTitleEdit, project_id } = this.props;

        return(
            <TodoList 
                todos={todos}
                loading={loading}  
                project_id={project_id}
                onDelete={onDelete}  
                onCheck={onCheck}
                onTodoTitleEdit={onTodoTitleEdit}            
            />
     
        );
    }
};

function mapStateToProps(state) {
    return {
        project_id: state.project.id,
        todos: state.todos,
        loading: state.loading.todos,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        onGetTodos: project_id => dispatch(getTodos(project_id)),
        onDelete: id => dispatch(deleteTodo(id)),
        onCheck: (id, complete, project_id) => dispatch(checkTodo(id, complete, project_id)),
        onTodoTitleEdit: (id, title, project_id) => dispatch(editTodoTitle(id, title, project_id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);