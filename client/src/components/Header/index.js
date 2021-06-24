import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to='/'>
                <h1>Body Weight Buddy</h1>
            </Link>

            <nav>
               <Link to ='/'></Link>
            </nav>
        </header>
    );
};

export default Header;