import React, { useState, useRef } from 'react';
import m from '../../assets/link2.png';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';








export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef();
   

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (data.error) {
        toast.error(data.error);
      } else {
        localStorage.setItem('token', data.token);
        toast.success('Login Successful');
        window.location.href = '/dashboard';
      }
    } catch (err) {
      console.log(err);
      toast.error('Something went wrong');
    }

  };
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <div className="flex items-center justify-center">
          <span className="text-xl font-semibold text-gray-800">
            <img
              src={m}
              alt=""
              style={{ width: 200, height: 200, resizeMode: 'contain', marginBottom: 20 }}
            />
          </span>
        </div>
        <form className="mt-6">
          <div className="mb-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <input
              type="password"
              id="password"
              ref={passwordRef}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a href="#" className="text-xs text-purple-600 hover:underline">
            Forget Password?
          </a>
          <div className="mt-6">
            <button
              type="button"
              onClick={handleLogin}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <a href="/register" className="font-medium text-purple-600 hover:underline">
            Create an Account
            </a>
        </p>
        </div>
    </div>
    );
}



