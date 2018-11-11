import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment } from 'react';
import Heading from 'components/Heading';
import AddTodoForm from 'containers/AddTodoFormContainer';
import TodoList from 'containers/TodoListContainer';
import { Container } from 'reactstrap';

export default function App () {
    return (
        <div className="project">
            <Container>
                <Heading />                
                <TodoList />
                <AddTodoForm />
            </Container>
        </div>
        // <Fragment>
        //     <span>test</span>
        // </Fragment>
    );
};