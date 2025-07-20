import React from 'react';
import { FaPlaneDeparture } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="w-full bg-white/70 backdrop-blur-md shadow-lg rounded-b-2xl border-b border-blue-100">
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2 group cursor-pointer">
                    <FaPlaneDeparture className="text-3xl text-blue-500 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300" />
                    <span className="text-2xl font-extrabold text-blue-700 tracking-tight group-hover:text-teal-500 transition-colors duration-300">WAYA</span>
                </div>
                <div className="flex items-center gap-8">
                    <Link
                        to="/"
                        className="group relative text-gray-700 font-semibold text-lg px-2 py-1 transition-colors duration-200"
                    >
                        <span className="inline-block transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-600 group-focus:text-blue-600">
                            Home
                        </span>
                        <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full transition-all duration-300 group-hover:w-full group-focus:w-full"></span>
                    </Link>
                    <Link
                        to="/services"
                        className="group relative text-gray-700 font-semibold text-lg px-2 py-1 transition-colors duration-200"
                    >
                        <span className="inline-block transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-600 group-focus:text-blue-600">
                            Services
                        </span>
                        <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full transition-all duration-300 group-hover:w-full group-focus:w-full"></span>
                    </Link>
                    <Link
                        to="/contact"
                        className="group relative text-gray-700 font-semibold text-lg px-2 py-1 transition-colors duration-200"
                    >
                        <span className="inline-block transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-600 group-focus:text-blue-600">
                            Contact
                        </span>
                        <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full transition-all duration-300 group-hover:w-full group-focus:w-full"></span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;