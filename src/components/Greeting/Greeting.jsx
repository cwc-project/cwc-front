import './Greeting.css';
import React from 'react';
import { Container } from 'reactstrap';
import RegEnterModal from 'components/RegEnterModal';

export default function Greeting(props) {
    const { 
        state: {
            modal,
            defaultTab,
        },
        onLog,
        onToggleModal,
        onDefTabToggle,
    } = props;
    // let defaultTab = '';
    // function tabToggle(tab) {
    //     debugger
    //     defaultTab = tab;
    //     onToggleModal();
    // }

    console.log(props.state.defaultTab)
    return(
       
        <main>               
            <Container>
                <h1 className="main-header">CWC</h1>  
                <div className="geeting">
                    <p>Sipmle todo application based on ReactJS(front-end) and RoR(back-end).</p>
                    <p>For using please <a onClick={() => onDefTabToggle('1')}>Sign in</a> or <a onClick={() => onDefTabToggle('2')}>register</a>.</p> 
                </div>
                {props.state.defaultTab ?
                <RegEnterModal 
                    modal={modal}
                    // activeTab={activeTab}
                    defaultTab={defaultTab}
                    onToggleModal={onToggleModal}
                    // onToggleTab={onToggleTab}
                />
                : false}
                {/* <div className="loading-user">...lodaing user info</div> */}
            </Container>
        </main>
        
    );
};