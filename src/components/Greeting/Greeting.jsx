import './Greeting.css';
import React from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function Greeting(props) {
    const { onGetUser } = props;
    return(
        <main>               
            <Container>
                <h1 className="main-header">CWC</h1>  
                <div className="geeting">
                    <p>Sipmle todo application based on ReactJS(front-end) and RoR(back-end).</p>
                    <p>For using please <Link to="/projects" onClick={onGetUser}>Sign in</Link> or <Link to="/projects" onClick={onGetUser}>register</Link>.</p> 
                </div>
            </Container>
        </main>
    );
};