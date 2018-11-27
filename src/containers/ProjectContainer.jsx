import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { project_id, pickProject, getProjects } from '../actions';

class ProjectContainer extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { onGetProjects } = this.props;
        
        onGetProjects()
        .then(() => pickProject(this.props.projects, 0));
    }
    
    render() {     
        console.log(project_id)
        return (  
            // project_id ? 
                this.props.children 
            // : 
            //     <div className="loading-project">...loading project</div>
            
        );
    }
};

function mapStateToProps(state) {
    return {
        projects: state.projects,
    };
};

function mapDipsatchToProps(dispatch) {
    return {
        onGetProjects: () => dispatch(getProjects()), 
    };
};

export default connect(mapStateToProps, mapDipsatchToProps)(ProjectContainer);