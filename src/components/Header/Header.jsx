import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';

import { LogIn, LogOut } from 'react-feather';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ButtonComponent from 'components/ButtonComponent';

export default function Header (props) {
  
    const { dropdownOpen, user, onToggle, onGetUser, onClearSessionStorage, pushing } = props;

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
                        <div><Link to="/projects" className="log-in" onClick={onGetUser}>Log in&nbsp;<LogIn /></Link></div>
                    }
                </ButtonComponent>
                {/* <button onClick={pushing}>push new location</button> */}
            </div>
        </div>
    );

};
