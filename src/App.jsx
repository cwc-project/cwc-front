import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Container } from 'reactstrap';
import Header from 'containers/HeaderContainer';
import Footer from 'components/Footer';
import GreetingContainer from 'containers/GreetingContainer';
import ProjectsContainer from 'containers/ProjectsContainer';
import ProjectContainer from 'containers/ProjectContainer';
import PageNotFound from 'components/PageNotFound';

export default function App() {

    return (
        <Fragment>            
            <Header />
            <Container className="wrapper text-center" >
                <Switch>
                    <Route exact path='/' component={GreetingContainer} />
                    <Route exact path='/projects' component={ProjectsContainer} />
                    <Route path='/projects/:projectId' component={ProjectContainer} />
                    <Route exact path='*' component={PageNotFound} />                   
                </Switch>
            </Container>
            <Footer />
        </Fragment>
    );
};