import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment } from 'react';

import { Container, Card, CardBody, CardHeader } from 'reactstrap';

import Heading from 'components/Heading';
import AddTodoForm from 'containers/AddTodoFormContainer';
import TodoList from 'containers/TodoListContainer';


export default function App () {
    return (
        <div className="project">
            <Container>
                <Card  >
                    <CardBody>
                        <Heading />
                    </CardBody>             
                    <TodoList />
                    <AddTodoForm />
                </Card>
            </Container>
        </div>
        // <Fragment>
        //     <span>test</span>
        // </Fragment>
    );
};