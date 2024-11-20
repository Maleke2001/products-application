import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';

const Signup = () => {
  // Initializing state for email and password
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading, error }] = useRegisterMutation(); // Added error handling

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      try {
        // Send the registration request
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate('/');
      } catch (err) {
        // Check and show detailed error message
        toast.error(err?.data?.message || err?.error || 'Registration failed');
      }
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <form onSubmit={submitHandler} className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-96">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sign up</h2>

          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-600">Name</label>
            <input
              type="text"
              id="name"
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
              id="email"
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
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md mt-1"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-600">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md mt-1"
              required
            />
          </div>

          {isLoading && <h2>Loading...</h2>}

          <button
            type="submit"
            className="w-full p-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none"
          >
            Sign Up
          </button>

          <div className="mt-4 text-center">
            <p>
              Already have an account?{' '}
              <Link to="/sign" className="text-purple-600 hover:text-purple-700 font-semibold">
                Sign in here
              </Link>
            </p>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Signup;
