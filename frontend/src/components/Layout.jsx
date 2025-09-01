import React, { useState } from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">📊 Excel Analytics</h1>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-yellow-300">Home</Link>
            <Link to="/dashboard" className="hover:text-yellow-300">Dashboard</Link>
            <Link to="/upload" className="hover:text-yellow-300">Upload</Link>
            <Link to="/login" className="hover:text-yellow-300">Login</Link>
          </div>
          {/* Mobile menu */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>
        {menuOpen && (
          <div className="bg-indigo-700 md:hidden p-3 space-y-2">
            <Link to="/" className="block">Home</Link>
            <Link to="/dashboard" className="block">Dashboard</Link>
            <Link to="/upload" className="block">Upload</Link>
            <Link to="/login" className="block">Login</Link>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main className="flex-grow container mx-auto p-6">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Excel Analytics Platform | Built with ❤️
        </p>
      </footer>
    </div>
  );
};

export default Layout;
