import React, { Component } from 'react';
import './SideNav.css';
import { Link } from 'react-router-dom';

class SideNav extends Component {
    render() {
        const list = ["Vote", "Blog", "About", "Contact"];

        return (
            <nav className="SideNav nav bg-dark flex-column">
                <a className="navbar-brand" href="/"> GoElect </a>
                {list.map(listItem => {
                    return (
                        <Link to={listItem.toLowerCase()} className="nav-link" key={list.indexOf(listItem)}>{listItem}</Link>
                    );
                })}
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
