import React, { useState } from 'react';
import { FiPlusSquare } from 'react-icons/fi';
import { MdLocalGroceryStore } from 'react-icons/md';
import { FaSignInAlt, FaSignOutAlt, FaUserPlus, FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { MdArrowDropDown } from "react-icons/md";
import { logout } from '../slices/authSlice';

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();
  

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap()
      dispatch(logout());
      navigate('/');
      
    } catch (err) {
      console.log(err)  
    }
  }

  

  // State to handle dropdown visibility
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  // Handle sign-out
  const signOutHandler = () => {
    // Dispatch logout action here (if implemented)
    // Example: dispatch(logout());
    setDropdownOpen(false); // Close dropdown after sign out
  };

  return (
    <div className="flex justify-between items-center p-3 bg-white shadow-md">
      <Link to="/">
        <h1 className="text-2xl font-bold text-gray-800">
          Nike <span className='text-purple-600'>Store</span>
        </h1>
      </Link>

      <div className="flex space-x-7 items-center">
        {/* Conditionally render based on userInfo */}
        {userInfo ? (
          // Show this if user is logged in
          <div className="relative flex items-center space-x-2">
            <FaUserCircle className="text-gray-700 text-xl cursor-pointer" />
            <span 
              className="text-gray-700 cursor-pointer" 
              onClick={toggleDropdown}
            >
              {userInfo.name}
            </span>
            <MdArrowDropDown 
              className="text-gray-700 cursor-pointer"
              onClick={toggleDropdown}
            />

            {/* Dropdown menu */}
            {dropdownOpen && (
              <div className="absolute left-0 mt-36 w-48 bg-white shadow-lg rounded-md border border-gray-200 z-10">
                <Link 
                  to="/profile" 
                  className="block px-4 py-2 text-gray-700 hover:bg-purple-600 hover:text-white"
                >
                  Profile
                </Link>
                <button
                  onClick={logoutHandler}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-600 hover:text-white"
                >
                  <FaSignOutAlt className="mr-2 inline" />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          // Show this if user is not logged in
          <>
            <Link

              to="/signin"
              className="flex items-center text-gray-700 hover:text-purple-600 transition-all duration-200"
            >
              <FaSignInAlt className="mr-2" />
              <span>Sign In</span>
            </Link>

            <Link
              to="/signup"
              className="flex items-center text-gray-700 hover:text-purple-600 transition-all duration-200"
            >
              <FaUserPlus className="mr-2" />
              <span>Sign Up</span>
            </Link>
          </>
        )}

        <Link to="/createProduct">
          <FiPlusSquare className="text-xl text-gray-700 cursor-pointer hover:text-purple-600 transition-all duration-200" />
        </Link>

        <MdLocalGroceryStore className="text-xl text-gray-700 cursor-pointer hover:text-purple-600 transition-all duration-200" />
      </div>
    </div>
  );
};

export default Navbar;
