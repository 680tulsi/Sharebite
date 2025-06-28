import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function DonorLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const registeredUser = JSON.parse(localStorage.getItem('donorUser'));

    if (
      registeredUser &&
      registeredUser.email === email &&
      registeredUser.password === password
    ) {
      console.log('Login Success!');
      setErrorMsg('');

      // ✅ Set login flag in localStorage
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userType', 'donor'); // Optional, future use

      navigate('/main');
    } else {
      setErrorMsg('Invalid credentials! Please sign up first.');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="bg-black bg-opacity-60 p-6 rounded-lg shadow-lg max-w-sm w-full text-white relative">

        {/* ❌ Cross Button */}
        <div className="absolute top-3 right-4">
          <button
            onClick={() => {
              localStorage.removeItem('isLoggedIn'); // remove login flag if closing without login
              navigate('/main');
            }}
            className="text-pink-400 text-2xl font-bold hover:text-white"
          >
            &times;
          </button>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-center">Donor Login</h2>

        {errorMsg && (
          <div className="text-red-400 text-sm text-center mb-2">{errorMsg}</div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded bg-gray-800 placeholder-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded bg-gray-800 placeholder-gray-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-bold py-2 rounded hover:bg-yellow-300 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Not a donor?{' '}
          <Link to="/signup/donor" className="text-yellow-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default DonorLogin;
