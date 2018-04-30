import React, { Component } from 'react';
//import './Topnav.css';

class TopNav extends Component {
    render() {
        return (
            <nav className="TopNav navbar navbar-dark bg-dark">
                <li className="nav-item">
                    <a className="nav-link" href="#"> Home </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"> About </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"> Contact </a>
                </li>
            </nav>
        );
    };
};

export default TopNav;