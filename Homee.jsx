import React from 'react';
import { useNavigate } from 'react-router-dom';

function Homee() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden">
     
      <div
        className="absolute inset-0 bg-center bg-cover blur-sm scale-110"
        style={{ backgroundImage: "url('/bg.png')" }}
      ></div>

   
      <div className="absolute inset-0 bg-black opacity-30"></div>

    
      <div className="relative z-10 flex items-start justify-center pt-48 px-6 text-center">
        <div className="space-y-6 max-w-md">
          <h1 className="text-6xl font-extrabold">Sharebite</h1>
          <p className="text-lg font-medium">Saving Food, Feeding Hope.</p>

          <h2 className="text-4xl font-bold">
            India’s <span className="text-yellow-400">#1</span>
          </h2>
           <h2 className="text-4xl font-bold">Food Sharing</h2>
           <h2 className="text-4xl font-bold">Platform</h2>

          <p className="text-sm text-gray-300 px-2">
            Experience easy food donation & distribution for a hunger-free tomorrow on the Sharebite app
          </p>

         <div className="flex gap-4 justify-center">
  <button
    onClick={() => navigate('/login/donor')}
    className="bg-black border border-white px-4 py-2 rounded-lg font-medium hover:bg-white hover:text-black transition"
  >
    Join as Donor
  </button>
  <button
    onClick={() => navigate('/login/volunteer')}
    className="bg-black border border-white px-4 py-2 rounded-lg font-medium hover:bg-white hover:text-black transition"
  >
    Join as Volunteer
  </button>
</div>

        </div>
      </div>
    </div>
  );
}

export default Homee;




