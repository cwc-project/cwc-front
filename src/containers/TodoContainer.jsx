import React, { PureComponent } from 'react';

import Todo from 'components/Todo';
import TodoEdit from 'components/TodoEdit';

export default class TodoContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            completed: false,
            editing: false,
        };
    }   

    handleCheck = () => {
        this.setState({ completed: !this.state.completed, })
    }

    handleEdit = () => {
        this.setState({ editing: true, })
    }

    handleDelete = (event) => {
        event.preventDefault();
        const { id, onDelete } = this.props;
        onDelete(id);
        // console.log(this.props)
    }

    handleSave = (event) => {
        event.preventDefault();
        console.log('changed');
        this.setState({ editing: false, });
    }

    renderDisplayTodo() {
        const { completed } = this.state;
        const { title } = this.props;
        return (
            <Todo 
                title={title}
                completed={completed}
                onCheck={this.handleCheck}
                onEdit={this.handleEdit}
            />
        );
    }

    renderEditTodo() {
        const { title } = this.props;
        return(
           <TodoEdit 
                title={title} 
                onDelete={this.handleDelete}
                onSave={this.handleSave}
            />
        );
    }

    render() {
        const { completed, editing } = this.state;
        const { title } = this.props;

        return editing ? this.renderEditTodo() :  this.renderDisplayTodo();              
    }
};