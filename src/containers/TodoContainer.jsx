import React, { PureComponent } from 'react';

import Todo from 'components/Todo';

class TodoContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            completed: false,
        };
    }
    
    handleCheck = () => {
        this.setState({ completed: !this.state.completed, })
    }

    render() {
        const{ completed } = this.state;

        return(
            <Todo 
                completed={completed}
                onCheck={this.handleCheck}
            />
        );
    }
};

export default TodoContainer;