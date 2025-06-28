import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './pages/Navbar';
import Homee from './pages/Homee';
import MainSlider from './pages/MainSlider';
import AboutUs from './pages/AboutUs';
import Donate from './pages/Donate';
import Volunteer from './pages/Volunteer';
import DonorLogin from './pages/DonorLogin';
import VolunteerLogin from './pages/VolunteerLogin';
import DonorSignup from './pages/DonorSignup';
import VolunteerSignup from './pages/VolunteerSignup';

function Layout() {
  const location = useLocation();

  // In pages jaha Navbar nahi chahiye:
  const hideNavbarRoutes = [
    '/',
    '/login/donor',
    '/login/volunteer',
    '/signup/donor',
    '/signup/volunteer'
  ];

  const hideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Homee />} />
        <Route path="/main" element={<MainSlider />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/login/donor" element={<DonorLogin />} />
        <Route path="/login/volunteer" element={<VolunteerLogin />} />
        <Route path="/signup/donor" element={<DonorSignup />} />
        <Route path="/signup/volunteer" element={<VolunteerSignup />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

