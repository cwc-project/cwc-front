import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { editProjectTitle } from '../actions';
import Heading from 'components/Heading';

class HeadingContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        };  
        this.input = undefined;
        this.project = this.pickProject();
    };

    pickProject = () => {
        const { match, projects } = this.props;
        // const idx = match.params.projectId - 1;
        return projects[0];    
    }

    getInput = (elem) => {
        this.input = elem;
    };

    componentDidUpdate() {
        const { modal } = this.state;
        if(modal && this.input) this.input.focus(); 
    };

    toggle = () => {
        this.setState({modal: !this.state.modal});                  
    };

    handleSubmit = () => {
        const title = this.input.value;
        const { onEditProjectTitle, project: {id} } = this.props;
        onEditProjectTitle(id, title);        
        this.toggle();
    };

    render() {
        const { modal } = this.state;
        // const { project: {title} } = this.props;
        const project = this.pickProject()
        console.log(this.props.match)
        return (
            <div>Heading</div>
            // <Heading 
            //     title={title}
            //     modal={modal}
            //     onToggle={this.toggle}
            //     onSubmit={this.handleSubmit}   
            //     getInput={this.getInput}         
            // />
        );
    };   
};

function mapStateToProps(state) {
    return {
        user_id: state.user.id,       
    };
};

function mapDipsatchToProps(dispatch) {
    return {  
        onEditProjectTitle: (id, title) => dispatch(editProjectTitle(id, title)),
    };
};

export default withRouter(connect(mapStateToProps, mapDipsatchToProps)(HeadingContainer));