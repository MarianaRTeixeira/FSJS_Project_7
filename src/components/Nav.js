import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    return (
     <nav className='main-nav'>
        <ul>
            <li><NavLink to='/london'>London</NavLink></li>
            <li><NavLink to='/oporto'>Oporto</NavLink></li>
            <li><NavLink to='/amsterdam'>Amsterdam</NavLink></li>
            <li><NavLink to='/rome'>Rome</NavLink></li>
        </ul>
    </nav>   
    )
}

export default Nav;