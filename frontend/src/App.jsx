import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Upload from './pages/Upload.jsx';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800 font-sans">
        <Header />
        <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function Header() {
  const location = useLocation();
  const linkClass = (path) =>
    `px-4 py-2 rounded-md text-sm font-medium transition duration-200 ${
      location.pathname === path
        ? 'bg-blue-700 text-white shadow'
        : 'text-gray-100 hover:bg-blue-600 hover:text-white'
    }`;

  return (
    <header className="bg-gradient-to-r from-blue-800 to-blue-600 shadow-md sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          {/* Logo: Replace this emoji or link with an image if you prefer */}
          <span className="text-white text-2xl">📊</span>
          <span className="text-white text-xl font-bold tracking-wide">
            Excel Analytics
          </span>
        </Link>
        <nav className="flex space-x-3">
          <Link to="/upload" className={linkClass('/upload')}>Upload</Link>
          <Link to="/dashboard" className={linkClass('/dashboard')}>Dashboard</Link>
          <Link to="/login" className={linkClass('/login')}>Login</Link>
          <Link to="/register" className={linkClass('/register')}>Register</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-16 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm">
        <p className="mb-2">
          &copy; {new Date().getFullYear()}{' '}
          <span className="font-semibold text-white">Excel Analytics Platform</span>. All rights reserved.
        </p>
        <p className="text-xs text-blue-200">
          Made By Saurabh Yadav
          Built using React, Vite, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

