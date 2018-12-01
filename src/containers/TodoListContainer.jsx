import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getTodos, deleteTodo, checkTodo, editTodoTitle, } from '../actions';

import TodoList from 'components/TodoList';

class TodoListContainer extends PureComponent {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.getTodo();
    };

    componentDidUpdate(prevProps) {       
        const { match: { params: { projectId } } } = this.props;
        const prevProjectId = prevProps.match.params.projectId;
        if (prevProjectId !== projectId) 
            this.getTodo();              
    };

    getTodo = () => {
        const { project: {id}, onGetTodos } = this.props;
        onGetTodos(id);
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
    };
};

function mapStateToProps(state) {
    return {
        todos: state.todos,
        loading: state.loading.todos,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        onGetTodos: project_id => dispatch(getTodos(project_id)),
        onDelete: id => dispatch(deleteTodo(id)),
        onCheck: (id, complete, deadline) => dispatch(checkTodo(id, complete, deadline)),
        onTodoTitleEdit: (id, title) => dispatch(editTodoTitle(id, title)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoListContainer));