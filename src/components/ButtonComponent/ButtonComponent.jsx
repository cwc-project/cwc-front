import './ButtonComponent.css';
import React from 'react';
import PropTypes from 'prop-types';

import { Button  }  from 'reactstrap';

export default function ButtonComponent(props) {
    const { icon, children } = props;

    return (
        <Button {...props} >
            { icon ? icon : children }
        </Button>
    );
};

ButtonComponent.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.object,    
    onClick: PropTypes.func,
    children: PropTypes.node,    
};

ButtonComponent.defaultProps = {
    color: 'light',
};