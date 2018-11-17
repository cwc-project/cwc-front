import './Header.css';
import React, { PureComponent } from 'react';

import { LogIn, LogOut } from 'react-feather';
import ButtonComponent from 'components/ButtonComponent';

export default class Header extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            logged: false,
            user: 'user name'
        };
    }

    handleLog = () => this.setState({ logged: !this.state.logged})
    
    render() {
        const { logged, user } = this.state;
        return (
            <div className="header border-bottom shadow-sm">
                <h5 className="my-0 mr-md-auto font-weight-normal">CWC-project v.0</h5>               
                <div className="header-log">
                    {/* <span>{ logged ? "user_name" : "Log in" }</span>     */}
                    <ButtonComponent 
                        className="log-btn"
                        // icon={ logged ? <LogOut /> : <LogIn /> }
                        onClick={this.handleLog}            
                    >{logged ? 
                        <div className="user-name">{user}</div> 
                        : 
                        <div>Log in&nbsp;<LogIn /></div>}
                    </ButtonComponent>
                </div>
            </div>
        );
    }
};
