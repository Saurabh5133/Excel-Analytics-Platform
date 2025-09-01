
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { apiRegister } from "../api/authApi.js";

// export default function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setError("");
//     try {
//       await apiRegister({ name, email, password });
//       navigate("/login");
//     } catch (err) {
//       setError(err.message || "Register failed");
//     }
//   }

//   return (
//     <div className="flex justify-center">
//       <form onSubmit={handleSubmit} className="bg-white border rounded p-6 w-full max-w-md space-y-3">
//         <h1 className="text-xl font-bold">Register</h1>
//         {error && <div className="text-red-600 text-sm">{error}</div>}
//         <input className="border rounded p-2 w-full" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
//         <input className="border rounded p-2 w-full" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
//         <input type="password" className="border rounded p-2 w-full" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
//         <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Create account</button>
//       </form>
//     </div>
//   );
// }














// src/pages/Register.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: add API call
  };

  return (
    <div className="flex justify-center items-center py-12 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Create an Account 🚀
        </h2>
        <p className="text-gray-600 text-sm text-center mb-8">
          Sign up to upload your Excel files and unlock smart analytics
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-600 text-sm mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
