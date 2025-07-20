import React from 'react';
import { useNavigate } from 'react-router-dom';
import hotelImg from '../assets/hotel.jpg';
import foodImg from '../assets/food.jpg';
import airplaneImg from '../assets/airplane.jpg';
import rentImg from '../assets/rent.jpg';
import itinaryImg from '../assets/itinary.jpg';
import rewardImg from '../assets/reward.jpg';

const serviceData = [
  {
    title: 'Stay Arrangements',
    desc: 'Stay in the most premium & affordable properties.',
    img: hotelImg,
  },
  {
    title: 'Food Planning',
    desc: 'Custom meal preferences and local cuisine options.',
    img: foodImg,
  },
  {
    title: 'Two-Way Transportation',
    desc: 'Doorstep pickup + drop in comfort.',
    img: airplaneImg,
  },
  {
    title: 'Rental Vehicles',
    desc: 'Bike, cab & e-vehicle rentals available 24/7.',
    img: rentImg,
  },
  {
    title: 'Travel Itinerary',
    desc: 'Expert handcrafted plans to make every second count.',
    img: itinaryImg,
  },
  {
    title: 'Reward Program',
    desc: 'Earn points, win trips & unlock elite benefits.',
    img: rewardImg,
  },
];

const Services = () => {
  const navigate = useNavigate(); // for navigation on click

  // Handler for card click and "Book Now" button
  const handleGoToContact = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-100 py-16 px-6 flex flex-col items-center text-center">
      <style>{`
        .flip-container {
          perspective: 1500px;
        }
        .flip-card {
          transition: transform 0.9s ease;
          transform-style: preserve-3d;
          position: relative;
          cursor: pointer;
        }
        .flip-card-inner {
          position: relative;
          transform-style: preserve-3d;
          width: 100%;
          height: 100%;
        }
        .flip-container:hover .flip-card,
        .flip-container:focus-within .flip-card {
          transform: rotateY(180deg);
        }
        .face {
          backface-visibility: hidden;
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 1rem;
          overflow: hidden;
        }
        .front {
          z-index: 2;
        }
        .back {
          transform: rotateY(180deg);
          background: rgba(255, 255, 255, 0.78);
          backdrop-filter: blur(15px);
          padding: 2rem;
          box-shadow: inset 0 0 10px rgba(255,255,255,0.3);
        }
        .glow {
          box-shadow: 0 0 25px rgba(14,165,233,0.32), 0 0 40px rgba(99,102,241,0.18);
        }
      `}</style>

      <h2 className="text-5xl font-black text-blue-800 mb-4 drop-shadow-md">
        Our Services
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mb-12">
        Innovative solutions tailored for seamless journeys and unforgettable experiences.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full mb-16">
        {serviceData.map((service, i) => (
          <div
            key={i}
            className="flip-container focus-within:outline-none"
            tabIndex={0}
            style={{ height: 370 }}
            onClick={handleGoToContact}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') handleGoToContact();
            }}
            role="button"
            aria-label={`Learn more about ${service.title} and book now`}
          >
            <div className="flip-card w-full h-full rounded-2xl shadow-xl glow">
              <div className="flip-card-inner w-full h-full">
                <div className="face front bg-white flex flex-col justify-center items-center p-6">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-48 h-48 object-cover rounded-xl shadow-lg mb-4 transition-transform duration-300"
                  />
                  <h3 className="text-2xl font-bold text-blue-700">{service.title}</h3>
                </div>
                <div className="face back text-center text-blue-900 px-6 py-8">
                  <h3 className="text-4xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-700 text-xl mb-6">{service.desc}</p>
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      handleGoToContact();
                    }}
                    className="mt-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg text-lg font-bold shadow-xl hover:scale-105 transition"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleGoToContact}
        className="px-10 py-4 bg-gradient-to-r from-orange-500 to-yellow-400 text-white text-2xl rounded-lg shadow-2xl font-bold hover:scale-105 hover:brightness-105 transition"
      >
        Book Now
      </button>
    </div>
  );
};

export default Services;
