import React from 'react'
import { NavLink } from 'react-router-dom';
import rstyle from './menubar.module.css';

const MenuBar = (props) => {
    return (
        <div className={rstyle.menubar}>
            <nav>
                <li><NavLink to="/public">Me</NavLink></li>
                <li><NavLink to="/search">Search</NavLink></li>
                <li><NavLink to="/friends">Friends</NavLink></li>
                <li><NavLink to="/users">Users</NavLink></li>
                <li><NavLink to="/public">Public Chat</NavLink></li>
                <li><NavLink to="/private">My Messages</NavLink></li>
            </nav>
        </div>
    )
}

export default MenuBar;