import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DonorSignup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Donor Signup Data:", formData);

    // ✅ Save to localStorage
    localStorage.setItem('donorUser', JSON.stringify(formData));

    // ✅ Redirect to main screen
    navigate('/main');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/bg.png')" }}>
      <div className="bg-black bg-opacity-60 p-8 rounded-lg shadow-lg max-w-md w-full text-white relative">
        
        <div className="absolute top-3 right-4">
          <button
            onClick={() => navigate('/main')}
            className="text-pink-400 text-2xl font-bold hover:text-white"
          >
            &times;
          </button>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-center">Donor Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" type="text" placeholder="Full Name" className="w-full px-4 py-2 rounded bg-gray-800 placeholder-gray-400" value={formData.name} onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" className="w-full px-4 py-2 rounded bg-gray-800 placeholder-gray-400" value={formData.email} onChange={handleChange} required />
          <input name="phone" type="tel" placeholder="Phone Number" className="w-full px-4 py-2 rounded bg-gray-800 placeholder-gray-400" value={formData.phone} onChange={handleChange} required />
          <input name="address" type="text" placeholder="Address" className="w-full px-4 py-2 rounded bg-gray-800 placeholder-gray-400" value={formData.address} onChange={handleChange} required />
          <input name="password" type="password" placeholder="Password" className="w-full px-4 py-2 rounded bg-gray-800 placeholder-gray-400" value={formData.password} onChange={handleChange} required />
          <button type="submit" className="w-full bg-yellow-400 text-black font-bold py-2 rounded hover:bg-yellow-300">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default DonorSignup;
