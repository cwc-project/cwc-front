import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Project from 'components/Project';

import { addProject, deleteProject, editProjectTitle } from '../actions';

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

    addProject = () => {   
        const { user_id, onAddProject } = this.props;
        const { title } = this.state;
        onAddProject(title, user_id);
        this.modalToggle();
    };

    deleteProject = () => {
        const { onDeleteProject } = this.props;
        const project_id = this.pickProject().id;
        onDeleteProject(project_id);
    };

    editProjectTitle = () => {
        debugger
        const { onEditProjectTitle } = this.props;
        const project_id = this.getProjectId();
        const { title } = this.state;
        onEditProjectTitle(project_id, title);     
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
        onDeleteProject: project_id => dispatch(deleteProject(project_id)),
        onEditProjectTitle: (project_id, title) => dispatch(editProjectTitle(project_id, title)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);