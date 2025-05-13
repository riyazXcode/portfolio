import React, {useState} from 'react';
import {Link} from "react-router";
import {Menu, X} from "lucide-react";
import LetsConnectBtn from "./LetsConnectBtn";
import PortfolioLogo from "./PortfolioLogo";

const Nav = () => {
    return (
        <div className="flex items-start xl:justify-between">
            <Link to="#about"
                  className="text-gray-800 duration-300 ease-in-out rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 opacity-50 hover:opacity-100">About
                Me</Link>
            <Link to="#skillsid"
                  className="text-gray-800 duration-300 ease-in-out rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 opacity-50 hover:opacity-100">Skills
                & Experience</Link>
            <Link to="#works"
                  className="text-gray-800 duration-300 ease-in-out rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 opacity-50 hover:opacity-100">Works</Link>
            <Link to="#articles"
                  className="text-gray-800 duration-300 ease-in-out rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 opacity-50 hover:opacity-100">Articles</Link>
            <LetsConnectBtn/>
        </div>
    )
}

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = ()=>{
        setTimeout(()=>{
            setIsOpen(!isOpen);
        },50)
    }

    return (
            <header className="bg-white px-4 lg:px-6 py-4 shadow-2xl items-center mx-auto max-w-screen-x z-50">
                <div className="hidden md:flex justify-between ">
                    <PortfolioLogo/>
                    <Nav/>
                </div>
                <div className="md:hidden fle justify-between flex-wrap">
                    <div className="flex justify-between">
                        {
                            !isOpen && (<div>
                                <PortfolioLogo/>
                            </div>)
                        }
                        <div  onClick={toggleNavbar}>
                            {isOpen ? <Link to="#"><X/></Link> : <Link to="#"><Menu/></Link>}
                        </div>
                        {isOpen && (
                            <div className="flex flex-col items-center basis-full">
                                <Link to="#about" className="opacity-50 hover:opacity-100 duration-300" onClick={toggleNavbar}>About Me</Link>
                                <Link to="#skills" className="opacity-50 hover:opacity-100 duration-300" onClick={toggleNavbar}>Skills & Experience</Link>
                                <Link to="#skills" className="opacity-50 hover:opacity-100 duration-300" onClick={toggleNavbar}>Works</Link>
                                <Link to="#skills" className="opacity-50 hover:opacity-100 duration-300" onClick={toggleNavbar}>Articles</Link>
                            </div>

                        )}
                    </div>
                </div>
            </header>
    )
}

export default Header;