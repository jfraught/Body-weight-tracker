import React from 'react';
import { Link,  } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <header className="px-5 py-3">
            <Link className="text-decoration-none text-white" to='/'><h1>Body Weight Buddy</h1></Link>

            <nav className="pt-2">
                {Auth.loggedIn() ? (
                    <>
                        <Link to={`/dashboard`} className="px-3">Dashboard</Link>
                        <a href="/" onClick={logout} className="px-3">Logout</a>
                    </>
                ) : (
                    <>
                        <a className="px-3" href="/#what-we-do">What We Do</a>
                        <a className="px-3" href="/#what-you-do">What You Do</a>
                        <a className="px-3" href="/#our-template">Our Templates</a>
                        <Link to="/login" className="px-3">Login</Link> 
                    </>
                )}

            </nav>
        </header>
    );
};

export default Header;