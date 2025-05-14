import React from 'react'
import Logo from 'url:../assets/icons/Logo.svg';
import {Link} from 'react-scroll';

const PortfolioLogo = () => {
    return (
        <Link to="aboutid" smooth={true} duration={500} offset={-80} className="cursor-pointer">
            <img className="mr-3 h-6 md:h-10" src={Logo} alt="website logo"/>
        </Link>
    )
}
export default PortfolioLogo
