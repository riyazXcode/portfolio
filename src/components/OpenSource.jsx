import React from "react";

const contributions = [
    {
        project: "freeCodeCamp",
        description:
            "Fixed Markdown formatting issues and improved accessibility in React challenges within the curriculum repo.",
        link: "https://github.com/freeCodeCamp/freeCodeCamp",
    },
    {
        project: "First Contributions",
        description:
            "Guided first-time contributors through Git workflow, added entries, and resolved beginner-friendly issues.",
        link: "https://github.com/firstcontributions/first-contributions",
    },
    {
        project: "DevDocs",
        description:
            "Improved search functionality and contributed to layout refactor for better mobile responsiveness.",
        link: "https://github.com/freeCodeCamp/devdocs",
    },
    {
        project: "YourCustomTool",
        description:
            "Open sourced a CLI tool to automate MongoDB backups and restoration for developers using Docker.",
        link: "https://github.com/yourusername/yourcustomtool",
    },
];

const OpenSource = () => {
    return (
        <section className="pb-16 px-6 bg-white text-gray-800">
            <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">
                Open Source Contributions
            </h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {contributions.map((item, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
                    >
                        <h3 className="text-lg font-semibold mb-1">{item.project}</h3>
                        <p className="text-sm text-gray-700 mb-2">{item.description}</p>
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 text-sm hover:underline"
                        >
                            View on GitHub →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OpenSource;
