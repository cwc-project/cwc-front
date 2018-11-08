import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment } from 'react';
import Heading from 'components/Heading';
import AddTodoForm from 'components/AddTodoForm';
import TodoList from 'components/TodoList';
import { Container } from 'reactstrap'

export default function App () {
    return (
        <div className="project">
            <Container>
                <Heading />
                <AddTodoForm />
                <TodoList />
            </Container>
        </div>
        // <Fragment>
        //     <span>test</span>
        // </Fragment>
    );
};