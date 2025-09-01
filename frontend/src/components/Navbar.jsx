// // // // import React from "react";
// // // // import { Link } from "react-router-dom";

// // // // function Navbar() {
// // // //   return (
// // // //     <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
// // // //       <h1 className="text-xl font-bold">Excel Analytics Platform</h1>
// // // //       <div className="space-x-4">
// // // //         <Link to="/" className="hover:underline">Home</Link>
// // // //         <Link to="/login" className="hover:underline">Login</Link>
// // // //         <Link to="/register" className="hover:underline">Register</Link>
// // // //         <Link to="/dashboard" className="hover:underline">Dashboard</Link>
// // // //       </div>
// // // //     </nav>
// // // //   );
// // // // }

// // // // export default Navbar;


// // // .navbar {
// // //   display: flex;
// // //   justify-content: space-between;
// // //   align-items: center;
// // //   background: #0d1117;
// // //   padding: 12px 24px;
// // //   box-shadow: 0 2px 5px rgba(0,0,0,0.2);
// // // }

// // // .navbar h2 {
// // //   color: #fff;
// // //   font-size: 22px;
// // // }

// // // .navbar-links {
// // //   display: flex;
// // //   gap: 20px;
// // // }

// // // .navbar-links a {
// // //   color: #fff;
// // //   text-decoration: none;
// // //   font-size: 16px;
// // //   transition: color 0.3s ease;
// // // }

// // // .navbar-links a:hover {
// // //   color: #58a6ff;
// // // }


// // // import { Link } from "react-router-dom";

// // // export default function Navbar() {
// // //   const token = localStorage.getItem("token");

// // //   return (
// // //     <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
// // //       <Link to="/" className="text-xl font-bold text-blue-600">
// // //         MyApp
// // //       </Link>

// // //       <div className="space-x-6">
// // //         <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
// // //           Home
// // //         </Link>
// // //         {!token ? (
// // //           <>
// // //             <Link to="/login" className="text-gray-700 hover:text-blue-600 transition">
// // //               Login
// // //             </Link>
// // //             <Link to="/signup" className="text-gray-700 hover:text-blue-600 transition">
// // //               Signup
// // //             </Link>
// // //           </>
// // //         ) : (
// // //           <span className="text-green-600 font-semibold">Logged In</span>
// // //         )}
// // //       </div>
// // //     </nav>
// // //   );
// // // }





// // import { Link } from "react-router-dom";

// // export default function Navbar() {
// //   const token = localStorage.getItem("token");

// //   return (
// //     <nav className="bg-blue-600 text-white px-6 py-4 shadow-md flex justify-between items-center">
// //       <Link to="/" className="text-xl font-bold hover:text-blue-200 transition">
// //         Excel Analytics Platform
// //       </Link>

// //       <div className="flex space-x-6">
// //         <Link to="/" className="hover:text-blue-200 transition">
// //           Home
// //         </Link>

// //         {!token ? (
// //           <>
// //             <Link to="/login" className="hover:text-blue-200 transition">
// //               Login
// //             </Link>
// //             <Link to="/register" className="hover:text-blue-200 transition">
// //               Register
// //             </Link>
// //           </>
// //         ) : (
// //           <>
// //             <Link to="/dashboard" className="hover:text-blue-200 transition">
// //               Dashboard
// //             </Link>
// //             <span className="text-green-300 font-semibold">Logged In</span>
// //           </>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // }













// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="bg-blue-600 p-4 text-white flex justify-between">
//       <h1 className="text-xl font-bold">Excel Analytics</h1>
//       <div className="space-x-4">
//         <Link to="/login" className="hover:underline">Login</Link>
//         <Link to="/register" className="hover:underline">Register</Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;














// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
//       <h1 className="text-xl font-bold">📊 Excel Analytics</h1>
//       <div className="space-x-4">
//         <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
//         <Link to="/register" className="text-green-600 hover:underline">Register</Link>
//       </div>
//     </nav>
//   );
// }





// src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Example: check auth token
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="w-full bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo192.png" alt="Logo" className="w-9 h-9" />
          <span className="text-xl font-bold text-indigo-700">Excel Analytics</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center font-medium text-gray-700">
          <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
          {isLoggedIn && (
            <>
              <Link to="/dashboard" className="hover:text-indigo-600 transition">Dashboard</Link>
              <Link to="/upload" className="hover:text-indigo-600 transition">Upload</Link>
            </>
          )}
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="hover:text-indigo-600 transition">Login</Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded-xl bg-indigo-600 text-white shadow hover:bg-indigo-700 transition"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-xl bg-gray-200 text-gray-700 shadow hover:bg-gray-300 transition"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 font-medium text-gray-700">
          <Link to="/" className="block hover:text-indigo-600" onClick={() => setMenuOpen(false)}>Home</Link>
          {isLoggedIn && (
            <>
              <Link to="/dashboard" className="block hover:text-indigo-600" onClick={() => setMenuOpen(false)}>Dashboard</Link>
              <Link to="/upload" className="block hover:text-indigo-600" onClick={() => setMenuOpen(false)}>Upload</Link>
            </>
          )}
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="block hover:text-indigo-600" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link
                to="/register"
                className="block px-4 py-2 rounded-xl bg-indigo-600 text-white shadow hover:bg-indigo-700 transition"
                onClick={() => setMenuOpen(false)}
              >
                Sign Up
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="w-full px-4 py-2 rounded-xl bg-gray-200 text-gray-700 shadow hover:bg-gray-300 transition"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
