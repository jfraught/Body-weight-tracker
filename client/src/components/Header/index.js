import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="px-5 py-3">
            <Link className="text-decoration-none text-white" to='/'><h1>Body Weight Buddy</h1></Link>

            <nav className="pt-2">
                <ul>
                    <li className="px-3"><a href="#what-we-do">What We Do</a></li>
                    <li className="px-3"><a href="#what-you-do">What You Do</a></li>
                    <li className="px-3"><a href="#our-template">Our Templates</a></li>
                    <li className="px-3"><button>Sign In</button></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;