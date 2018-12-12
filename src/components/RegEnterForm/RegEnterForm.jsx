import './RegEnterForm.css';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { 
    Eye, 
    EyeOff, 
} from 'react-feather';
import { 
    Button, 
    Form,
    FormGroup,
    FormText,
    FormFeedback,
    Input,
    InputGroup,
    InputGroupAddon,
    Label,
} from 'reactstrap';
import ButtonComponent from 'components/ButtonComponent';

export default function RegEnterForm(props) {
    const { 
        state: {
            email,
            password,
            hidePass,
            emailValid,
            passValid,
        }, 
        props: {
            id,
            btnValue,
            emailText,
            passText,
            emailFeedback,
            passFeedback,
        },       
        onTogglePass,
        onChange
    } = props;

    const emailCheck = classNames(     
        emailValid === undefined || !emailFeedback  ? '' : (emailValid ? 'is-valid' : 'is-invalid'),
    );   
    const passCheck = classNames(
        passValid === undefined || !passFeedback ? '' : (passValid ? 'is-valid' : 'is-invalid'),
    ); 

    return (
        <Form className="p-1">
            <FormGroup className="mb-1">
                <Label for={`${id}Email`}>E-mail*</Label>  
                <InputGroup>                    
                    <Input 
                        className={emailCheck}
                        type="email" 
                        name="email" 
                        value={email}
                        id={`${id}Email`} 
                        onChange={onChange}
                        // placeholder="use for authentification" 
                    />
                    <InputGroupAddon className="at-addon-right" addonType="append">@</InputGroupAddon>
                    {emailFeedback ? <FormFeedback>{emailFeedback}</FormFeedback> : false} 
                </InputGroup> 
                {emailText ? <FormText>{emailText}</FormText> : false}               
            </FormGroup>

            <FormGroup>
            <Label for={`${id}Password`}>Password*</Label>
                <InputGroup>
                    <Input                         
                        className={passCheck}
                        type={hidePass ? 'password' : 'text'} 
                        name="password" 
                        value={password}
                        id={`${id}Password`}                          
                        // placeholder="six characters minimum" 
                        onChange={onChange}                        
                    />
                    <InputGroupAddon addonType="append">
                        <ButtonComponent
                            className="pass-appear-btn rounded-right"
                            icon={hidePass ? <EyeOff /> : <Eye />}
                            onClick={onTogglePass}
                        />
                    </InputGroupAddon>
                    {passFeedback ? <FormFeedback>{passFeedback}</FormFeedback> : false}
                </InputGroup>
                {passText ? <FormText>{passText}</FormText> : false}
            </FormGroup>                     
            <Button className="float-right " color="primary" outline>{btnValue}</Button>
        </Form>
    );
};

RegEnterForm.propTypes = {
    state: PropTypes.shape({        
        email: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
        hidePass: PropTypes.bool,
        emailValid: PropTypes.oneOf([true, false, undefined,]),
        passValid: PropTypes.oneOf([true, false, undefined,]),
      }),
    onChange: PropTypes.func.isRequired,
    hidePass: PropTypes.bool,
}

RegEnterForm.defaultProps = {
    btnValue: 'submit',
};