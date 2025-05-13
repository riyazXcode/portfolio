import React from 'react';
import {Link} from 'react-router'
import MongoDBIcon from 'url:../assets/icons/icons8-mongodb.svg';
import ExpressIcon from 'url:../assets/icons/icons8-express-js.svg';
import ReactIcon from 'url:../assets/icons/icons8-react.svg';
import NodeIcon from 'url:../assets/icons/icons8-nodejs.svg';
import JavaScriptIcon from 'url:../assets/icons/icons8-javascript.svg';
import JavaIcon from 'url:../assets/icons/icons8-java.svg';
import HTMLIcon from 'url:../assets/icons/icons8-html-5.svg';
import CSSIcon from 'url:../assets/icons/icons8-css.svg';
import TailwindIcon from 'url:../assets/icons/icons8-tailwindcss.svg';
import FigmaIcon from 'url:../assets/icons/icons8-figma.svg';
import TensorflowIcon from 'url:../assets/icons/icons8-tensorflow.svg';
import GitIcon from 'url:../assets/icons/icons8-git.svg';
import ProxmoxIcon from 'url:../assets/icons/icons8-proxmox.svg';

const techStack = [
    { name: 'MongoDB', img: MongoDBIcon },
    { name: 'Express.js', img: ExpressIcon },
    { name: 'React.js', img: ReactIcon },
    { name: 'Node.js', img: NodeIcon },
    { name: 'JavaScript', img: JavaScriptIcon },
    { name: 'Java', img: JavaIcon },
    { name: 'HTML', img: HTMLIcon },
    { name: 'CSS', img: CSSIcon },
    { name: 'Tailwind.css', img: TailwindIcon },
    { name: 'Figma', img: FigmaIcon },
    { name: 'Tensorflow.js', img: TensorflowIcon },
    { name: 'Git', img: GitIcon },
    { name: 'Proxmox', img: ProxmoxIcon },
];

const Skills = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 text-center py-16">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1465FF] mb-4">Skills & Experience</h1>
            <h2 className="text-xl sm:text-2xl font-medium mb-6">Turning ideas into scalable, full-stack web solutions.</h2>
            <p className="text-gray-700 text-md sm:text-lg max-w-3xl mx-auto mb-2 min-w-fit">
                As a full-stack web developer, I specialize in crafting intuitive user interfaces with React, building scalable backends with Node.js, and ensuring seamless performance with MongoDB. My toolkit extends beyond code; with Proxmox VE and NGINX in my arsenal, I bridge the gap between development and deployment, making real-world applications come to life.
            </p>
            <p className="text-gray-700 text-md sm:text-lg max-w-3xl mx-auto mb-2 min-w-fit">
                What fuels me isn't just the tech stack — it's the challenge of solving complex problems through thoughtful, elegant solutions. I’m passionate about optimizing workflows, refining APIs, and designing user experiences that are as intuitive as they are impactful. Each project is an opportunity to turn chaos into clarity, whether it’s by making an app faster, smarter, or just easier to use.
            </p>
            <p  className="text-gray-700 text-md sm:text-lg max-w-3xl mx-auto mb-2 min-w-fit">
                But beyond the code, what drives me most is the joy of creating. Whether I’m experimenting with a new tool, explaining tech in simple terms, or just tackling a tough bug, I’m always learning and growing. Semicolons? Optional. But a good cup of coffee? Absolutely non-negotiable.
            </p>
            <p className="text-gray-700 mt-2 text-md sm:text-lg">
                Visit my <a href="#" className="text-orange-500 font-medium hover:underline">LinkedIn</a> Profile for more details.
            </p>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5 mt-12 justify-items-center">
                {techStack.map((tech, index) => (
                    <Link to="#" key={index} className="hover:opacity-50 duration-300 ease-in-out">
                        <div key={index} className="flex flex-col items-center">
                            <img src={tech.img} alt={tech.name}
                                 className="h-16 sm:h-20 grayscale hover:grayscale-0 transition duration-300"/>
                            <span className="mt-2 text-sm font-medium text-gray-500 ">{tech.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Skills;
