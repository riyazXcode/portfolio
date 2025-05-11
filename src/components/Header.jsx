import React from 'react';
import Logo from 'url:../assets/icons/Logo.svg';


const Header = () => {
    return (
        <header className="navbar">
            <div className="logo">
                <img src={Logo} alt="website logo"/>
            </div>
            <nav className="nav-buttons">
                <a href="#about">About Me</a>
                <a href="#skills">Skills & Experience</a>
                <a href="#works">Works</a>
                <a href="#articles">Articles</a>
                <button className="connect-btn">Let’s Connect!</button>
            </nav>
        </header>
    )
}

export default Header;