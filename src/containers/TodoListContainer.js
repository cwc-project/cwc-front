import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getTodos, deleteTodo } from '../actions';

import TodoList from 'components/TodoList';

class TodoListContainer extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { onGetTodos } = this.props;
        onGetTodos();
    }
    
    handleCheck = () => {
        this.setState({ completed: !this.state.completed, })
    }

    render() {
        const { todos, onDelete } = this.props;

        return(
            <TodoList 
                todos={todos}  
                onDelete={onDelete}              
            />
        );
    }
};

function mapStateToProps(state) {
    return {
        todos: state.todos,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        onGetTodos: () => dispatch(getTodos()),
        onDelete: id => dispatch(deleteTodo(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);