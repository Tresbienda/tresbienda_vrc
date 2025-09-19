import React from "react";

const Footer: React.FC = () => (
    <footer className="w-full bg-gray-900 text-gray-300 py-6 mt-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <span className="text-sm">&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</span>
            <div className="mt-2 md:mt-0 flex space-x-4">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    GitHub
                </a>
                <a href="https://linkedin.com/al-hafizd-hernanda" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    LinkedIn
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;