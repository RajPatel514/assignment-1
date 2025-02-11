import React from 'react';

const Nav = () => {
    return (
        //Navigation used to jump to different sections of the page
        <nav>
            <ul>
                <li><a href="#counter">Counter App</a></li>
                <li><a href="#inputform">Form</a></li>
                <li><a href="#colorbuttons">Colors</a></li>
                <li><a href="#champions">Winners</a></li>
            </ul>
        </nav>
    );
};

export default Nav;
