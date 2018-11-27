import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getUser } from '../actions';

import Greeting from 'components/Greeting';

// class GreetingContainer extends PureComponent {
//     constructor(props) {
//         super(props);
//     };
// };

function mapDispatchToProps(dispatch) {
    return {
        onGetUser: () => dispatch(getUser(1)),
    };
};

export default connect(null, mapDispatchToProps)(Greeting);