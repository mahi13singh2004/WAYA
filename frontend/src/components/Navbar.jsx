import React, { useState, useEffect } from 'react';
import { FaPlaneDeparture, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => document.body.classList.remove('overflow-hidden');
    }, [menuOpen]);

    return (
        <nav className="w-full bg-white/70 backdrop-blur-md shadow-lg rounded-b-2xl border-b border-blue-100 z-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2 group cursor-pointer">
                    <FaPlaneDeparture className="text-3xl text-blue-500 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300" />
                    <span className="text-2xl font-extrabold text-blue-700 tracking-tight group-hover:text-teal-500 transition-colors duration-300">WAYA</span>
                </div>
                <div className="hidden md:flex items-center gap-8">
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
                <button
                    className="md:hidden flex items-center justify-center text-blue-600 text-3xl p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            <div
                className={`md:hidden fixed inset-0 w-full h-full z-[100] bg-white transition-all duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
                <div className="flex items-center justify-between px-6 py-4 border-b border-blue-100">
                    <div className="flex items-center gap-2">
                        <FaPlaneDeparture className="text-2xl text-blue-500" />
                        <span className="text-xl font-extrabold text-blue-700 tracking-tight">WAYA</span>
                    </div>
                    <button
                        className="text-blue-600 text-3xl p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <FaTimes />
                    </button>
                </div>
                <div className="flex flex-col items-center justify-center gap-8 mt-12">
                    <Link
                        to="/"
                        className="text-blue-700 font-bold text-2xl py-2 w-full text-center hover:bg-blue-50 rounded-xl transition"
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/services"
                        className="text-blue-700 font-bold text-2xl py-2 w-full text-center hover:bg-blue-50 rounded-xl transition"
                        onClick={() => setMenuOpen(false)}
                    >
                        Services
                    </Link>
                    <Link
                        to="/contact"
                        className="text-blue-700 font-bold text-2xl py-2 w-full text-center hover:bg-blue-50 rounded-xl transition"
                        onClick={() => setMenuOpen(false)}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;