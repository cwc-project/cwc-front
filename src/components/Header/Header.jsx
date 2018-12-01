import './Header.css';
import React from 'react';

import { LogIn, LogOut } from 'react-feather';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ButtonComponent from 'components/ButtonComponent';

export default function Header(props) {  
    const { dropdownOpen, user, onToggle, onLog, onClearSessionStorage } = props;

    return (
        <div className="header border-bottom shadow-sm">
            <h5 className="my-0 mr-md-auto font-weight-normal">CWC-project v.0</h5>               
            <div className="header-log">
                <ButtonComponent 
                    className="log-btn"                             
                >
                    {user.email ?               
                        <Dropdown className="user-name" isOpen={dropdownOpen} toggle={onToggle}>
                            <DropdownToggle tag="a">
                                {user.email}
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem tag="a" href="/" onClick={onClearSessionStorage} className="log-out">
                                    <LogOut className="log-out-ico" />&nbsp;Log out 
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>    
               
                    : 
                        <div><a className="log-in" onClick={onLog}>Log in&nbsp;<LogIn /></a></div>
                    }
                </ButtonComponent>
            </div>
        </div>
    );
};
