import React, { Component } from 'react';
import './SideNav.css';
import { Link, NavLink } from 'react-router-dom';

import * as routes from '../../../constants/routes';

class SideNav extends Component {

    render() {
        let activestyle = {
            fontWeight: 'bold',
            color: '#E4B363'
        };

        return (
            <nav className="SideNav nav flex-column">
                <Link to="/" className="navbar-brand"> goelect </Link>
                <NavLink to={routes.SIGN_UP} activeStyle={activestyle} className="nav-item nav-link"> SignUp </NavLink>
                <NavLink to={routes.VOTE} activeStyle={activestyle} className="nav-item nav-link"> Vote </NavLink>
                <NavLink to={routes.ABOUT} activeStyle={activestyle} className="nav-item nav-link"> About </NavLink>
                <NavLink to={routes.CONTACT} activeStyle={activestyle} className="nav-item nav-link"> Contact </NavLink>
                <NavLink to={routes.BLOG} activeStyle={activestyle} className="nav-item nav-link active"> Blog </NavLink>
            </nav>
        );
    }
}

export default SideNav;


/*
<ul className="flex-column">
    <a className="navbar-brand" href="/"> GoElect </a>
        {list.map(listItem => {
            return (
                <li className="nav-item" key={list.indexOf(listItem)}>
                    <Link to={listItem}>{listItem}</Link>
                </li>
            );
        })}
</ul>
*/
