import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Heading from 'components/Heading';

export default class HeadingContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            title: 'CWC v.0',
        };  
    }

    componentDidMount() {

    }

    // componentDidUpdate() {
    //     const { modal } = this.state;
    //     if(modal) this.title.focus(); 
    // }

    toggle = () => {
        this.setState({modal: !this.state.modal});                  
    }

    handleSubmit = () => {
        const title = this.title.value;
        if(title) this.setState({ title, });
        
        this.toggle();
    }

    render() {
        const { title, modal } = this.state;

        return (
            <Heading 
                title={title}
                modal={modal}
                onToggle={this.toggle}
                onSubmit={this.handleSubmit}            
            />
        );
    }   
};