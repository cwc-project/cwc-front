import './TodoEdit.css';
import React from 'react';
import ButtonComponent from 'components/ButtonComponent';

import { Save, Trash2 } from 'react-feather';
import { ListGroupItem, Form, Input } from 'reactstrap';

export default function TodoEdit(props) {
    const { title, onDelete, onSave, onChange } = props;

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
                    type="text" 
                    name="title"
                    value={title}
                    onChange={onChange}
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