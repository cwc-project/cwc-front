import React from 'react';
import PropTypes from 'prop-types';

import { Clock } from 'react-feather';
import ButtonComponent from 'components/ButtonComponent';

export default function Timer(props) {
    const { editing, onHandleEdit } = props;
    
    return (  
        editing ? 
            <span onClick={onHandleEdit}>please set timer</span>
            : 
            <ButtonComponent
                className="timer"
                icon={<Clock />}
                onClick={onHandleEdit}       
            />        
    );
};

Timer.propTypes = {
    editing: PropTypes.bool.isRequired,
    onHandleEdit: PropTypes.func.isRequired,
};