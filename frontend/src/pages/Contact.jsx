import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import contactImg from '../assets/contact.jpg';

const Contact = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-purple-50 py-6 px-3 sm:px-4 overflow-hidden">
            <div className="w-full max-w-7xl flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl bg-white/80 backdrop-blur-lg mb-6">
                <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                    <img
                        src={contactImg}
                        alt="Contact"
                        className="w-full h-full object-cover min-h-[240px] md:min-h-[100%]"
                    />
                    <div className="absolute inset-0 bg-purple-700/60" />
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white/80 p-4 sm:p-8">
                    <div className="w-full max-w-xl bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
                        <h3 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6 text-center">Get in Touch</h3>
                        <form className="flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full px-4 py-2 rounded-xl border border-gray-200 bg-slate-100/80 text-base focus:ring-2 focus:ring-purple-400 outline-none shadow-sm"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-2 rounded-xl border border-gray-200 bg-slate-100/80 text-base focus:ring-2 focus:ring-purple-400 outline-none shadow-sm"
                            />
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full px-4 py-2 rounded-xl border border-gray-200 bg-slate-100/80 text-base focus:ring-2 focus:ring-purple-400 outline-none shadow-sm"
                            />
                            <textarea
                                placeholder="Message"
                                rows={4}
                                className="w-full px-4 py-2 rounded-xl border border-gray-200 bg-slate-100/80 text-base focus:ring-2 focus:ring-purple-400 outline-none shadow-sm"
                            />
                            <button
                                type="submit"
                                className="mt-3 bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 rounded-xl shadow-lg text-lg transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-6xl flex flex-wrap gap-4 sm:gap-6 justify-center items-stretch px-2">
                <div className="flex-1 min-w-[260px] max-w-[360px] bg-white rounded-2xl shadow p-4 flex items-center gap-4 hover:scale-105 hover:shadow-purple-400 transition duration-300 cursor-pointer">
                    <div className="bg-purple-100 p-5 sm:p-6 rounded-xl flex items-center justify-center">
                        <FaMapMarkerAlt className="text-2xl text-purple-600" />
                    </div>
                    <div>
                        <div className="font-bold text-xl text-slate-800">Our Services</div>
                        <div className="text-gray-500 text-base sm:text-lg">All Over India</div>
                    </div>
                </div>

                <div className="flex-1 min-w-[260px] max-w-[360px] bg-white rounded-2xl shadow p-4 flex items-center gap-4 hover:scale-105 hover:shadow-cyan-400 transition duration-300 cursor-pointer">
                    <div className="bg-cyan-100 p-4 sm:p-5 rounded-xl flex items-center justify-center">
                        <FaEnvelope className="text-2xl text-cyan-600" />
                    </div>
                    <div>
                        <div className="font-bold text-xl text-slate-800">Mail Us 24/7</div>
                        <div className="text-gray-500 text-base sm:text-lg">explorewaya@gmail.com</div>
                    </div>
                </div>
                <div className="flex-1 min-w-[260px] max-w-[360px] bg-white rounded-2xl shadow p-4 flex items-center gap-4 hover:scale-105 hover:shadow-orange-400 transition duration-300 cursor-pointer">
                    <div className="bg-orange-100 p-4 sm:p-5 rounded-xl flex items-center justify-center">
                        <FaPhoneAlt className="text-2xl text-orange-500" />
                    </div>
                    <div>
                        <div className="font-bold text-xl text-slate-800">Contact Us</div>
                        <div className="text-gray-500 text-base sm:text-lg">+91-7619619602</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
