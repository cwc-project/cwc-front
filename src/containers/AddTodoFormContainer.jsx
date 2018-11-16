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
            const { onAddTodo, project_id } = this.props;
            onAddTodo(title, project_id);
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

function mapStateToProps(store) {
    return {
        project_id: store.project.id,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        onAddTodo: (title, project_id) => dispatch(addTodo(title, project_id)), 
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoFormContainer);