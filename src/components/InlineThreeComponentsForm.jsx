import React from 'react';
import ButtonComponent from 'components/ButtonComponent';

import { Form, Input } from 'reactstrap';

export default function InlineThreeComponentsForm(props) {
    const { form, optionBtn, input, submitBtn } = props;

    return (
        <Form 
            {...form}
            // className="edit-form"
        >
            <ButtonComponent 
                {...optionBtn}
                // className="delete-btn"
                // icon={<Trash2 />}
                // color="danger"
                // onClick={onDelete}
            />
            <Input 
                {...input}
                // className="title-edit-input"
                // type="text" 
                // defaultValue={title}  
                // id='titleInput'       
                // autoFocus
                />
            <ButtonComponent 
                {...submitBtn}
                // className="save-btn"
                // icon={<Save />}
                // onClick={onSave}
            />
        </Form>
    );
};