import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="w-full text-center text-sm">
                All rights reserved © {new Date().getFullYear()}{' '}
                <span
                    className="text-[#F4A949]"
                >riyazkhan.dev.skylancers.in
                </span>
            </div>
        </footer>
    );
};

export default Footer;
