import React, { useState } from 'react';
import Navbar from '../components/Navbar';

import { Link } from 'react-router-dom';

const Signup = () => {
  // Initializing state for email and password
  const [name,setName]= useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('')
 
  // Submit handler to handle form submission
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Here you can call your API for authentication
  };

  return (
    <div>
    <Navbar/>

    <div className="flex justify-center items-center h-screen">
      <form onSubmit={submitHandler} className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sign up</h2>

       
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-600">Name</label>
          <input
            type="text"
             placeholder="Enter your name"
            value={name}
             onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md mt-1"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600">Email</label>
          <input
            type="email"
             placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
           
            className="w-full p-3 border border-gray-300 rounded-md mt-1"
            required
          />
        </div>

       
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-600">Password</label>
          <input
            type="password"
             placeholder="Enter your password"
            value={password}
             onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md mt-1"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-600">confirmPassword</label>
          <input
            type="confirmPassword"
             placeholder="confirm your password"
            value={password}
             onChange={(e) => setConfirmPassword(e.target.value)}
           
            className="w-full p-3 border border-gray-300 rounded-md mt-1"
            required
          />
        </div>

       
        <button
          type="submit"
          className="w-full p-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none"
        >
          Sign In
        </button>
        <div className="mt-4 text-center">
            <p>
              Already have an account?{' '}
              <Link to="/sign" className="text-purple-600 hover:text-purple-700 font-semibold">
              sign in here
              </Link>
            </p>
          </div>

      </form>
    </div>
    </div>
  );
};

export default Signup;
