
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiLogin } from "../api/authApi.js";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      const { token } = await apiLogin({ email, password });
      localStorage.setItem("token", token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Login failed");
    }
  }

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="bg-white border rounded p-6 w-full max-w-md space-y-3">
        <h1 className="text-xl font-bold">Login</h1>
        {error && <div className="text-red-600 text-sm">{error}</div>}
        <input className="border rounded p-2 w-full" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" className="border rounded p-2 w-full" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Login</button>
      </form>
    </div>
  );
}










// // src/pages/Login.jsx
// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // TODO: add API call
//   };

//   return (
//     <div className="flex justify-center items-center py-12 px-4">
//       <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//           Welcome Back 👋
//         </h2>
//         <p className="text-gray-600 text-sm text-center mb-8">
//           Login to access your dashboard and continue analyzing data
//         </p>

//         <form className="space-y-5" onSubmit={handleSubmit}>
//           <div>
//             <label className="block text-sm font-medium text-gray-600">
//               Email
//             </label>
//             <input
//               type="email"
//               className="w-full mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-600">
//               Password
//             </label>
//             <input
//               type="password"
//               className="w-full mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition"
//           >
//             Login
//           </button>
//         </form>

//         <p className="text-center text-gray-600 text-sm mt-6">
//           Don’t have an account?{" "}
//           <Link to="/register" className="text-indigo-600 hover:underline">
//             Sign up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }
