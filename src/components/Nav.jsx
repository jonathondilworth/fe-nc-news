import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='nav'>
            <div className='nav-link'><Link to='/'>Home</Link></div>
            <div className='nav-link'><Link to='/articles'>Articles</Link></div>
            <div className='nav-link'><Link to='/topics'>Topics</Link></div>
        </nav>
    );
};

export default Nav;