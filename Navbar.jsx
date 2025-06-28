import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isMainSlider = location.pathname === '/main';

  return (
    <div className={`flex items-center justify-between px-8 py-4 ${isMainSlider ? ' bg-opacity-70' : 'bg-black'} text-white fixed w-full z-50`}>
      <div className="flex items-center space-x-4">
        <img src="/sharebite-logo.png" alt="Sharebite Logo" className="w-14 h-14" />
        <h1 className="text-3xl font-extrabold text-yellow-400">ShareBite</h1>
      </div>

      <div className="flex items-center space-x-8 text-lg font-medium">
        <button onClick={() => navigate('/main')} className="hover:text-yellow-400">Home</button>
        <button onClick={() => navigate('/main')} className="hover:text-yellow-400">Our Work</button>
        <button className="hover:text-yellow-400">News</button>
        <button className="hover:text-yellow-400">Benefits</button>
        <button onClick={() => navigate('/about')} className="hover:text-yellow-400">AboutUs</button>
        <button
          onClick={() => navigate('/login/donor')}
          className="ml-4 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition"
        >
          Donate Now
        </button>
      </div>
    </div>
  );
}

export default Navbar;

