import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './TopNav.css';

import AuthUserContext from '../../../App/AuthUserContext';
import * as routes from '../../../constants/routes';
import SignOut from '../../Auth/SignOut/SignOut';

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
    <nav className="TopNav navbar justify-content-center">
        <Link to={routes.HOME} className="navbar-brand">goelect</Link>
        <NavLink to={routes.VOTE} activeClassName="active" className="nav-item nav-link">Vote</NavLink>
        <NavLink to={routes.ABOUT} activeClassName="active" className="nav-item nav-link">About</NavLink>
        <NavLink to={routes.CONTACT} activeClassName="active" className="nav-item nav-link">Contact</NavLink>
        <NavLink to={routes.BLOG} activeClassName="active" className="nav-item nav-link">Blog</NavLink>
        <SignOut className="SignOut" />
    </nav>

const NavNonAuth = () =>
    <nav className="TopNav navbar justify-content-center">
        <Link to="/" className="navbar-brand justify-content-left">goelect</Link>
        <NavLink to={routes.VOTE} activeClassName="active" className="nav-item nav-link">Vote</NavLink>
        <NavLink to={routes.ABOUT} activeClassName="active" className="nav-item nav-link">About</NavLink>
        <NavLink to={routes.CONTACT} activeClassName="active" className="nav-item nav-link">Contact</NavLink>
        <NavLink to={routes.BLOG} activeClassName="active" className="nav-item nav-link">Blog</NavLink>
        <NavLink to={routes.SIGN_IN} activeClassName="active" className="nav-item nav-link">Sign In</NavLink>
    </nav>

export default TopNav;
