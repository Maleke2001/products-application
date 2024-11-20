import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import {useDispatch, useSelector} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';

const Signin = () => {
  // Initializing state for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const navigate =useNavigate();
  const dispatch = useDispatch();

 
  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/dashboard');
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }))
      if(res) {
        toast.success("Logged in")
      }
      navigate('/');
      // Come came here
    } catch (err) {

    }
  };

  
  return (
    <div>
    <Navbar/>

    <div className="flex justify-center items-center h-screen">
      <form onSubmit={submitHandler} className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sign In</h2>

       
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
        {isLoading && <h2>Loading...</h2> }
      
        <button
          type="submit"
          className="w-full p-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none"
        >
          Sign In
        </button>
        <div className="mt-4 text-center">
            <p>
              New user?{' '}
              <Link to="/signup" className="text-purple-600 hover:text-purple-700 font-semibold">
                Sign up here
              </Link>
            </p>
          </div>

      </form>
    </div>
    </div>
  );
};

export default Signin;
