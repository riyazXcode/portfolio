import React from 'react'
import {Link} from 'react-router'
import LetsConnectBtn from "./LetsConnectBtn";
import MongoDBIcon from 'url:../assets/icons/icons8-mongodb.svg';
import ExpressIcon from 'url:../assets/icons/icons8-express-js.svg';
import ReactIcon from 'url:../assets/icons/icons8-react.svg';
import NodeIcon from 'url:../assets/icons/icons8-nodejs.svg';
import JavaScriptIcon from 'url:../assets/icons/icons8-javascript.svg';
import HTMLIcon from 'url:../assets/icons/icons8-html-5.svg';
import CSSIcon from 'url:../assets/icons/icons8-css.svg';
import TailwindIcon from 'url:../assets/icons/icons8-tailwindcss.svg';
import FigmaIcon from 'url:../assets/icons/icons8-figma.svg';
import ProxmoxIcon from 'url:../assets/icons/icons8-proxmox.svg';
import LinuxIcon from 'url:../assets/icons/icons8-linux.svg';



const Services = () => {
    return (
        <section className="pb-16 px-6 bg-white text-gray-800">
            <h2 className="font-bold text-center mb-10 text-3xl sm:text-4xl text-[#1465FF]">
                What can I offer?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <div className="border rounded-2xl shadow-sm p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div
                            className="bg-blue-600 text-white font-bold w-10 h-10 flex items-center justify-center rounded-xl ">
                            1
                        </div>
                        <h3 className="text-lg font-semibold">
                            Development of Robust Full-Stack Web Applications
                        </h3>
                    </div>
                    <h4 className="font-semibold text-gray-700 mb-2">Service Description:</h4>
                    <p className="text-md text-gray-600 mb-4 text-justify">
                        Complete end-to-end development of full stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js), tailored to the client's specific requirements. This includes designing scalable frontend and backend architecture, integrating clean and intuitive UI/UX, building secure and efficient RESTful APIs, and connecting robust databases  ensuring a fully functional, responsive, and maintainable application ready for client-side use.
                    </p>
                    <h4 className="font-semibold text-gray-700 mb-2">Tech Stack:</h4>
                    <div className="flex gap-4 flex-wrap items-center">
                        {[MongoDBIcon, ExpressIcon, ReactIcon, NodeIcon, HTMLIcon, CSSIcon, JavaScriptIcon, TailwindIcon, FigmaIcon].map((icon, index) => (
                            <Link to="#" key={index} className="hover:opacity-50 duration-300 ease-in-out">
                            <img key={index} src={icon} alt="tech-icon" className="w-10 h-10"/>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="border rounded-2xl shadow-sm p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div
                            className="bg-blue-600 text-white font-bold w-10 h-10 flex items-center justify-center rounded-xl ">
                            2
                        </div>
                        <h3 className="text-lg font-semibold">
                            Deployment, Hosting & Server Management
                        </h3>
                    </div>
                    <h4 className="font-semibold text-gray-700 mb-2">Service Description:</h4>
                    <p className="text-md text-gray-600 mb-4 text-justify">
                        Reliable deployment and hosting solutions for web applications, tailored for performance,
                        security, and scalability. I handle setup and management of virtualized server environments
                        using Proxmox VE, configure secure Linux servers, and manage hosting using Nginx, Apache, or
                        other stacks. Services include domain configuration, SSL setup, reverse proxy management, and
                        regular server maintenance.
                    </p>
                    <h4 className="font-semibold text-gray-700 mb-2">Tech Stack:</h4>
                    <div className="flex gap-4 flex-wrap items-center">
                        {[LinuxIcon, ProxmoxIcon].map((icon, index) => (
                            <Link to="#" key={index} className="hover:opacity-50 duration-300 ease-in-out">
                            <img key={index} src={icon} alt="tech-icon" className="w-10 h-10"/>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/*<div className="flex justify-center mt-10">*/}
            {/*    <LetsConnectBtn/>*/}
            {/*</div>*/}
        </section>
    )
}
export default Services
