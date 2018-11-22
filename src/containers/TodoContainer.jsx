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
        const { id, onCheck, project_id } = this.props;   
        const completed = !this.props.completed;        
        onCheck(id, completed, project_id);
    }

    handleEdit = () => {        
        this.setState({ editing: true, })
    }

    handleDelete = (event) => {
        event.preventDefault();
        const { id, onDelete, project_id} = this.props;
        onDelete(id, project_id);
    }    

    handleSave = (event) => {
        event.preventDefault();    
        const { id, onTodoTitleEdit, project_id } = this.props;
        const { title } = this.state;
        onTodoTitleEdit(id, title, project_id);
        this.setState({ editing: false, });      
    }

    renderDisplayTodo() {
        const { id, title, completed, deadline, project_id } = this.props;

        return (
            <Todo 
                id={id}
                title={title}
                completed={completed}
                deadline={deadline}
                onCheck={this.handleCheck}
                onEdit={this.handleEdit}
                project_id={project_id}
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