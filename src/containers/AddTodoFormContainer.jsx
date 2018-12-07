import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

import AddTodoForm from 'components/AddTodoForm';

class AddTodoFormContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        };
    };

    handleAddTodo = event => {        
        const title = this.state.title;

        if(title) {
            const { onAddTodo, project:{ id: project_id }, user_id } = this.props;
            onAddTodo(title, project_id, user_id);
            this.setState({ title: '', });
        };
        event.preventDefault();
    };

    handleEnterClick = event => {
        if(event.key === 'Enter' ) {
            this.handleAddTodo(event);
        };
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value, });
    }

    render() {
        const { title } = this.state;

        return(
            <AddTodoForm 
                title={title}
                onChange={this.handleChange}
                onAddTodo={this.handleAddTodo} 
                onEnterClick={this.handleEnterClick}           
            />
        );
    };
};

function mapStateToProps(state) {
    return {
        user_id: state.user.id,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        onAddTodo: (title, project_id, user_id) => dispatch(addTodo(title, project_id, user_id)), 
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoFormContainer);