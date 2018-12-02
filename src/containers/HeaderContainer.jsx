import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getUser } from '../actions';
import Header from 'components/Header';

class HeaderContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
        };
    };

    toggle = () => this.setState({ dropdownOpen: !this.state.dropdownOpen });

    clearSessionStorage() {
        sessionStorage.clear();
    };

    handleLog = () => {
        const { history, onGetUser } = this.props;
        console.log(history)
        onGetUser()
        .then(() => {     
            if(this.props.user.id)
                history.push('/projects');
        }); 
    };

    render() {
        const { dropdownOpen } = this.state;
        const { user } = this.props;

        return(
            <Header
                dropdownOpen={dropdownOpen}
                user={user}
                onToggle={this.toggle}
                onLog={this.handleLog}
                onClearSessionStorage={this.clearSessionStorage}
            />
        );
    };
};

function mapStateToProps(state) {
    return {
        user: state.user,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        onGetUser: () => dispatch(getUser(1)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderContainer));