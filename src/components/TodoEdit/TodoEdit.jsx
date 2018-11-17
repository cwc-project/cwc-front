import './TodoEdit.css';
import React from 'react';
import autosize from "autosize";

import ButtonComponent from 'components/ButtonComponent';

import { Save, Trash2 } from 'react-feather';
import { ListGroupItem, Form, Input } from 'reactstrap';

export default function TodoEdit(props) {
    const { title, onDelete, onSave, onChange } = props;

    function autoSize(elem) {  
        autosize(elem);
    };

    return (
        <ListGroupItem>
            <Form className="edit-form">
                <ButtonComponent 
                    className="delete-btn"
                    icon={<Trash2 />}
                    color="danger"
                    onClick={onDelete}
                />               
                <Input 
                    className="title-edit-input"
                    type="textarea" 
                    name="title"
                    value={title}
                    onChange={onChange}
                    onFocus={autoSize}
                    rows={1}                  
                    innerRef={elem => autoSize(elem)}
                    autoFocus
                 />
                <ButtonComponent 
                    className="save-btn"
                    icon={<Save />}
                    onClick={onSave}
                />
            </Form>
        </ListGroupItem>
    );
};