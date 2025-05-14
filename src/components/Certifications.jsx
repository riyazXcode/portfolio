import React from "react";

const certifications = [
    {
        title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
        issuer: "Microsoft",
        date: "Oct 2024",
        credentialLink: "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/",
    },
    {
        title: "Full Stack Web Development",
        issuer: "freeCodeCamp",
        date: "Jul 2024",
        credentialLink: "https://www.freecodecamp.org/certification/",
    },
    {
        title: "Responsive Web Design",
        issuer: "freeCodeCamp",
        date: "May 2024",
        credentialLink: "https://www.freecodecamp.org/certification/",
    },
    {
        title: "Linux Server Management Essentials",
        issuer: "Coursera",
        date: "Aug 2023",
        credentialLink: "https://www.coursera.org/",
    },
];

const Certifications = () => {
    return (
        <section className="pb-16 px-6 bg-white text-gray-800">
            <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">
                Certifications
            </h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
                    >
                        <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
                        <p className="text-sm text-gray-600 mb-1">
                            <span className="font-medium">Issuer:</span> {cert.issuer}
                        </p>
                        <p className="text-sm text-gray-600 mb-2">
                            <span className="font-medium">Date:</span> {cert.date}
                        </p>
                        <a
                            href={cert.credentialLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 text-sm hover:underline"
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
