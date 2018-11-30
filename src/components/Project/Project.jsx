import './Project.css';
import React from 'react';
import { Container, Card, CardBody } from 'reactstrap';

import ProjectContainer from 'containers/ProjectContainer'
import Heading from 'containers/HeadingContainer';
import AddTodoForm from 'containers/AddTodoFormContainer';
import TodoList from 'containers/TodoListContainer';

export default function Project(props) {
    const { project } = props;
    return(
            <div className="project">   

               <Container>
                    <Card>
                        <CardBody>
                            <Heading 
                                project={project}
                            />
                        </CardBody>             
                        {/* <TodoList />
                        <AddTodoForm /> */}
                    </Card>
                </Container>
            </div> 
    );
};