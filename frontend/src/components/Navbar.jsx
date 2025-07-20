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
                    <span className="text-2xl font-extrabold text-blue-700 tracking-tight group-hover:text-teal-500 transition-colors duration-300">
                        WAYA
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <Link
                        to="/"
                        className="group relative text-blue-700 font-bold text-lg px-2 py-1 transition-colors duration-200"
                    >
                        Home
                    </Link>
                    <Link
                        to="/services"
                        className="group relative text-blue-700 font-bold text-lg px-2 py-1 transition-colors duration-200"
                    >
                        Services
                    </Link>
                    <Link
                        to="/contact"
                        className="group relative text-blue-700 font-bold text-lg px-2 py-1 transition-colors duration-200"
                    >
                        Contact
                    </Link>
                </div>

                <button
                    className="md:hidden flex items-center justify-center text-blue-600 text-3xl p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                    onClick={() => setMenuOpen(true)}
                    aria-label="Open menu"
                >
                    <FaBars />
                </button>
            </div>

            {menuOpen && (
                <div className="fixed inset-0 z-[9999] bg-white transition-opacity duration-300 flex flex-col items-center justify-center">
                    <button
                        className="absolute top-6 right-6 text-blue-600 text-3xl p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <FaTimes />
                    </button>

                    <div className="flex flex-col items-center gap-10 mt-8">
                        <Link
                            to="/"
                            className="text-blue-700 font-bold text-3xl py-2 w-full text-center hover:bg-blue-50 rounded-xl transition"
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/services"
                            className="text-blue-700 font-bold text-3xl py-2 w-full text-center hover:bg-blue-50 rounded-xl transition"
                            onClick={() => setMenuOpen(false)}
                        >
                            Services
                        </Link>
                        <Link
                            to="/contact"
                            className="text-blue-700 font-bold text-3xl py-2 w-full text-center hover:bg-blue-50 rounded-xl transition"
                            onClick={() => setMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
