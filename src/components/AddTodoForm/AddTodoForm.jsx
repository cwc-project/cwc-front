import './AddTodoForm.css';
import React from 'react';

import { Plus } from 'react-feather';
import { Form, Input } from 'reactstrap';
import ButtonComponent from 'components/ButtonComponent';

export default function AddTodoForm(props) {
    const { title, onChange, onAddTodo } = props;

    return (
        <div className="todo-add-component">
            <Form className="todo-add-form">
                <Input 
                    className="todo-add-input"                    
                    type="text" 
                    name="title"
                    value={title}  
                    onChange={onChange}
                    placeholder='Добавить новую задачу' 
                    autoFocus
                 />
                <ButtonComponent 
                    className="add-btn"
                    icon={<Plus />}
                    onClick={onAddTodo}
                    color="primary"
                />
            </Form>
        </div>
    );
};