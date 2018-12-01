import './Project.css';
import React from 'react';
import { Card, CardBody } from 'reactstrap';

import Heading from 'containers/HeadingContainer';
import AddTodoForm from 'containers/AddTodoFormContainer';
import TodoList from 'containers/TodoListContainer';

export default function Project(props) {
    const { project } = props;
    return(
        <div>
            <div>
                {/* <Card> */}
                    {/* <CardBody> */}
                        {/* <Heading 
                            project={project}
                        /> */}
                    {/* </CardBody>              */}
                    <TodoList 
                        project={project} 
                    />
                    <AddTodoForm
                        project={project}
                    />
                {/* </Card> */}
            </div>
        </div> 
    );
};