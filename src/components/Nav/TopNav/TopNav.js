import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './TopNav.css';

import AuthUserContext from '../../../App/AuthUserContext';
import SignOut from '../../Auth/SignOut/SignOut';
import * as routes from '../../../constants/routes';

const activestyle = {
    fontWeight: 'bold',
    color: '#E4B363'
};

class TopNav extends Component {
    render() {
        return (
            <AuthUserContext.Consumer>
                {authUser => authUser
                    ? <NavAuth />
                    : <NavNonAuth />
                }
            </AuthUserContext.Consumer>
        );
    }
}

const NavAuth = () =>
    <nav className="TopNav navbar navbar-expand-lg justify-content-center">
        <Link to={routes.HOME} className="navbar-brand"> goelect </Link>
        <NavLink to={routes.VOTE} activeStyle={activestyle} className="nav-item nav-link"> Vote </NavLink>
        <NavLink to={routes.ABOUT} activeStyle={activestyle} className="nav-item nav-link"> About </NavLink>
        <NavLink to={routes.CONTACT} activeStyle={activestyle} className="nav-item nav-link"> Contact </NavLink>
        <NavLink to={routes.BLOG} activeStyle={activestyle} className="nav-item nav-link active"> Blog </NavLink>
        <SignOut className="SignOut" />
    </nav>

const NavNonAuth = () =>
    <nav className="TopNav navbar navbar-expand-lg justify-content-center">
        <Link to="/" className="navbar-brand justify-content-left"> goelect </Link>
        <NavLink to={routes.VOTE} activeStyle={activestyle} className="nav-item nav-link"> Vote </NavLink>
        <NavLink to={routes.ABOUT} activeStyle={activestyle} className="nav-item nav-link"> About </NavLink>
        <NavLink to={routes.CONTACT} activeStyle={activestyle} className="nav-item nav-link"> Contact </NavLink>
        <NavLink to={routes.BLOG} activeStyle={activestyle} className="nav-item nav-link active"> Blog </NavLink>
        <NavLink to={routes.SIGN_IN} activeStyle={activestyle} className="nav-item nav-link"> SignIn </NavLink>
    </nav>

export default TopNav;
