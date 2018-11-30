import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Project from 'components/Project';

import { project_id, pickProject, getProjects } from '../actions';

class ProjectContainer extends PureComponent {
    pickProject = () => {
        const { match, projects } = this.props;
        const idx = match.params.projectId - 1;
        return projects[idx];    
    }
    
    render() {     
        const project = this.pickProject();
        return (  
            <Project 
                project={project}            
            />              
        );
    };
};

function mapStateToProps(state) {
    return {
        projects: state.projects,
    };
};


export default connect(mapStateToProps)(ProjectContainer);