import React from 'react';
import { Link } from 'react-router';

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
import NGINXIcon from 'url:../assets/icons/icons8-nginx.svg';

const services = [
    {
        id: 1,
        title: 'Development of Robust Full-Stack Web Applications',
        description:
            'Complete end-to-end development of full stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js), tailored to the client\'s specific requirements. This includes designing scalable frontend and backend architecture, integrating clean and intuitive UI/UX, building secure and efficient RESTful APIs, and connecting robust databases ensuring a fully functional, responsive, and maintainable application ready for client-side use.',
        techIcons: [
            MongoDBIcon,
            ExpressIcon,
            ReactIcon,
            NodeIcon,
            HTMLIcon,
            CSSIcon,
            JavaScriptIcon,
            TailwindIcon,
            FigmaIcon
        ],
        techLinks: [
            'https://www.mongodb.com/docs/',
            'https://expressjs.com/',
            'https://reactjs.org/',
            'https://nodejs.org/en/docs',
            'https://developer.mozilla.org/en-US/docs/Web/HTML',
            'https://developer.mozilla.org/en-US/docs/Web/CSS',
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            'https://tailwindcss.com/docs',
            'https://www.figma.com/'
        ]
    },
    {
        id: 2,
        title: 'Deployment, Hosting & Server Management',
        description:
            'Reliable deployment and hosting solutions for web applications, tailored for performance, security, and scalability. I handle setup and management of virtualized server environments using Proxmox VE, configure secure Linux servers, and manage hosting using Nginx, Apache, or other stacks. Services include domain configuration, SSL setup, reverse proxy management, and regular server maintenance.',
        techIcons: [LinuxIcon, ProxmoxIcon,NGINXIcon],
        techLinks: [
            'https://Linux.org/pages/download/',
            'https://www.proxmox.com/en/proxmox-ve',
            'https://nginx.org/docs/'
        ]
    }
];

const Services = () => {
    return (
        <section className="pb-16 px-6 bg-white text-gray-800" id='servicesid'>
            <h2 className="font-bold text-center mb-10 text-3xl sm:text-4xl text-[#1465FF]">
                What Can I offer?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {services.map(service => (
                    <div key={service.id} className="rounded-2xl shadow-sm p-6 hover:shadow-md transition">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-blue-600 text-white font-bold text-2xl w-12 h-12 flex items-center justify-center rounded-xl px-5">
                                {service.id}
                            </div>
                            <h3 className="text-2xl font-semibold">{service.title}</h3>
                        </div>

                        <h4 className="font-semibold text-gray-700 mb-2 text-xl ">Service Description:</h4>
                        <p className="text-lg text-gray-600 mb-4 text-justify">{service.description}</p>

                        <h4 className="font-semibold text-gray-700 mb-2 text-xl">Tech Stack:</h4>
                        <div className="flex gap-4 flex-wrap items-center">
                            {service.techIcons.map((icon, index) => (
                                <Link to={service.techLinks[index]} key={index} className="hover:opacity-50 duration-300 ease-in-out">
                                    <img src={icon} alt="tech-icon" className="w-10 h-10" />
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
