import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getProjects } from '../actions';

import Projects from 'components/Projects';

class ProjectsContainer extends PureComponent {
    constructor(props) {
        super(props);    
        this.state = {
            projectId: this.props.projects[0],
        };    
    };

    componentDidMount() {
        const { projects, user_id, onGetProjects } = this.props;        
        onGetProjects(user_id)
        .then(() => {
            projects[0] ? console.log('there are projects') : console.log('there is no project')
        })
        
        // if(this.state.projectId)
        //     this.props.history.push('/:1');
    };

    handleProjectSelect = event => {

    }



    render() {
        const { projects } = this.props;
        console.log(this.state)
        return(
            <Projects 
                projects={projects}
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
        onGetProjects: user_id => dispatch(getProjects(user_id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer);