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
        };
    };

    toggleModal = () => this.setState({ modal: !this.state.modal });

    toggleTab = tab => {
        if (this.state.activeTab !== tab) {
          this.setState({ activeTab: tab, });
        };
    };

    render() {
        const { modal, activeTab } = this.state;

        return(
            <RegEnterModalForm 
                modal={modal}
                activeTab={activeTab}
                onToggleModal={this.toggleModal}
                onToggleTab={this.toggleTab}
            />
        );
    };
};

export default connect(null)(RegEnterModalFormContainer);
