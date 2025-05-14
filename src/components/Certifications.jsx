import React from "react";
import LINKS from '../assets/links';

const certifications = [
    {
        title: "Microsoft - Azure Fundamentals (AZ-900)",
        issuer: "Microsoft",
        date: "June 2023",
        credentialLink: LINKS.AZ900Link,
    },
    {
        title: "IBM - Introduction to DevOps",
        issuer: "IBM",
        date: "November 2022",
        credentialLink: LINKS.IBMDevOpsLink,
    },
];

const Certifications = () => {
    return (
        <section className="pb-16 px-6 text-gray-800" id='certificationsid'>
            <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">
                Certifications
            </h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 ">
                {certifications.map((cert, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
                    >
                        <h3 className="text-2xl font-semibold mb-1">{cert.title}</h3>
                        <p className="text-lg text-gray-600 mb-1">
                            <span className="font-medium">Issuer:</span> {cert.issuer}
                        </p>
                        <p className="text-md text-gray-600 mb-2">
                            <span className="font-medium">Date:</span> {cert.date}
                        </p>
                        <a
                            href={cert.credentialLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 text-md hover:text-gray-600 duration-300 ease-in-out"
                        >
                            View Credential →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
