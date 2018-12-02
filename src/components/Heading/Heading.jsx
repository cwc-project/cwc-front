import './Heading.css';
import React from 'react';
import { Modal, ModalHeader, ModalBody, CardTitle, ModalFooter, Input, Button } from 'reactstrap';

export default function Heading (props) {
    // const { title, modal, onToggle, onSubmit, getInput} = props;  
    const { project } = props
   
    return (

        <CardTitle 
            className="todos card-title"
            title="Click for set heading" 
            onClick={onToggle} 
            
        >          
            {project.title}
            {/* <span className="project-title" id="new">{rp}</span>            */}
            {/* <Modal 
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
            </Modal> */}
        </CardTitle>
    );     
};