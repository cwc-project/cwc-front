import './Projects.css';
import React, { Fragment } from 'react';
import autosize from 'autosize';

import { Plus } from 'react-feather';
import { Container, Modal, ModalHeader, ModalBody, Input, ModalFooter, Button } from 'reactstrap';
import ProjectsSelectContainer from 'containers/ProjectsSelectContainer';
import ButtonComponent from 'components/ButtonComponent';

export default function(props) {
    const { modal, title, projects, loading, onModalToggle, onChange, onAddProject } = props;  

    function autoSize(elem) {  
        autosize(elem);
    };

    return(
        !loading ?
            <Container className="projects text-center" >
                {
                    projects.length  ?
                        <div>
                            <h3 className="mb-4">Choose project</h3>
                            <ProjectsSelectContainer 
                                projects={projects}                           
                            />
                        </div>

                    :
                        <Fragment>
                            <Modal 
                                isOpen={modal} 
                                fade={false}
                                toggle={onModalToggle}                     
                            >
                                <ModalHeader toggle={onModalToggle}>Add new project</ModalHeader>
                                <ModalBody>                        
                                    <Input                                     
                                        type="textarea" 
                                        rows={1}
                                        name="title"
                                        value={title}  
                                        onChange={onChange}
                                        innerRef={elem => autoSize(elem)}
                                        placeholder='Project title'                     
                                    />            
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={onAddProject}>Submit new project</Button>{' '}   
                                    <Button color="secondary" onClick={onModalToggle}>Cancel</Button>                    
                                </ModalFooter> 
                            </Modal>
                            <ButtonComponent
                                className="first-project-btn mt-4"
                                color="primary"  
                                onClick={onModalToggle}                  
                            >
                                <Plus /> Create your first project
                            </ButtonComponent>
                        </Fragment>
                }            
            </Container>
        :
                <div>...loading</div>
    );
};