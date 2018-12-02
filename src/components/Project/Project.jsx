import './Project.css';
import React from 'react';
import autosize from 'autosize';

import { MoreVertical } from 'react-feather';
import { 
    Card,
    CardBody, 
    CardTitle, 
    Dropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    Input, 
    Button 
} from 'reactstrap';

import ButtonComponent from 'components/ButtonComponent';
import AddTodoForm from 'containers/AddTodoFormContainer';
import TodoList from 'containers/TodoListContainer';
import ProjectsSelectContainer from 'containers/ProjectsSelectContainer';           

export default function Project(props) {
    const { 
        state: {dropdownOpen, modal, modalEdit, title}, 
        project, 
        onDropdownToggle, 
        onModalToggle, 
        onModalEditToggle,
        onChange, 
        onAddProject,
        onDeleteProject,
        onEditProjectTitle,
    } = props;

    function autoSize(elem) {  
        autosize(elem);
    };

    return(
        <div>
            <Card> 
                <CardBody> 
                    <Dropdown 
                        className='project-more-dropdown'
                        isOpen={dropdownOpen} 
                        toggle={onDropdownToggle}
                    >
                        <DropdownToggle tag="span">
                            <ButtonComponent 
                                className="project-more-btn"
                                icon={<MoreVertical />} 
                            />                   
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem header>current: {project.title}</DropdownItem>
                            <DropdownItem divider></DropdownItem>
                            <DropdownItem onClick={onModalToggle} >Add new project</DropdownItem>
                            <DropdownItem onClick={onModalEditToggle}>Edit current project</DropdownItem>
                            <DropdownItem divider/>
                            <DropdownItem onClick={onDeleteProject}>Delete current project</DropdownItem>
                        </DropdownMenu>
                    </Dropdown> 
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
                        <Modal 
                            isOpen={modalEdit} 
                            fade={false}
                            toggle={onModalEditToggle}                     
                        >
                            <ModalHeader toggle={onModalEditToggle}>Edit project</ModalHeader>
                            <ModalBody>                        
                                <Input                                     
                                    type="textarea" 
                                    rows={1}
                                    name="title"
                                    value={title || project.title}  
                                    onChange={onChange}
                                    innerRef={elem => autoSize(elem)}               
                                />            
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={onEditProjectTitle}>Rename project</Button>{' '}   
                                <Button color="secondary" onClick={onModalEditToggle}>Cancel</Button>                    
                            </ModalFooter>
                        </Modal>
                    <CardTitle className="project-title">{project.title}</CardTitle>
                    <ProjectsSelectContainer />
                </CardBody>             
                <TodoList project={project} />
                <AddTodoForm project={project} />
            </Card>
        </div>
    );
};