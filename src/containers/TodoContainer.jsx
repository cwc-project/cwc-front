import React, { PureComponent } from 'react';

import Todo from 'components/Todo';
import TodoEdit from 'components/TodoEdit';

export default class TodoContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            title: this.props.title,
        };
    } 
    
    handleChange = (event) => { 
        this.setState({ title: event.target.value, })
    }
    
    handleCheck = () => {
        const { id, onCheck } = this.props;   
        const completed = !this.props.completed;        
        onCheck(id, completed);
    }

    handleEdit = () => {        
        this.setState({ editing: true, })
    }

    handleDelete = (event) => {
        event.preventDefault();
        const { id, onDelete } = this.props;
        onDelete(id);
    }    

    handleSave = (event) => {
        event.preventDefault();    
        const { id, onTodoTitleEdit } = this.props;
        const { title } = this.state;
        onTodoTitleEdit(id, title);
        this.setState({ editing: false, });      
    }

    renderDisplayTodo() {
        const { title, completed } = this.props;
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
        const { title } = this.state;
        return(
           <TodoEdit 
                title={title} 
                onDelete={this.handleDelete}
                onSave={this.handleSave}
                onChange={this.handleChange}
            />
        );
    }

    render() {
        const { editing } = this.state;
        return editing ? this.renderEditTodo() :  this.renderDisplayTodo();              
    }
};