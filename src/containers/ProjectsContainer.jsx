import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getProjects } from '../actions';

import Projects from 'components/Projects';

class ProjectsContainer extends PureComponent {
    constructor(props) {
        super(props);        
    };

    componentDidMount() {
        const { user_id, onGetProjects } = this.props;        
        onGetProjects(user_id);
    };

    render() {
        console.log('history', this.props.history);
        // `this.props.history.push('/some/path')` 
        const { projects } = this.props;
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