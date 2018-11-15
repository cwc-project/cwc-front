import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment } from 'react';

import { Container, Card, CardBody } from 'reactstrap';

import Heading from 'containers/HeadingContainer';
import AddTodoForm from 'containers/AddTodoFormContainer';
import TodoList from 'containers/TodoListContainer';
import Header from 'components/Header';
import Footer from 'components/Footer';


export default function App () {
    return (
        <Fragment>
            <Header />
            <div className="project">
                <Container>
                    <Card >
                        <CardBody>
                            <Heading />
                        </CardBody>             
                        <TodoList />
                        <AddTodoForm />
                    </Card>
                </Container>
            </div>
            <Footer />
        </Fragment>
    );
};