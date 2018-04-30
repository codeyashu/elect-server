import React, { Component } from 'react';
import './SideNav.css';
import { Link } from 'react-router-dom';

class SideNav extends Component {
    render() {
        const list = ["home", "about", "contact", "blog"];

        return (
            <div className="SideNav row">
                <ul className="nav flex-column bg-dark">
                    {list.map(listItem => {
                        return (
                            <li className="nav-item" key={list.indexOf(listItem)}>
                                <Link to={listItem}>{listItem}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    };
};

export default SideNav;