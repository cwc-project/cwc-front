import React from 'react';
import { ListGroup } from 'reactstrap';

import Todo from 'containers/TodoContainer';

import * as Icon from 'react-feather';

export default function TodoList() {
    // const { Calendar } = Icon;
    // const camera = <Icon.Camera />
    return (
        <ListGroup>
            {/* <ListGroupItem><Trash2 /><Square /><div>dasffffffffffffffffffffffffffffffffffffffffffdasfds</div><Clock /><Edit2 /></ListGroupItem>
            <ListGroupItem><Trash2 /><CheckSquare />Создать Дизайн для MVP 0 <Clock /><Edit2 /></ListGroupItem> */}
            <Todo />
            {/* <ListGroupItem><ListGroupItemText>Second Task</ListGroupItemText></ListGroupItem> */}
            {/* <ListGroupItem><IconBtn icon={Calendar} />Создать Дизайн для MVP 0</ListGroupItem> */}
            {/* <ListGroupItem>Создать Дизайн для MVP 0</ListGroupItem> */}
        </ListGroup>
    )
};