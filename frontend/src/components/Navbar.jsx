import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import image1 from "../assets/image1.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => document.body.classList.remove('overflow-hidden');
    }, [menuOpen]);

    // Portal overlay for mobile menu
    const mobileMenuOverlay = menuOpen ? ReactDOM.createPortal(
        <div className="fixed inset-0 w-screen h-screen bg-white z-[99999] flex flex-col items-center justify-center transition-all duration-300">
            <button
                className="absolute top-6 right-6 text-purple-600 text-3xl p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
            >
                <FaTimes />
            </button>
            <div className="flex flex-col items-center gap-10 mt-8">
                <Link
                    to="/"
                    className="text-purple-700 font-bold text-3xl py-2 w-full text-center hover:bg-purple-50 rounded-xl transition"
                    onClick={() => setMenuOpen(false)}
                >
                    Home
                </Link>
                <Link
                    to="/services"
                    className="text-purple-700 font-bold text-3xl py-2 w-full text-center hover:bg-purple-50 rounded-xl transition"
                    onClick={() => setMenuOpen(false)}
                >
                    Services
                </Link>
                <Link
                    to="/contact"
                    className="text-purple-700 font-bold text-3xl py-2 w-full text-center hover:bg-purple-50 rounded-xl transition"
                    onClick={() => setMenuOpen(false)}
                >
                    Contact
                </Link>
            </div>
        </div>,
        document.body
    ) : null;

    return (
        <nav className="w-full bg-white/70 backdrop-blur-md shadow-lg rounded-b-2xl border-b border-purple-100 z-50 relative">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-1 md:py-2 flex flex-col md:flex-row items-center md:justify-between gap-1 md:gap-0">
                {/* Logo */}
                <div className="flex items-center gap-1 md:gap-2 group cursor-pointer mb-2 md:mb-0">
                    <img src={image1} alt="WAYA Logo" className="h-8 md:h-12 w-auto group-hover:scale-110 transition-transform duration-300" />
                </div>
                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <Link
                        to="/"
                        className="group relative text-purple-700 font-bold text-base md:text-lg px-2 py-2 md:py-1 rounded-xl hover:bg-purple-50 transition-colors duration-200 w-full md:w-auto text-center"
                    >
                        Home
                    </Link>
                    <Link
                        to="/services"
                        className="group relative text-purple-700 font-bold text-base md:text-lg px-2 py-2 md:py-1 rounded-xl hover:bg-purple-50 transition-colors duration-200 w-full md:w-auto text-center"
                    >
                        Services
                    </Link>
                    <Link
                        to="/contact"
                        className="group relative text-purple-700 font-bold text-base md:text-lg px-2 py-2 md:py-1 rounded-xl hover:bg-purple-50 transition-colors duration-200 w-full md:w-auto text-center"
                    >
                        Contact
                    </Link>
                </div>
                {/* Hamburger Icon for Mobile */}
                <button
                    className="md:hidden flex items-center justify-center text-purple-600 text-3xl p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
                    onClick={() => setMenuOpen(true)}
                    aria-label="Open menu"
                >
                    <FaBars />
                </button>
            </div>
            {/* Mobile Fullscreen Overlay Menu via Portal */}
            {mobileMenuOverlay}
        </nav>
    );
};

export default Navbar;
