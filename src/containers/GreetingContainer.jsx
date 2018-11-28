import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getUser } from '../actions';

import Greeting from 'components/Greeting';

class GreetingContainer extends PureComponent {
    constructor(props) {
        super(props);
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
        return(
            <Greeting
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