import React, { PureComponent } from 'react';

import RegEnterForm from 'components/RegEnterForm'

class RegEnterFormContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            hidePass: true,
        };
    };

    passCheck = () => {
        const passRegExp = /^(?=.*\d)(?=.*[a-z])[\w!@#$%^&*]{6,}$/i;
        const emailRegExp =/^[a-z0-9]+[\w-\.]*\@[a-z0-9]+[\w-\.]*\.[a-z]{2,3}$/i;
    }

    togglePass = event => {
        this.setState({ hidePass: !this.state.hidePass, });
        event.preventDefault();
    };
    
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value, });
        if([event.target.name] === 'email') {
            this.emailCheck();
        }
        if([event.target.name] === 'password') {
            this.passCheck();
        }
    }

    render() {
        const { ...state } = this.state;

        return(
            <RegEnterForm 
                state={state}
                onToggleModal={this.toggleModal}
                onToggleTab={this.toggleTab}
                onTogglePass={this.togglePass}   
                onChange={this.handleChange}             
            />
        );
    };
};

export default RegEnterFormContainer;
