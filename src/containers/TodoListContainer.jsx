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
        this.getTodos();       
    };

      componentDidUpdate(prevProps) {   

        const { match: { params: { projectId } } } = this.props;
        const prevProjectId = prevProps.match.params.projectId;
        if (prevProjectId !== projectId)             
             this.getTodos();   
    };

    getTodos = () => {
        const { project: {id}, onGetTodos } = this.props;
        // this.state.todos = this.props.todos
        onGetTodos(id);    
    }
        
    render() {
        const { user_id, todos, loading, onDelete, onCheck, onTodoTitleEdit } = this.props;

        return(
            <TodoList 
                user_id={user_id}
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
        user_id: state.user.id,
        todos: state.todos,
        loading: state.loading.todos,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        onGetTodos: project_id => dispatch(getTodos(project_id)),
        onDelete: (todo_id, user_id) => dispatch(deleteTodo(todo_id, user_id)),
        onCheck: (todo_id, completed, deadline, user_id) => dispatch(checkTodo(todo_id, completed, deadline, user_id)),
        onTodoTitleEdit: (todo_id, title, user_id) => dispatch(editTodoTitle(todo_id, title, user_id)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoListContainer));