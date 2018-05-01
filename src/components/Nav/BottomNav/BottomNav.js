import React, { Component } from 'react';
import './BottomNav.css';

class BottomNav extends Component {
    render() {
        return (
            <nav className="BottomNav nav justify-content-center fixed-bottom">
                Copyright © 2018 Go Elect Inc. All rights reserved.
            </nav>
        );
    };
};

export default BottomNav;
