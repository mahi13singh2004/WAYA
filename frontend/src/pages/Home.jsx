import React, { useState, useEffect } from 'react';
import { FaUsers, FaPlane, FaBed, FaUtensils } from 'react-icons/fa';
import header1 from "../assets/header1.jpg";
import header2 from "../assets/header2.jpg";
import header3 from "../assets/header3.jpg";
import statsBg from '../assets/logo.jpg'; // Replace with your stats background image
import { FaPlaneDeparture } from 'react-icons/fa';
import Footer from '../components/Footer';

const carouselImages = [header1, header2, header3];

const stats = [
  {
    icon: <FaUsers className="text-5xl text-blue-500 mb-4" />,
    value: '500',
    label: '+ Happy Customers',
  },
  {
    icon: <FaPlane className="text-5xl text-blue-500 mb-4" />,
    value: '1000',
    label: '+ Destinations',
  },
  {
    icon: <FaBed className="text-5xl text-blue-500 mb-4" />,
    value: '600',
    label: '+ Accommodations',
  },
  {
    icon: <FaUtensils className="text-5xl text-blue-500 mb-4" />,
    value: '700',
    label: '+ Restaurants',
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [showSplash, setShowSplash] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);
  const [welcomeFadeOut, setWelcomeFadeOut] = useState(false);
  const [homeVisible, setHomeVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const hideSplashTimer = setTimeout(() => {
      setShowSplash(false);
      setShowWelcome(true);
    }, 4000);
    return () => clearTimeout(hideSplashTimer);
  }, []);

  useEffect(() => {
    if (showWelcome) {
      const welcomeFadeTimer = setTimeout(() => setWelcomeFadeOut(true), 1200);
      const showHomeTimer = setTimeout(() => {
        setShowWelcome(false);
        setHomeVisible(true);
      }, 2200);
      return () => {
        clearTimeout(welcomeFadeTimer);
        clearTimeout(showHomeTimer);
      };
    }
  }, [showWelcome]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-blue-900">
      {/* Stats Splash Section */}
      {showSplash && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg bg-blue-200/80">
          <div className="absolute inset-0">
            <img src={statsBg} alt="Stats Background" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-blue-200/90" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 md:divide-x divide-blue-100/40 text-center">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center py-8 px-2 sm:py-10 sm:px-6 animate-splash-stat"
                style={{ animationDelay: `${i * 0.15 + 0.2}s` }}
              >
                {stat.icon}
                <div className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-1 mt-2 drop-shadow">{stat.value}</div>
                <div className="text-base sm:text-lg text-blue-800 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
          <style>{`
            .animate-splash-stat {
              opacity: 0;
              transform: translateY(40px) scale(0.94);
              animation: splashStatIn 1s cubic-bezier(.4,0,.2,1) forwards;
            }
            @keyframes splashStatIn {
              0% { opacity: 0; transform: translateY(40px) scale(0.94);}
              60% { opacity: 1; transform: translateY(-8px) scale(1.04);}
              100% { opacity: 1; transform: translateY(0) scale(1);}
            }
          `}</style>
        </div>
      )}

      {/* Welcome Message Section */}
      {showWelcome && (
        <div className={`fixed inset-0 z-40 flex items-center justify-center bg-blue-100 transition-opacity duration-900 ${welcomeFadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-blue-600 drop-shadow-lg tracking-wider animate-welcome-fade-in text-center">WELCOME TO WAYA</h1>
          <style>{`
            .animate-welcome-fade-in {
              animation: welcomeFadeIn 1.1s cubic-bezier(.4,0,.2,1);
            }
            @keyframes welcomeFadeIn {
              0% { opacity: 0; transform: scale(0.95);}
              100% { opacity: 1; transform: scale(1);}
            }
          `}</style>
        </div>
      )}

      {/* Main Content */}
      <div className={`transition-opacity duration-1000 ${homeVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {/* HERO */}
        <section className="w-full flex flex-col md:flex-row items-center justify-between px-3 sm:px-6 md:px-20 pt-16 sm:pt-20 pb-8 sm:pb-12 bg-gradient-to-br from-white via-blue-50 to-blue-100 text-blue-900 shadow-xl gap-8 md:gap-0">
          <div className="w-full md:w-1/2 flex flex-col items-center text-center sm:items-start sm:text-left justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-3 sm:mb-4 drop-shadow-lg leading-tight">Explore Waya</h1>
            <p className="text-base sm:text-xl md:text-2xl mb-4 sm:mb-6 leading-relaxed font-medium text-blue-800">
              Your dream travel begins here — Handcrafted plans, personalized support & stress-free journeys.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-500 text-white font-semibold px-6 sm:px-7 py-2.5 sm:py-3 rounded-xl shadow-lg hover:bg-blue-600 transition text-base sm:text-lg"
            >
              Book Now
            </a>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0 flex items-center justify-center relative">
            <div className="w-full max-w-xs sm:max-w-lg md:max-w-3xl h-48 sm:h-72 md:h-[400px] rounded-3xl shadow-xl overflow-hidden border-4 border-blue-100/70 bg-white/60 relative">
              {carouselImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Hero ${idx + 1}`}
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-900 ${current === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                  style={{ transitionProperty: 'opacity' }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* FREE TRAVEL PLAN SECTION */}
        <section className="w-full min-h-[520px] flex flex-col lg:flex-row items-center justify-center px-2 sm:px-4 md:px-8 lg:px-28 py-10 sm:py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-inner gap-10 md:gap-0">
          {/* Glowy BG */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-60 sm:w-96 h-40 sm:h-80 bg-gradient-to-br from-blue-200/30 via-blue-100/20 to-transparent rounded-full blur-3xl z-0 pointer-events-none" />
          {/* Centered Card Content */}
          <div className="flex-1 flex flex-col items-center lg:items-center z-10 w-full">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-blue-100 px-4 sm:px-8 md:px-10 py-8 sm:py-10 max-w-2xl w-full flex flex-col items-center">
              <span className="inline-block px-4 sm:px-5 py-1 rounded-full bg-blue-100/70 border border-blue-300 text-blue-700 font-semibold text-sm sm:text-base mb-4 sm:mb-5 shadow text-center tracking-wide">
                Warm Welcome
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-sky-400 to-blue-700 drop-shadow-lg mb-2 tracking-tight text-center">
                Free Travel Plans Within Your Budget
              </h2>
              <span className="block text-base sm:text-lg font-light tracking-normal text-blue-700/80 mb-2 text-center">(T&C Apply*)</span>
              <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-blue-400 to-sky-300 rounded mb-5 sm:mb-7 mx-auto" />
              <p className="mb-4 sm:mb-5 text-base sm:text-lg md:text-xl text-blue-800 font-medium text-center">
                We create <span className="text-blue-600 font-bold">personalized travel plans</span> just for you — designed around your budget, style & dreams.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-5 sm:mb-6 text-blue-800 text-sm sm:text-base font-medium w-full">
                <div className="rounded-lg bg-blue-50/80 px-3 py-2 border-l-4 border-blue-400 shadow-sm text-center">Best Hotels or Hostels</div>
                <div className="rounded-lg bg-blue-50/80 px-3 py-2 border-l-4 border-blue-400 shadow-sm text-center">Local Food Experiences</div>
                <div className="rounded-lg bg-blue-50/80 px-3 py-2 border-l-4 border-blue-400 shadow-sm text-center">Two-way Transportation</div>
                <div className="rounded-lg bg-blue-50/80 px-3 py-2 border-l-4 border-blue-400 shadow-sm text-center">Rental Vehicles</div>
                <div className="rounded-lg bg-blue-50/80 px-3 py-2 border-l-4 border-blue-400 shadow-sm text-center">Custom Itinerary</div>
                <div className="rounded-lg bg-blue-50/80 px-3 py-2 border-l-4 border-blue-400 shadow-sm text-center">Adventure Add-ons</div>
              </div>
              <p className="mb-5 sm:mb-7 text-blue-900 text-center text-sm sm:text-base">
                Pick <span className="text-blue-600 font-semibold">any 3 services</span>, and you'll receive a
                <span className="text-blue-700 font-extrabold underline ml-1">FREE</span> expertly crafted travel plan — no hidden fees, no surprises.<br />
                <span className="text-xs text-blue-400 italic">Available for a limited time.</span>
              </p>
              {/* Centered phone and button inside the card */}
              <div className="flex flex-col items-center justify-center gap-3 sm:gap-5 w-full mt-4 sm:mt-6">
                <span className="inline-flex items-center justify-center w-40 sm:w-44 h-12 sm:h-16 rounded-full border-2 border-blue-300 text-blue-600 text-base sm:text-xl font-bold bg-blue-100/50 shadow-md">
                  +91-7619619602
                </span>
                <a
                  href="/contact"
                  className="inline-block px-6 sm:px-10 py-3 sm:py-4 font-semibold rounded-2xl border-2 border-blue-300 bg-gradient-to-r from-blue-200/70 to-sky-100/70 text-blue-900 shadow-xl text-base sm:text-lg hover:scale-105 hover:bg-blue-200/80 hover:text-blue-800 transition mt-2"
                >
                  Get Your Free Travel Plan
                </a>
              </div>
            </div>
          </div>
          {/* Logo / Visual */}
          <div className="hidden sm:flex flex-1 items-center justify-center mt-10 sm:mt-16 lg:mt-0 z-10 w-full">
            <div className="p-6 sm:p-8 lg:p-14 rounded-[60px] sm:rounded-[120px] bg-white/80 shadow-2xl border-2 border-blue-100 flex flex-col items-center w-40 sm:w-56 md:w-auto">
              <FaPlaneDeparture className="text-5xl sm:text-7xl text-blue-500 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300" />
              <span className="text-3xl sm:text-5xl font-extrabold text-blue-700 tracking-tight group-hover:text-teal-500 transition-colors duration-300">WAYA</span>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="relative py-10 sm:py-16 md:py-20 bg-gradient-to-tr from-white via-blue-50 to-blue-100 px-2 sm:px-4 md:px-8 text-center overflow-hidden">
          <div className="absolute top-[-60px] left-[-100px] w-40 sm:w-96 h-40 sm:h-96 bg-gradient-to-br from-blue-100/40 via-blue-200/40 to-blue-50/30 opacity-30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute right-[-80px] bottom-[-80px] w-32 sm:w-72 h-32 sm:h-72 bg-gradient-to-tr from-blue-200/30 via-blue-100/30 to-white/0 opacity-40 rounded-full blur-2xl pointer-events-none" />
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-blue-700 mb-8 sm:mb-14 drop-shadow-md tracking-tight relative z-10">
            Why ExploreWaya?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 max-w-6xl mx-auto relative z-10">
            <div className="group bg-white/95 rounded-2xl shadow-xl border border-blue-100 px-5 sm:px-7 py-7 sm:py-10 flex flex-col items-center justify-center min-h-[120px] sm:min-h-[170px] transition transform hover:-translate-y-2 hover:shadow-2xl hover:ring-2 hover:ring-blue-200 cursor-pointer">
              <div className="text-lg sm:text-2xl font-bold text-blue-800 mb-1">Tailor-Made Plans</div>
              <div className="text-blue-700 text-base sm:text-lg">We offer tailor-made travel plans matching your budget.</div>
            </div>
            <div className="group bg-white/95 rounded-2xl shadow-xl border border-blue-100 px-5 sm:px-7 py-7 sm:py-10 flex flex-col items-center justify-center min-h-[120px] sm:min-h-[170px] transition transform hover:-translate-y-2 hover:shadow-2xl hover:ring-2 hover:ring-blue-200 cursor-pointer">
              <div className="text-lg sm:text-2xl font-bold text-blue-800 mb-1">We Organize</div>
              <div className="text-blue-700 text-base sm:text-lg">
                Stay, Food, Transportation, Rentals — you choose, we organize.
              </div>
            </div>
            <div className="group bg-white/95 rounded-2xl shadow-xl border border-blue-100 px-5 sm:px-7 py-7 sm:py-10 flex flex-col items-center justify-center min-h-[120px] sm:min-h-[170px] transition transform hover:-translate-y-2 hover:shadow-2xl hover:ring-2 hover:ring-blue-200 cursor-pointer">
              <div className="text-lg sm:text-2xl font-bold text-blue-800 mb-1">FREE Travel Itinerary</div>
              <div className="text-blue-700 text-base sm:text-lg">
                FREE customized travel itinerary with any 3 services you select.
              </div>
            </div>
            <div className="group bg-white/95 rounded-2xl shadow-xl border border-blue-100 px-5 sm:px-7 py-7 sm:py-10 flex flex-col items-center justify-center min-h-[120px] sm:min-h-[170px] transition transform hover:-translate-y-2 hover:shadow-2xl hover:ring-2 hover:ring-blue-200 cursor-pointer">
              <div className="text-lg sm:text-2xl font-bold text-blue-800 mb-1">Reward Program</div>
              <div className="text-blue-700 text-base sm:text-lg">
                Complete 4 trips, get <span className="text-blue-500 font-bold">50% OFF</span> your 5th trip!
                <p className="text-xs mt-2 text-blue-400">(T&C Apply*)</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 sm:py-16 px-3 sm:px-6 text-center bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 text-blue-900 rounded-t-3xl mt-10 sm:mt-20 shadow-md">
          <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">Ready to Explore?</h2>
          <p className="text-base sm:text-lg mb-4 sm:mb-6">Let our journey masters plan the perfect getaway for you.</p>
          <a
            href="/contact"
            className="inline-block px-6 sm:px-10 py-3 sm:py-4 bg-white text-blue-700 font-bold rounded-xl shadow-md hover:bg-blue-50 transition text-base sm:text-lg"
          >
            Contact Us Now
          </a>
        </section>
      </div>

      <Footer/>
    </div>
  );
};

export default Home;
