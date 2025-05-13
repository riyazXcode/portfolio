import React from 'react';
import LetsConnectBtn from "./LetsConnectBtn";
import ResumeBtn from "./ResumeBtn";
import GitHubSocialMediaLogo from "url:../assets/socials/github.svg";
import InstagramSocialMediaLogo from "url:../assets/socials/instagram.svg";
import XSocialMediaLogo from "url:../assets/socials/x.svg";
import { Link } from "react-router";

const Photo = new URL('../assets/photo/photo.png', import.meta.url);

const Hero = () => {
    return (
        <div className="flex flex-col items-center w-full px-4">
            <div className="flex flex-col lg:flex-row justify-between  items-center w-full max-w-7xl mt-25">
                <div className="flex flex-col gap-3 text-center lg:text-left lg:w-1/2">
                    <h1 className="text-2xl font-light">Hello There!</h1>
                    <h1 className="text-4xl sm:text-4xl font-medium">I'm <span className="underline text-[#1465FF]">Mohammed Riyaz Khan,</span></h1>
                    <h1 className="text-4xl sm:text-5xl font-semibold">Full Stack Web Developer & DevOps Rookie</h1>

                    <div className="flex justify-center lg:justify-start mt-5 gap-4">
                        <LetsConnectBtn />
                        <ResumeBtn />
                    </div>
                </div>

                <div className="mt-10 lg:mt-0">
                    <img
                        className="mx-auto lg:mr-20 h-48 sm:h-60 lg:h-95 drop-shadow-2xl rounded-full"
                        src={Photo}
                        alt="photo"
                    />
                </div>
            </div>

            <div className="mt-16 text-[#7F7F7F] text-lg sm:text-xl w-full flex-col text-center">
                <p>I cook code for a living and try to make a small impact on trillions of binaries streaming-in today’s digital era.</p>
                <p className="mt-2">
                    Trying different things and implementing them along the way.
                    <b className="text-black"> “Jack of All Trades”</b> - Subtle enough to describe about me.
                </p>
            </div>

            <div className="mt-10 flex flex-col items-center gap-3">
                <h1 className="text-lg sm:text-xl text-[#7F7F7F]">Follow me at my Socials</h1>
                <div className="flex gap-6 items-center">
                    <Link to="#" className="hover:opacity-50 duration-300">
                        <img className="h-6 sm:h-8" src={XSocialMediaLogo} alt="X logo" />
                    </Link>
                    <Link to="#" className="hover:opacity-50 duration-300">
                        <img className="h-6 sm:h-10" src={InstagramSocialMediaLogo} alt="Instagram logo" />
                    </Link>
                    <Link to="#" className="hover:opacity-50 duration-300">
                        <img className="h-6 sm:h-8" src={GitHubSocialMediaLogo} alt="GitHub logo" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
