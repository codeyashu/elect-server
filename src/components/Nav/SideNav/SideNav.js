import React, { Component } from 'react';
import './SideNav.css';
import { Link } from 'react-router-dom';

class SideNav extends Component {
    render() {
        const list = ["Vote", "Blog", "About", "Contact"];

        return (
            <nav className="SideNav nav nav-pills flex-column">
                <Link to="/" className="navbar-brand"> goelect </Link>
                <Link to={list[0].toLowerCase()} className="nav-item nav-link">{list[0]}</Link>
                <Link to={list[1].toLowerCase()} className="nav-item nav-link">{list[1]}</Link>
                <Link to={list[2].toLowerCase()} className="nav-item nav-link">{list[2]}</Link>
                <Link to={list[3].toLowerCase()} className="nav-item nav-link">{list[3]}</Link>
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
