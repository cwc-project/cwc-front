import React, {PureComponent} from 'react';
import { connect } from 'react-redux';

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

    pushing = () => {
        console.log(this.props.history)
        // this.props.history.push('/projects');
    }

    render() {
        const { dropdownOpen } = this.state;
        const { user, onGetUser } = this.props;

        return(
            <Header
                dropdownOpen={dropdownOpen}
                user={user}
                onToggle={this.toggle}
                pushing={this.pushing}
                onGetUser={onGetUser}
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);