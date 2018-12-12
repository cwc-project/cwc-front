import './RegEnterModal.css';
import React, { PureComponent } from 'react';
import classnames from 'classnames';

import { 
    User, 
    UserPlus, 
} from 'react-feather';
import { 
    Modal, 
    ModalHeader, 
    ModalBody, 
    TabContent, 
    TabPane, 
    Nav, 
    NavItem, 
    NavLink,
} from 'reactstrap';
import RegEnterFormContainer from 'containers/RegEnterFormContainer';

export default class RegEnterModal extends PureComponent {
    constructor(props) {
debugger
        super(props);
        this.state = {
            modal: false,
            activeTab: this.props.defaultTab,
        };     
    };

    // toggleModal = () => this.setState({ modal: !this.state.modal });
    componentDidUpdate(prevProps) {
        
    }
    toggleTab = tab => {
        if (this.state.activeTab !== tab) {
          this.setState({ activeTab: tab, });
        };
    };

    render() {
        const { 
            modal, 
            // activeTab,
            onToggleModal, 
            // onToggleTab,
        } = this.props;
        const { activeTab } = this.state;
    
        const emailText = 'Please state valid e-mail. It will be used for password restore.';
        const emailFeedback = 'Incorrect email format. Example: example@email.com';
        const passFeedback = 'Password length should be not less than 6 characters. Please use at least one letter and one number.';
         
         console.log(this.state.activeTab, 'state')

        return (
            <div>
                <Modal 
                    className='reg-modal'
                    isOpen={modal} 
                    // toggle={this.toggleModal} 
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
                                    onClick={() => { this.toggleTab('1'); }}
                                >
                                     Sign In <User className="pb-1 pl-1" />
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '2' })}
                                    onClick={() => { this.toggleTab('2'); }}
                                >
                                     Sign Up <UserPlus className="pb-1 pl-1" />
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <RegEnterFormContainer 
                                    id="log"                                
                                    btnValue="Log in"
                                />
                            </TabPane>
                            <TabPane tabId="2">
                                <RegEnterFormContainer 
                                    id="reg"                                  
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
};