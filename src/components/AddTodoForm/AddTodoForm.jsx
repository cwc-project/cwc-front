import './AddTodoForm.css';
import React from 'react';
import autosize from 'autosize';

import { Plus } from 'react-feather';
import { Form, Input } from 'reactstrap';
import ButtonComponent from 'components/ButtonComponent';

export default function AddTodoForm(props) {
    const { title, onChange, onAddTodo } = props;

    function autoSize(elem) {  
        autosize(elem);
    };
    
    return (
        <div className="todo-add-component">
            <Form className="todo-add-form">
                <Input 
                    className="todo-add-input"                    
                    type="textarea" 
                    rows={1}
                    name="title"
                    value={title}  
                    onChange={onChange}
                    innerRef={elem => autoSize(elem)}
                    placeholder='Новая задача' 
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