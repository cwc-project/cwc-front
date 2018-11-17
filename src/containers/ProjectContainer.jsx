import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getProjects } from '../actions';

class ProjectContainer extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { onGetProjects } = this.props;
        onGetProjects();
    }
    
    render() {     
        const { project_id } = this.props;
        return (  
            project_id ? 
                this.props.children 
            : 
                <div className="loading-project">...loading project</div>
            
        );
    }
};

function mapStateToProps(state) {
    return {
        project_id: state.project.id,
    };
};

function mapDipsatchToProps(dispatch) {
    return {
        onGetProjects: () => dispatch(getProjects()),        
    };
};

export default connect(mapStateToProps, mapDipsatchToProps)(ProjectContainer);