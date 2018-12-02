import './Projects.css';
import React from 'react';
import { Route, Link } from 'react-router-dom';

import { ChevronsRight, MoreVertical, Plus } from 'react-feather';
import { Container, Form, FormGroup, CustomInput, Label, Input, Card, CardBody } from 'reactstrap';
import ButtonComponent from 'components/ButtonComponent';
import ProjectContainer from 'containers/ProjectContainer';
import HeadingContainer from 'containers/HeadingContainer';
import ProjectsSelectContainer from 'containers/ProjectsSelectContainer';

export default function(props) {
    const { projects, value, onChange, onSelect } = props;  

    return(
        <Container className="projects text-center" >
            {
                projects ?
                    <div>
                        <h3 className="mb-4">Choose project</h3>
                        <ProjectsSelectContainer 
                            projects={projects}                           
                        />
                    </div>

                :
                    <ButtonComponent
                        className="first-project-btn mt-4"
                        color="primary"                    
                    >
                        <Plus /> Create your first project
                    </ButtonComponent>
            }            
        </Container>
    );
};


            //     <Card>
            //     {/* <MoreVertical /> */}
            //     <CardBody >
            //       {/* <HeadingContainer 
            //             projects={projects}
            //         />  */}
            //     <Form
            //     // onSubmit={onSelect}
            //     >
            //         <Label for="exampleCustomSelect">Select project</Label>
            //         <div className="projects-form">
            //             <Input 
            //                 type="select" 
            //                 value={value}
            //                 name="select"
            //                 onChange={onChange}
            //             >
            //                 {projects ? 
            //                     projects.map((project, idx) => <option key={idx} value={idx + 1} >{project.title}</option>)
            //                 :
            //                     <option value="" disabled>There are no projects</option>}
            //             </Input>
                        

            //         <ButtonComponent 
            //             className="choose-project-btn"
            //             color="primary"
            //             outline
            //             icon={<ChevronsRight/>}
            //             onClick={onSelect}
                    
            //         />
            //     </div>
            //     </Form>
            //     </CardBody>
            //     <Route path='/projects/:projectId' component={ProjectContainer} />            
            // </Card>