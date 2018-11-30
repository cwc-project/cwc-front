import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment } from 'react';
import { Route, Link, Switch, NavLink } from 'react-router-dom';


import Header from 'containers/HeaderContainer';
import Footer from 'components/Footer';
import GreetingContainer from 'containers/GreetingContainer';
import ProjectsContainer from 'containers/ProjectsContainer';


export default function App() {
    return (
        <Fragment>
            <Header />
            <Switch>
                <Route exact path='/' component={GreetingContainer} />
                <Route path='/projects' component={ProjectsContainer} />
            </Switch>
            <Footer />
        </Fragment>
    );
};