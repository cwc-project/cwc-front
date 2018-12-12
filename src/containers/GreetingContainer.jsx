import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getUser } from '../actions';

import Greeting from 'components/Greeting';

class GreetingContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            defaultTab: '',
        };
    };

    toggleModal = () => this.setState({ modal: !this.state.modal });

    defTabToggle = tab => {
        // debugger
        // if (this.state.defaultTab !== tab) {
          this.setState({ defaultTab: tab, }, () => this.toggleModal());
        // };
        
    };

    handleLog = () => {
        const { history, onGetUser } = this.props;
        onGetUser()
        .then(() => {     
            if(this.props.user_id)
                history.push('/projects');
        }); 
    };

    render() {
        const { ...state } = this.state;
        // console.log(this.state.defaultTab)

        return(
            <Greeting
                state={state}       
                onToggleModal={this.toggleModal}
                onDefTabToggle={this.defTabToggle}
                onLog = {this.handleLog}
            />
        );
    };
};

function mapStateToProps(state) {
    return {
        user_id: state.user.id,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        onGetUser: () => dispatch(getUser(1)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GreetingContainer);