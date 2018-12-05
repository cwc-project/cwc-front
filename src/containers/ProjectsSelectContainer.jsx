import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ProjectsSelect from 'components/ProjectsSelect';

class ProjectsSelectContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    };

    handleChange = event => this.setState({value: event.target.value});

    handleLocation() {
        const { projects } = this.props;
        const { value } = this.state;
        const projectIdx = projects && !value ? 1 : value;
        if(value <= projects.length)
            this.props.history.push(`/projects/${projectIdx}`);
    };

    selectProject = event => {   
        this.handleLocation();
        event.preventDefault();
    };

    render() {
        const { projects } = this.props;
        const { value } = this.state;

        return(
            <ProjectsSelect 
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
        projects: state.projects,
    };
};

export default withRouter(connect(mapStateToProps)(ProjectsSelectContainer));