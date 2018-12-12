import React, { PureComponent } from 'react';

import RegEnterModal from 'components/RegEnterModal';

class RegEnterModalContainer extends PureComponent {
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
        const { ...state } = this.state;
 
        return(
            <RegEnterModal 
                state={state}       
                onToggleModal={this.toggleModal}
                onToggleTab={this.toggleTab}
                onTogglePass={this.togglePass}                
            />
        );
    };
};

export default RegEnterModalContainer;
