import './Heading.css';
import React from 'react';
import { Modal, ModalHeader, ModalBody, CardTitle, ModalFooter, Input, Button } from 'reactstrap';

export default function Heading (props) {
    const { title, modal, onToggle, onSubmit, getInput} = props;  
   
    return (

        <CardTitle title="Click for set heading" onClick={onToggle} className="todos card-title">          
            <span className="project-title" id="new">{title}</span>           
            <Modal 
                isOpen={modal} 
                fade={false}
                toggle={onToggle}                     
            >
                <ModalHeader toggle={onToggle}>Переименование списка задач</ModalHeader>
                <ModalBody>                        
                    <Input 
                        type="textarea" 
                        defaultValue={title} 
                        innerRef={elem => getInput(elem)}                    
                    />                 
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={onSubmit} >Применить изменения</Button>{' '}   
                    <Button color="secondary" onClick={onToggle}>Отмена</Button>                    
                </ModalFooter>
            </Modal>
        </CardTitle>
    );     
};