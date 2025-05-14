import React, {useState, useEffect} from 'react';
import {Link} from "react-router";
import {Menu, X} from "lucide-react";
import LetsConnectBtn from "./LetsConnectBtn";
import PortfolioLogo from "./PortfolioLogo";

const Nav = () => {
    return (
        <div className="flex items-start xl:justify-between">
            <Link to="#skillsid"
                  className="text-gray-800 duration-300 ease-in-out rounded-lg text-lg px-2 lg:px-8 py-2 lg:py-2.5 mr-2 opacity-50 hover:opacity-100">Skills</Link>
            <Link to="#Services"
                  className="text-gray-800 duration-300 ease-in-out rounded-lg text-lg px-2 lg:px-8 py-2 lg:py-2.5 mr-2 opacity-50 hover:opacity-100">Services</Link>
            <Link to="#Projects"
                  className="text-gray-800 duration-300 ease-in-out rounded-lg text-lg px-2 lg:px-8 py-2 lg:py-2.5 mr-2 opacity-50 hover:opacity-100">Projects</Link>
            <Link to="#articles"
                  className="text-gray-800 duration-300 ease-in-out rounded-lg text-lg px-2 lg:px-8 py-2 lg:py-2.5 mr-2 opacity-50 hover:opacity-100">Contributions</Link>
            <Link to="#articles"
                  className="text-gray-800 duration-300 ease-in-out rounded-lg text-lg px-2 lg:px-8 py-2 lg:py-2.5 mr-2 opacity-50 hover:opacity-100">Certifications</Link>
            <LetsConnectBtn/>
        </div>
    )
}

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleNavbar = ()=>{
        setTimeout(()=>{
            setIsOpen(!isOpen);
        },50)
    }
    useEffect(() => {
        const controlHeader = () => {
            if (typeof window !== "undefined") {
                if (window.scrollY > lastScrollY) {
                    setShowHeader(false);
                } else {
                    setShowHeader(true);
                }
                setLastScrollY(window.scrollY);
            }
        };

        window.addEventListener("scroll", controlHeader);
        return () => window.removeEventListener("scroll", controlHeader);
    }, [lastScrollY]);

    return (
            <header className={`bg-white px-4 lg:px-6 py-4 fixed top-0 w-full z-50 transition-transform duration-400 ${
                showHeader ? "translate-y-0 shadow-xl " : "-translate-y-full shadow-none"
            }`}>
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
                                <Link to="#skills" className="opacity-50 hover:opacity-100 duration-300" onClick={toggleNavbar}>Skills</Link>
                                <Link to="#skills" className="opacity-50 hover:opacity-100 duration-300" onClick={toggleNavbar}>Services</Link>
                                <Link to="#skills" className="opacity-50 hover:opacity-100 duration-300" onClick={toggleNavbar}>Projects</Link>
                                <Link to="#skills" className="opacity-50 hover:opacity-100 duration-300" onClick={toggleNavbar}>Contributions</Link>
                                <Link to="#skills" className="opacity-50 hover:opacity-100 duration-300" onClick={toggleNavbar}>Certifications</Link>
                            </div>

                        )}
                    </div>
                </div>
            </header>
    )
}

export default Header;