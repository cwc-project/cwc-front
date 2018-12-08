import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { 
    Eye, 
    EyeOff, 
} from 'react-feather';
import { 
    Button, 
    Form,
    FormGroup,
    FormText,
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
        }, 
        btnValue,
        onTogglePass,
        onChange
    } = props;

    return (
        <Form className="p-1">
            <FormGroup>
                <Label for="exampleEmail">E-mail*</Label>  
                <InputGroup>                    
                    <Input 
                        type="email" 
                        name="email" 
                        value={email}
                        id="exampleEmail" 
                        onChange={onChange}
                        placeholder="use for authentification" 
                    />
                    <InputGroupAddon addonType="append">@</InputGroupAddon>
                </InputGroup> 
                <FormText>Please state valid e-mail. It will be used for password restore.</FormText>                      
            </FormGroup>
            <FormGroup className="pb-2">
                <Label for="password">Password*</Label>
                <InputGroup>
                    <Input 
                        className="border-right-0"
                        type={hidePass ? 'password' : 'text'} 
                        name="password" 
                        value={password}
                        id="password" 
                        placeholder="six characters minimum" 
                        onChange={onChange}
                        // valid={hidePass}
                        // invalid={hidePass}
                        
                    />
                    <InputGroupAddon addonType="append">
                        <ButtonComponent
                            className="pass-appear-btn"
                            icon={hidePass ? <EyeOff /> : <Eye />}
                            onClick={onTogglePass}
                        />
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>    
                    
            <Button className="float-right " color="primary" outline>{btnValue}</Button>

        </Form>
    );
};

RegEnterForm.propTypes = {
    // email: PropTypes.string.isRequired,
    // password: PropTypes.string.isRequired,
    // onChange: PropTypes.func.isRequired,
    // onSubmit: PropTypes.func.isRequired,
    hidePass: PropTypes.bool,
    btnValue: PropTypes.string,
    // formText:  PropTypes.string,
}

RegEnterForm.defaultProps = {
    btnValue: 'submit',
};

//default props для значения кнопки