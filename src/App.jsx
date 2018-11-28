import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment } from 'react';
import { Route, Link, NavLink } from 'react-router-dom';

import { Container, Card, CardBody } from 'reactstrap';

import ProjectContainer from 'containers/ProjectContainer'
import Heading from 'containers/HeadingContainer';
import AddTodoForm from 'containers/AddTodoFormContainer';
import TodoList from 'containers/TodoListContainer';
import Header from 'containers/HeaderContainer';
import Footer from 'components/Footer';
import Greeting from 'containers/GreetingContainer';
import Projects from 'containers/ProjectsContainer';


export default function App(props) {
    // const { project_id } = props;
    return (
        <Fragment>
            <Header />
            <Route exact path='/' component={Greeting}  />
            <Route path='/projects' component={Projects} />
            {/* <Route path='/projects:index' component=/> */}
            <ProjectContainer> 
                <div className="project">        
                    <Container>
                        <Card>
                            <CardBody>
                                <Heading />
                            </CardBody>             
                            <TodoList />
                            <AddTodoForm />
                        </Card>
                    </Container>
                </div>
            </ProjectContainer>
            <Footer />
        </Fragment>
    );
};