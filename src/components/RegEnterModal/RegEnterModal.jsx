import './RegEnterModal.css';
import React from 'react';
import classnames from 'classnames';

import { 
    User, 
    UserPlus, 
    Eye, 
    EyeOff, 
} from 'react-feather';
import { 
    Button, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    TabContent, 
    TabPane, 
    Nav, 
    NavItem, 
    NavLink,
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    Label,
} from 'reactstrap';
import ButtonComponent from 'components/ButtonComponent';
import RegEnterFormContainer from 'containers/RegEnterFormContainer';

export default function RegEnterModal(props) {
    const { 
        state: {
            modal, 
            activeTab, 
            hidePass}, 
        onToggleModal, 
        onToggleTab, 
        onTogglePass,
    } = props;

    const emailText = 'Please state valid e-mail. It will be used for password restore.';
    const emailFeedback = 'Incorrect email format. Example: example@email.com';
    const passFeedback = 'Password length should be not less than 6 characters. Please use at least one letter and one number.';

    return (
        <div>
            <Button color="danger" onClick={onToggleModal} >Open</Button>
            <Modal 
                className='reg-modal'
                isOpen={true} 
                toggle={onToggleModal} 
            >
                <ModalHeader 
                    className="border-bottom-0 pb-0"
                    toggle={onToggleModal} 
                />
                <ModalBody className="pt-0">
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '1' })}
                                onClick={() => { onToggleTab('1'); }}
                            >
                                 Sign In <User className="pb-1 pl-1" />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '2' })}
                                onClick={() => { onToggleTab('2'); }}
                            >
                                 Sign Up <UserPlus className="pb-1 pl-1" />
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <RegEnterFormContainer                                 
                                btnValue="Log in"
                            />
                        </TabPane>
                        <TabPane tabId="2">
                            <RegEnterFormContainer                                 
                                btnValue="Register"
                                passFeedback={true}
                                emailText={emailText}
                                emailFeedback={emailFeedback}
                                passFeedback={passFeedback}
                            />
                        </TabPane>
                    </TabContent>
                </ModalBody>               
            </Modal>
        </div>
    );
};