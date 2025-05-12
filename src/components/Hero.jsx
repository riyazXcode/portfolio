import React from 'react';
import LetsConnectBtn from "./LetsConnectBtn";
import ResumeBtn from "./ResumeBtn";
import GitHubSocialMediaLogo from "url:../assets/socials/github.svg";
import InstagramSocialMediaLogo from "url:../assets/socials/instagram.svg";
import XSocialMediaLogo from "url:../assets/socials/x.svg";
import {Link} from "react-router";

const Photo = new URL('../assets/photo/photo.png', import.meta.url);

const Hero = () => {
    return (
        <div className="flex flex-col max-w-screen-x items-center">
                <div className="flex mt-10 ml-3.5 mr-3.5 ">
                    <div className="flex flex-col ">
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col ml-10 mt-10 pl-3 pr-3 gap-2">
                                <h1 className="text-3xl font-light">Hello There!</h1>
                                <h1 className="text-5xl font-medium flex">I'm &nbsp;<p className="underline text-[#1465FF]">Mohammed Riyaz Khan,</p></h1>
                                <h1 className="text-6xl font-semibold">Full Stack Web Developer &  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DevOps Rookie</h1>
                                <div className="flex mt-10 gap-6">
                                    <LetsConnectBtn/>
                                    <ResumeBtn/>
                                </div>
                            </div>
                            <img className="mr-40 mt-10 h-[15vw] md:h-[25vw] drop-shadow-2xl" src={Photo} alt="photo" ></img>
                        </div>
                        <div className="flex flex-col mt-10 ml-10 mr-40 pl-3 pr-3 text-xl text-[#7F7F7F]">
                            <h1>I cook code for a living and try to make a small impact on
                                trillions of binaries streaming-in today’s digital era.
                            </h1>
                            <h1>Trying different things and implementing them along the way. <b className="text-black">“Jack of All Trades”</b> -
                                Subtle enough to describe about me.</h1>
                        </div>
                    </div>
                </div>
            <div className="flex">
                <div className="flex flex-col justify-center mt-10 gap-2">
                    <h1 className="text-xl text-[#7F7F7F]">Follow me at my Socials</h1>
                    <div className="flex items-center justify-center">
                        <Link to="#" className="hover:opacity-50 duration-300 ease-in-out">
                                <img className="mr-3 h-6 sm:h-10 hover:fill-amber-500 duration-300 ease-in-out"
                                     src={XSocialMediaLogo} alt="github logo"/>

                        </Link>
                        <Link to="#" className="hover:opacity-50 duration-300 ease-in-out">
                            <img className="mr-3 h-6 sm:h-12" src={InstagramSocialMediaLogo} alt="github logo"/>
                        </Link>
                        <Link to="#" className="hover:opacity-50 duration-300 ease-in-out">
                            <img className="h-6 sm:h-10" src={GitHubSocialMediaLogo} alt="github logo"/>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero
