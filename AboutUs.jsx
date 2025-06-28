import React from 'react';

function AboutUs() {
  return (
    <div className="w-full">

      <div className="bg-[#fff4ec] text-center pt-24 pb-8 px-4">
        <h4 className="text-red-500 text-xl font-bold mb-4">ABOUT US</h4>
        <h1 className="text-4xl md:text-6xl font-extrabold text-green-900 leading-tight mb-4">
          Empowering Communities <br /> to Reduce Hunger & Food Waste
        </h1>
        <p className="max-w-2xl mx-auto text-gray-700 text-lg">
          ShareBite is a social impact platform connecting surplus food to hungry families, on a mission to create a hunger-free world.
        </p>
      </div>

     {/* /*half green*/ }
      <div className="relative w-full">

      
        <div className="bg-[#fff4ec] h-48"></div>

     
        <div className="relative bg-green-900 pt-40 pb-32 text-center text-white">

      
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2">
            <img src="/aboutImg.png" alt="Food Donation" className="w-[350px] rounded-xl shadow-lg" />
          </div>

          <div className="mt-64 flex flex-col items-center text-center"> 

          
            <img src="/icons/earth.png" alt="Earth Icon" className="w-20 h-20 mb-6" /> 

            <h2 className="text-4xl md:text-6xl font-semibold text-white mb-4">We Dream of a World with</h2>
            <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400">No Food Waste</h1>
          </div>

         
          <div className="flex flex-wrap justify-center gap-24 max-w-6xl mx-auto mt-20"> 

          
            <div className="flex flex-col items-center">
              <img src="/icons/meal.png" alt="Meals Icon" className="w-20 h-20 mb-4" />
              <h3 className="text-2xl font-bold">80+ Million</h3>
              <p className="text-md text-center">Meals Wasted Annually in India</p>
            </div>

      
            <div className="flex flex-col items-center">
              <img src="/icons/hunger.png" alt="Hunger Icon" className="w-20 h-20 mb-4" />
              <h3 className="text-2xl font-bold">195 Million</h3>
              <p className="text-md text-center">Undernourished People in India</p>
            </div>


            <div className="flex flex-col items-center">
              <img src="/icons/global.png" alt="Global Icon" className="w-20 h-20 mb-4" />
              <h3 className="text-2xl font-bold">25% of Global Hunger</h3>
              <p className="text-md text-center">Exists Within India's Population</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AboutUs;
