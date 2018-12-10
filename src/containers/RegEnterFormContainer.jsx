import React, { PureComponent } from 'react';

import RegEnterForm from 'components/RegEnterForm'

class RegEnterFormContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            hidePass: true,
            emailValid: undefined,
            passValid: undefined,
        };
    };

    togglePass = event => {
        this.setState({ hidePass: !this.state.hidePass, });
        event.preventDefault();
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value, });       
        this.handleCheck(event);
    }

    handleCheck(event) {
        switch (event.target.name) {
            case 'email':
                this.emailCheck(event.target.value);
                break;                
            case 'password':
                this.passCheck(event.target.value);
                break;       
            default:
                break;
        };
    };

    passCheck(data) {
        const passRegExp = /^(?=.*\d)(?=.*[a-z])[\w!@#$%^&*]{6,}$/i;
        const check = passRegExp.test(data);
        this.setState({ passValid: check, })
    };

    emailCheck(data) {  
        const emailRegExp =/^[a-z0-9]+[\w-\.]*\@[a-z0-9]+[\w-\.]*\.[a-z]{2,3}$/i;
        const check = emailRegExp.test(data);
        this.setState({ emailValid: check, })
    };  

    render() {
        const { ...state } = this.state;
        const { ...props } = this.props;

        return(
            <RegEnterForm 
                state={state}
                props={props}
                onToggleModal={this.toggleModal}
                onToggleTab={this.toggleTab}
                onTogglePass={this.togglePass}   
                onChange={this.handleChange}             
            />
        );
    };
};

export default RegEnterFormContainer;
