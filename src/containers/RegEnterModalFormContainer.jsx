import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import RegEnterModalForm from 'components/RegEnterModalForm'

class RegEnterModalFormContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            activeTab: '1',
            hidePass: true,
        };
    };

    toggleModal = () => this.setState({ modal: !this.state.modal });

    toggleTab = tab => {
        if (this.state.activeTab !== tab) {
          this.setState({ activeTab: tab, });
        };
    };

    togglePass = event => {
        this.setState({ hidePass: !this.state.hidePass, });
        event.preventDefault();
    };

    render() {
        const { ...state } = this.state;

        return(
            <RegEnterModalForm 
                state={state}
                onToggleModal={this.toggleModal}
                onToggleTab={this.toggleTab}
                onTogglePass={this.togglePass}                
            />
        );
    };
};

export default connect(null)(RegEnterModalFormContainer);
