import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

import AddTodoForm from 'components/AddTodoForm';

class AddTodoFormContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        }
    }

    handleAddTodo = (event) => {
        event.preventDefault();
        const title = this.state.title;

        if(title) {
            const { onAddTodo } = this.props;
            onAddTodo(title);
            this.setState({ title: '', });
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value, });
    }

    render() {
        const { title } = this.state;

        return(
            <AddTodoForm 
                title={title}
                onChange={this.handleChange}
                onAddTodo={this.handleAddTodo}            
            />
        );

    }
};

function addDispatchToProps(dispatch) {
    return {
        onAddTodo: title => dispatch(addTodo(title)), 
    };
};

export default connect(null, addDispatchToProps)(AddTodoFormContainer);