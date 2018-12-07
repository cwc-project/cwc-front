import React from 'react';
import classnames from 'classnames';

import { User, UserPlus} from 'react-feather';
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

} from 'reactstrap';

export default function RegEnterModalForm(props) {
    const { modal, activeTab, onToggleModal, onToggleTab, } = props;

    return (
        <div>
            <Button color="danger" onClick={onToggleModal}>Open</Button>
            <Modal isOpen={modal} toggle={onToggleModal} >
                <ModalBody>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '1' })}
                                onClick={() => { onToggleTab('1'); }}
                            >
                                 Sign In <User />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '2' })}
                                onClick={() => { onToggleTab('2'); }}
                            >
                                 Sign Up <UserPlus />
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <h4>Tab 1 Contents</h4>
                        </TabPane>
                        <TabPane tabId="2">
                            <h4>Tab 2 Contents</h4>
                        </TabPane>
                    </TabContent>
                </ModalBody>               
            </Modal>
        </div>
    );
};

{/* <ModalHeader toggle={onToggle}>Modal title</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={onToggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={onToggle}>Cancel</Button>
                </ModalFooter> */}