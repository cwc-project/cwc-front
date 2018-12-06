import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getProjects, addProject } from '../actions';

import Projects from 'components/Projects';

class ProjectsContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            title: '',
            value: '',
            editing: false,
        };
    };

    componentDidMount() {
        const { user_id, onGetProjects } = this.props;        
        onGetProjects(user_id);      
    };

    modalToggle = () => this.setState({ modal: !this.state.modal, });

    handleChange = event => this.setState({ [event.target.name]: event.target.value, });

    addProject = async () => {   
        const { user_id, onAddProject } = this.props;
        const { title } = this.state;
        await onAddProject(title, user_id);
        this.modalToggle();
        this.props.history.push('/projects/1');
    };

    render() {
        const { modal, title } = this.state;
        const { projects, loading } = this.props;
        return(
            <Projects 
                modal={modal}
                title={title}
                projects={projects}
                loading={loading}
                onModalToggle={this.modalToggle}
                onChange={this.handleChange}
                onAddProject={this.addProject}
            />
        );
    };
};

function mapStateToProps(state) {
    return {
        user_id: state.user.id,
        projects: state.projects,
        loading: state.loading.projects,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        onGetProjects: user_id => dispatch(getProjects(user_id)),
        onAddProject: (title, user_id) => dispatch(addProject(title, user_id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer);