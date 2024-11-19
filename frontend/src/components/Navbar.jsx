import React from 'react';
import { FiPlusSquare } from 'react-icons/fi';
import { MdLocalGroceryStore } from 'react-icons/md';
import { FaSignInAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-6 bg-white shadow-md">
   
      <Link to="/">
      <h1 className="text-2xl font-bold text-gray-800">
          Nike <span className='text-purple-600'>Store</span>
       </h1>
      </Link>
       
  
      <div className="flex space-x-7 items-center">
     
        <Link to="/signin" className="flex items-center text-gray-700 hover:text-purple-600 transition-all duration-200">
          <FaSignInAlt className="mr-2" />
          <span>Sign In</span>
        </Link>

        <Link to="/signup" className="flex items-center text-gray-700 hover:text-purple-600 transition-all duration-200">
          <FaSignInAlt className="mr-2" />
          <span>Sign Up</span>
        </Link>

        <Link to="createProduct">
          <FiPlusSquare className="text-xl text-gray-700 cursor-pointer hover:text-purple-600 transition-all duration-200" />
        </Link>


        <MdLocalGroceryStore className="text-xl text-gray-700 cursor-pointer hover:text-purple-600 transition-all duration-200" />
      </div>
    </div>
  );
};

export default Navbar;
