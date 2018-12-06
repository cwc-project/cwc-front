import './Greeting.css';
import React from 'react';
import { Container } from 'reactstrap';

export default function Greeting(props) {
    const { onLog } = props;
    return(
        <main>               
            <Container>
                <h1 className="main-header">CWC (deploy #9 / browser router)</h1>  
                <div className="geeting">
                    <p>Sipmle todo application based on ReactJS(front-end) and RoR(back-end).</p>
                    <p>For using please <a onClick={onLog}>Sign in</a> or <a onClick={onLog}>register</a>.</p> 
                </div>
                {/* <div className="loading-user">...lodaing user info</div> */}
            </Container>
        </main>
    );
};