import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { addProject, deleteProject, editProjectTitle } from '../actions';
import Project from 'components/Project';

class ProjectContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            modal: false,
            modalEdit: false,
            title: '',
        };
    };
    
    dropdownToggle = () => this.setState({ dropdownOpen: !this.state.dropdownOpen, });

    modalToggle = () => this.setState({ modal: !this.state.modal, });

    modalEditToggle = () => this.setState({ modalEdit: !this.state.modalEdit, });
    
    pickProject = () => {
        const { match, projects } = this.props;
        const idx = match.params.projectId - 1;
        return projects[idx];    
    };

    handleChange = event => this.setState({ [event.target.name]: event.target.value, });

    getProjectId() { return this.pickProject().id; };

    addProject = async () => {   
        const { user_id, projects, onAddProject } = this.props;
        const { title } = this.state;
        await onAddProject(title, user_id);
        this.modalToggle();
        const projectIdx = projects.length + 1;
        this.props.history.push(`/projects/${projectIdx}`);
    };

    deleteProject = () => {
        const { user_id, onDeleteProject } = this.props;
        const project_id = this.pickProject().id;
        this.dropdownToggle();
        const projectIdx = this.props.projects.length > 1 ? this.props.projects.length - 1 : '';
        this.props.history.push(`/projects/${projectIdx}`);
        onDeleteProject(project_id, user_id);
    };

    editProjectTitle = () => {
        const { user_id, onEditProjectTitle } = this.props;
        const project_id = this.getProjectId();
        const { title } = this.state;
        onEditProjectTitle(project_id, title, user_id);     
        this.setState({title: ''});   
        this.modalEditToggle();
    };
    
    render() {     
        const { ...state } = this.state;
        const project = this.pickProject();
        return (  
            <Project 
                state={state}
                project={project}  
                onDropdownToggle={this.dropdownToggle} 
                onModalToggle={this.modalToggle} 
                onModalEditToggle={this.modalEditToggle} 
                onChange={this.handleChange}  
                onAddProject={this.addProject}
                onDeleteProject={this.deleteProject}
                onEditProjectTitle={this.editProjectTitle}     
            />              
        );
    };
};

function mapStateToProps(state) {
    return {
        user_id: state.user.id,
        projects: state.projects,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        onAddProject: (title, user_id) => dispatch(addProject(title, user_id)),
        onDeleteProject: (project_id, user_id) => dispatch(deleteProject(project_id, user_id)),
        onEditProjectTitle: (project_id, title, user_id) => dispatch(editProjectTitle(project_id, title, user_id)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectContainer));