import React from 'react';
import heroImg from '../assets/nike.png';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen">

      <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-start px-8 md:px-12 text-left space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">Welcome to Nike Store</h1>
        <p className="text-lg md:text-xl text-gray-700">Discover the latest trends and gear</p>
        <button className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all duration-300">
          Shop Now
        </button>
      </div>

      <div className="w-full md:w-1/2 h-full">
        <img 
          src={heroImg} 
          alt="Nike Hero" 
          className="w-full h-full object-cover" 
        />
      </div>
    </div>
  );
};

export default Hero;
