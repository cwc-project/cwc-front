import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getProjects } from '../actions';

import Projects from 'components/Projects';

class ProjectsContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    };

    componentDidMount() {
        const { user_id, onGetProjects } = this.props;        
        onGetProjects(user_id);
    };

    handleChange = event => {
        this.setState({value: event.target.value});
    }

    selectProject = event => {   
        // console.log(event.target.elements.select.value) //можно реализовать через submit 
        const { history, projects } = this.props;
        const { value } = this.state;
        const projectIdx = projects && !value ? 1 : value;
        history.push(`/projects/${projectIdx}`);
        event.preventDefault();
    }

    render() {
        const { projects} = this.props;
        const { value } = this.state;
        return(
            <Projects 
                projects={projects}
                value={value}
                onChange={this.handleChange}
                onSelect={this.selectProject}
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