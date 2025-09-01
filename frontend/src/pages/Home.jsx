
// import React from "react";
// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <div className="space-y-6">
//       <section className="bg-white rounded-2xl border p-6">
//         <h1 className="text-2xl font-bold mb-2">Excel Analytics Platform</h1>
//         <p className="text-gray-600">
//           Upload any .xls or .xlsx file, explore your data, and generate interactive 2D & 3D charts.
//           Choose X/Y columns, pick chart types (bar, line, pie, bubble, 3D scatter/surface), and export images.
//         </p>
//         <div className="mt-4">
//           <Link to="/upload" className="inline-block bg-blue-600 text-white px-4 py-2 rounded">Get started</Link>
//         </div>
//       </section>
//       <section className="grid md:grid-cols-3 gap-4">
//         {[
//           ["Upload & Preview", "Drag-and-drop Excel files and preview the first rows instantly."],
//           ["Chart Builder", "Select columns and chart types, including 3D."],
//           ["History", "Your last uploads appear on your dashboard."]
//         ].map(([title, desc]) => (
//           <div key={title} className="bg-white rounded-2xl border p-5">
//             <h3 className="font-semibold text-lg">{title}</h3>
//             <p className="text-gray-600 text-sm mt-1">{desc}</p>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// }



// // src/pages/Home.jsx
// import { Link } from "react-router-dom";
// import { BarChart3, Upload, Database, Sparkles } from "lucide-react"; // nice icons

// export default function Home() {
//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 via-white to-indigo-50">
//       {/* Navbar / Logo */}
//       <header className="w-full flex items-center justify-between px-6 py-4 shadow bg-white">
//         <div className="flex items-center gap-2">
//           <img
//             src="/logo192.png" // replace with your own logo in public/
//             alt="Logo"
//             className="w-10 h-10"
//           />
//           <span className="text-xl font-bold text-indigo-700">
//             Excel Analytics
//           </span>
//         </div>
//         <nav className="flex gap-6 text-gray-600 font-medium">
//           <Link to="/login" className="hover:text-indigo-600 transition">
//             Login
//           </Link>
//           <Link to="/register" className="hover:text-indigo-600 transition">
//             Sign Up
//           </Link>
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-12">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
//           Analyze Excel Data Smarter ✨
//         </h1>
//         <p className="text-lg text-gray-600 max-w-2xl mb-8">
//           A powerful platform to upload, analyze, and visualize your Excel files 
//           with interactive charts. Unlock AI-powered insights, track your analysis 
//           history, and collaborate with ease.
//         </p>

//         <div className="flex gap-4 mb-12">
//           <Link
//             to="/login"
//             className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition"
//           >
//             Get Started
//           </Link>
//           <Link
//             to="/register"
//             className="px-6 py-3 rounded-xl bg-gray-200 text-gray-700 font-medium shadow hover:bg-gray-300 transition"
//           >
//             Create Account
//           </Link>
//         </div>

//         {/* Features Section */}
//         <div className="grid md:grid-cols-4 gap-6 max-w-5xl">
//           <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center">
//             <Upload className="w-10 h-10 text-indigo-600 mb-3" />
//             <h3 className="font-semibold text-gray-800">Upload Excel</h3>
//             <p className="text-sm text-gray-600 mt-2">
//               Drag & drop .xls or .xlsx files and start exploring instantly.
//             </p>
//           </div>
//           <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center">
//             <BarChart3 className="w-10 h-10 text-indigo-600 mb-3" />
//             <h3 className="font-semibold text-gray-800">Interactive Charts</h3>
//             <p className="text-sm text-gray-600 mt-2">
//               Generate 2D & 3D charts with just a few clicks.
//             </p>
//           </div>
//           <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center">
//             <Database className="w-10 h-10 text-indigo-600 mb-3" />
//             <h3 className="font-semibold text-gray-800">Save History</h3>
//             <p className="text-sm text-gray-600 mt-2">
//               Keep track of uploads and analysis in your dashboard.
//             </p>
//           </div>
//           <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center">
//             <Sparkles className="w-10 h-10 text-indigo-600 mb-3" />
//             <h3 className="font-semibold text-gray-800">AI Insights</h3>
//             <p className="text-sm text-gray-600 mt-2">
//               Get automated summaries & smart insights from your data.
//             </p>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       {/* <footer className="w-full bg-white py-6 mt-12 border-t text-center text-gray-600 text-sm">
//         © {new Date().getFullYear()} Excel Analytics Platform · Built with ❤️ using MERN
//       </footer> */}
//     </div>
//   );
// }









// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { BarChart3, Upload, Database, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12">
      {/* Hero Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
          Smarter Excel Analytics Platform ✨
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Upload, analyze, and visualize Excel files with interactive charts.
          Unlock AI-powered insights, manage your data history, and collaborate seamlessly.
        </p>
        <div className="flex justify-center gap-4 mb-10">
          <Link
            to="/login"
            className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>
          <Link
            to="/register"
            className="px-6 py-3 rounded-xl bg-gray-200 text-gray-700 font-medium shadow hover:bg-gray-300 transition"
          >
            Create Account
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-4 gap-6 max-w-5xl w-full">
        <FeatureCard
          icon={<Upload className="w-10 h-10 text-indigo-600" />}
          title="Upload Excel"
          desc="Easily upload .xls or .xlsx files and start exploring instantly."
        />
        <FeatureCard
          icon={<BarChart3 className="w-10 h-10 text-indigo-600" />}
          title="Interactive Charts"
          desc="Generate beautiful 2D & 3D charts with just a few clicks."
        />
        <FeatureCard
          icon={<Database className="w-10 h-10 text-indigo-600" />}
          title="Track History"
          desc="Your uploads & analysis are saved in your dashboard."
        />
        <FeatureCard
          icon={<Sparkles className="w-10 h-10 text-indigo-600" />}
          title="AI Insights"
          desc="Get smart summaries and anomaly detection automatically."
        />
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center">
      {icon}
      <h3 className="font-semibold text-gray-800 mt-3">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{desc}</p>
    </div>
  );
}

