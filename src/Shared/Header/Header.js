import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/sign-up"}>SignUp</Link>
                <Link to={"/login"}>Login</Link>
            </nav>
        </div>
    );
};

export default Header;