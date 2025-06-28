import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaHandsHelping, 
  FaMapMarkedAlt, 
  FaAppleAlt, 
  FaUtensils, 
  FaChild, 
  FaGlobeAsia, 
  FaChartLine, 
  FaLeaf 
} from "react-icons/fa";

function MainSlider() {
  const navigate = useNavigate();
  const [changingText, setChangingText] = useState('Share: Connecting food donors to those in need.');

  const texts = [
    'Share: Connecting food donors to those in need.',
    'Aware: Spreading awareness to reduce food waste.',
    'Care: Ensuring safe delivery of surplus food.',
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setChangingText(texts[index]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDonateClick = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    navigate(isLoggedIn ? '/donate' : '/login/donor');
  };

  const handleVolunteerClick = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    navigate(isLoggedIn ? '/volunteer' : '/login/volunteer');
  };

  return (
    <div className="relative w-full overflow-hidden">

      <div className="relative h-screen w-full overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-center bg-cover filter blur-sm brightness-75"
          style={{ backgroundImage: "url('/bgslide.png')" }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

        {/* Main Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-6" style={{ marginTop: '-80px' }}>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Together, Let's Fight Hunger
          </h2>
          <p className="text-lg text-gray-200 max-w-xl mb-8">
            Your small help brings food to hungry families. Be a donor or volunteer, make an impact today!
          </p>
          <p className="text-lg font-semibold mb-4">Want to Share Food? Choose one:</p>

          <div className="flex gap-10 mt-4 flex-wrap justify-center">
            <button
              onClick={handleDonateClick}
              className="flex flex-col items-center justify-center bg-yellow-400 text-black rounded-full w-32 h-32 shadow-lg hover:bg-yellow-500 transition"
            >
              <FaHandsHelping size={32} />
              <span className="text-md mt-2 font-semibold">Donate</span>
              <span className="text-xs font-light">your food</span>
            </button>

            <button
              onClick={handleVolunteerClick}
              className="flex flex-col items-center justify-center border-2 border-yellow-400 text-yellow-400 rounded-full w-32 h-32 hover:bg-yellow-100 shadow-lg"
            >
              <FaMapMarkedAlt size={32} />
              <span className="text-md mt-2 font-semibold">Volunteer</span>
              <span className="text-xs font-light text-center">Deliver food</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-cyan-900 text-white py-12 px-6 text-center border-b-2 border-black">
        <h3 className="text-3xl font-bold mb-4">OBJECTIVES</h3>
        <p className="italic max-w-3xl mx-auto text-lg">
          <span className="font-semibold">{changingText}</span>
        </p>
      </div>

  
      <div className="overflow-hidden">
        <div className="animate-marquee whitespace-nowrap text-black py-2 text-sm font-semibold">
          ➤ ShareBite expands its mission! Join us to reduce food waste and deliver meals to hungry families. ➤
        </div>
      </div>

    
      <div className="bg-white text-black py-12 px-6">
        <div className="flex flex-col md:flex-row justify-center gap-10 mt-12">
          <div className="bg-blue-400 text-white rounded-3xl p-8 text-center max-w-sm hover:bg-blue-500 transition cursor-pointer">
            <h4 className="text-2xl font-bold mb-4">WHAT IS SHAREBITE</h4>
            <p className="mb-4">
              ShareBite bridges the gap between surplus food and hunger by connecting food donors with trained volunteers for safe, timely deliveries.
            </p>
            <button className="border border-black px-4 py-2 rounded hover:bg-blue-600">READ MORE</button>
          </div>

          <div className="bg-green-400 text-white rounded-3xl p-8 text-center max-w-sm hover:bg-green-500 transition cursor-pointer">
            <h4 className="text-2xl font-bold mb-4">WHY PREVENT FOOD WASTE</h4>
            <p className="mb-4">
              Millions go hungry while edible food is wasted daily. We ensure that surplus food reaches those in need instead of landfills.
            </p>
            <button className="border border-black px-4 py-2 rounded hover:bg-green-600">READ MORE</button>
          </div>
        </div>
      </div>

    
      <div className="bg-white py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">SURPLUS FOOD SHARING</h2>
        <p className="text-lg mb-12">Coalition of Partners To Prevent Food Waste And Food Loss</p>

        <div className="flex flex-wrap justify-center items-center gap-4 max-w-6xl mx-auto relative">

          <div className="relative flex justify-center items-center">
            <div className="bg-orange-400 text-white rounded-full w-48 h-48 flex flex-col items-center justify-center text-center shadow-lg p-4">
              <FaAppleAlt size={28} className="mb-2" />
              <p className="text-sm font-medium">India produces 10.04% of world's food, second after China.</p>
            </div>
          </div>

          <div className="relative flex justify-center items-center -mt-8">
            <div className="bg-green-500 text-white rounded-full w-48 h-48 flex flex-col items-center justify-center text-center shadow-lg p-4">
              <FaUtensils size={28} className="mb-2" />
              <p className="text-sm font-medium">196 million undernourished people in India, 2nd highest globally.</p>
            </div>
          </div>

          <div className="relative flex justify-center items-center -mt-16">
            <div className="bg-blue-500 text-white rounded-full w-48 h-48 flex flex-col items-center justify-center text-center shadow-lg p-4">
              <FaChild size={28} className="mb-2" />
              <p className="text-sm font-medium">Under 5 children are underweight; 33% are stunted.</p>
            </div>
          </div>

          <div className="relative flex justify-center items-center -mt-8">
            <div className="bg-yellow-400 text-black rounded-full w-48 h-48 flex flex-col items-center justify-center text-center shadow-lg p-4">
              <FaGlobeAsia size={28} className="mb-2" />
              <p className="text-sm font-medium">25% of world’s hungry population resides in India.</p>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="bg-blue-500 text-white rounded-full w-48 h-48 flex flex-col items-center justify-center text-center shadow-lg p-4">
              <FaChartLine size={28} className="mb-2" />
              <p className="text-sm font-medium">India’s ranking impacts South Asia, forming 3/4th of its population.</p>
            </div>
          </div>

          <div className="relative flex justify-center items-center -mt-8">
            <div className="bg-green-500 text-white rounded-full w-48 h-48 flex flex-col items-center justify-center text-center shadow-lg p-4">
              <FaHandsHelping size={28} className="mb-2" />
              <p className="text-sm font-medium">Global Hunger Index: India suffers from serious hunger levels.</p>
            </div>
          </div>

          <div className="relative flex justify-center items-center -mt-16">
            <div className="bg-orange-400 text-white rounded-full w-48 h-48 flex flex-col items-center justify-center text-center shadow-lg p-4">
              <FaLeaf size={28} className="mb-2" />
              <p className="text-sm font-medium">Only united stakeholder action can fight hunger & food waste.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default MainSlider;
