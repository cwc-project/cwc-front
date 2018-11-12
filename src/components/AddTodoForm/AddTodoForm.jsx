import './AddTodoForm.css';
import React from 'react';
import ButtonComponent from 'components/ButtonComponent';
import InlineThreeComponentsForm from 'components/InlineThreeComponentsForm';

import { Home, Plus } from 'react-feather';
import { Form, Input } from 'reactstrap';

export default function AddTodoForm(props) {
    const { title, onChange, onAddTodo } = props;

    return (
        <div className="todo-add-component">
            <Form className="todo-add-form">
                {/* <ButtonComponent 
                    className="home-btn"
                    icon={<Home />}
                    // color="danger"
                    // onClick={onDelete}
                /> */}
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