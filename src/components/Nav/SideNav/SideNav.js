import React, { Component } from 'react';
import './SideNav.css';
import { Link, NavLink } from 'react-router-dom';

class SideNav extends Component {

    render() {
        let activestyle = {
            fontWeight: 'bold',
            color: '#E4B363'
        };

        return (
            <nav className="SideNav nav flex-column">
                <Link to="/" className="navbar-brand"> goelect </Link>
                <NavLink to="/signin" activeStyle={activestyle} className="nav-item nav-link"> SignIn </NavLink>
                <NavLink to="/vote" activeStyle={activestyle} className="nav-item nav-link"> Vote </NavLink>
                <NavLink to="/about" activeStyle={activestyle} className="nav-item nav-link"> About </NavLink>
                <NavLink to="/contact" activeStyle={activestyle} className="nav-item nav-link"> Contact </NavLink>
                <NavLink to="/blog" activeStyle={activestyle} className="nav-item nav-link active"> Blog </NavLink>
            </nav>
        );
    };
};

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
