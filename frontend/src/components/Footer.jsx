import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaPhoneAlt, FaArrowUp } from 'react-icons/fa';

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = () => {
    return (
        <footer className="relative bg-neutral-900 text-neutral-100 pt-0 pb-0 mt-16 overflow-hidden">
            <div className="absolute top-0 left-0 w-full -translate-y-1 z-10 pointer-events-none">
                <svg viewBox="0 0 1440 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16 md:h-24">
                    <path fill="url(#footerwave)" d="M0,60 C360,120 1080,0 1440,60 L1440,0 L0,0 Z" />
                    <defs>
                        <linearGradient id="footerwave" x1="0" x2="1440" y1="0" y2="0" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#38bdf8" />
                            <stop offset="0.5" stopColor="#6366f1" />
                            <stop offset="1" stopColor="#06b6d4" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="w-full h-2 bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-400 mb-10 animate-footer-shimmer bg-[length:200%_100%] bg-left bg-no-repeat" />
            <style>{`
        @keyframes footer-shimmer {
          0% { background-position: left; }
          100% { background-position: right; }
        }
        .animate-footer-shimmer {
          animation: footer-shimmer 4s linear infinite alternate;
        }
      `}</style>
            <div className="relative z-20 max-w-7xl mx-auto px-2 sm:px-8">
                <div className="glass-footer-card rounded-3xl shadow-2xl border-2 border-sky-400/30 bg-white/10 backdrop-blur-md px-4 sm:px-8 py-10 md:py-14 mb-4 md:mb-8 mt-8 md:mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
                        {/* About */}
                        <div>
                            <h2 className="text-2xl font-extrabold mb-4 tracking-wide text-sky-300 drop-shadow">WAYA</h2>
                            <p className="text-neutral-200 mb-7 leading-relaxed text-base">
                                WAYA was built with a passion for making travel simple, exciting, and accessible for everyone. From beautiful stays and local food to smooth transportation and complete itineraries — we plan everything based on your needs. Travel your way — only with WAYA.
                            </p>
                            <div className="flex gap-4 mt-4">
                                <a href="https://www.facebook.com/people/Waya/61553188704146/?mibextid=LQQJ4d" aria-label="Facebook" className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-blue-500 shadow-lg transition-all duration-200 text-2xl hover:scale-110 hover:rotate-[-8deg] hover:text-white"><FaFacebookF /></a>
                                <a href="https://x.com/explore_WAYA?s=21&t=Mi737I3DGJlD5DMCySTM_A" aria-label="Twitter" className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-sky-400 shadow-lg transition-all duration-200 text-2xl hover:scale-110 hover:rotate-[-8deg] hover:text-white"><FaTwitter /></a>
                                <a href="https://www.instagram.com/explore_WAYA/?igsh=MWJla3I0b3Q4Z3lxOA%3D%3D&utm_source=qr#" aria-label="Instagram" className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-pink-500 shadow-lg transition-all duration-200 text-2xl hover:scale-110 hover:rotate-[-8deg] hover:text-white"><FaInstagram /></a>
                                <a href="https://api.whatsapp.com/send?phone=917619619602&text=%20Hello%20WAYA" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-green-500 shadow-lg transition-all duration-200 text-2xl hover:scale-110 hover:rotate-[-8deg] hover:text-white"><FaWhatsapp /></a>
                                <a href="tel:+917619619602" aria-label="Call" className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-orange-500 shadow-lg transition-all duration-200 text-2xl hover:scale-110 hover:rotate-[-8deg] hover:text-white"><FaPhoneAlt /></a>
                            </div>
                        </div>
                        {/* Useful Links */}
                        <div>
                            <h3 className="text-lg font-bold mb-5 tracking-wide text-sky-200">Useful Links</h3>
                            <ul className="space-y-3">
                                <li><a href="/" className="hover:text-sky-400 transition font-medium">Home</a></li>
                                <li><a href="/services" className="hover:text-sky-400 transition font-medium">Services</a></li>
                                <li><a href="/contact" className="hover:text-sky-400 transition font-medium">Contact Us</a></li>
                            </ul>
                        </div>
                        {/* We Organize */}
                        <div>
                            <h3 className="text-lg font-bold mb-5 tracking-wide text-sky-200">We Organize</h3>
                            <ul className="space-y-3 text-neutral-200">
                                <li>Stay</li>
                                <li>Delicious Food</li>
                                <li>Two-Way Transportation</li>
                                <li>Rental Vehicles</li>
                                <li>Complete Travel Itinerary</li>
                            </ul>
                        </div>
                        {/* Reach Us */}
                        <div>
                            <h3 className="text-lg font-bold mb-5 tracking-wide text-sky-200">Reach Us</h3>
                            <div className="bg-white/10 border border-sky-400/20 rounded-2xl p-5 space-y-3 backdrop-blur-sm">
                                <div><span className="font-semibold text-neutral-100">Area we cover:</span> <span className="text-neutral-200">All over India</span></div>
                                <div><span className="font-semibold text-neutral-100">Phone:</span> <a href="tel:+917619619602" className="hover:text-orange-400 transition">+91-7619619602</a></div>
                                <div><span className="font-semibold text-neutral-100">Email:</span> <a href="mailto:explorewaya@gmail.com" className="hover:text-sky-400 transition">explorewaya@gmail.com</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Scroll to Top Button */}
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 shadow-xl flex items-center justify-center text-white text-2xl hover:scale-110 hover:shadow-2xl transition-all animate-bounce"
                    aria-label="Scroll to top"
                >
                    <FaArrowUp />
                </button>
                <div className="border-t border-neutral-800 pt-6 pb-2 text-center text-neutral-300 text-sm mt-4">
                    © {new Date().getFullYear()} WAYA. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer; 