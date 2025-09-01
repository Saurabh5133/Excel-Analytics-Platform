
// import React, { useEffect, useState } from "react";
// import { fetchHistory } from "../api/uploadApi.js";

// export default function Dashboard() {
//   const [items, setItems] = useState([]);
//   const [err, setErr] = useState("");

//   useEffect(() => {
//     fetchHistory().then(setItems).catch((e) => setErr(e.message || "Failed"));
//   }, []);

//   return (
//     <div>
//       <h1 className="text-xl font-bold mb-3">Recent uploads</h1>
//       {err && <div className="text-red-600 text-sm mb-2">{err}</div>}
//       {!items.length ? (
//         <div className="text-gray-500 text-sm">No history yet.</div>
//       ) : (
//         <ul className="space-y-2">
//           {items.map((it) => (
//             <li key={it._id} className="bg-white border rounded p-3">
//               <div className="font-medium">{it.originalname}</div>
//               <div className="text-xs text-gray-500">{(it.size/1024).toFixed(1)} KB • {it.columns?.length} columns • {new Date(it.createdAt).toLocaleString()}</div>
//               <div className="text-xs text-gray-600 mt-1">{(it.sheetNames||[]).join(", ")}</div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }












// src/pages/Dashboard.jsx
import { Link } from "react-router-dom";
import { FileSpreadsheet, BarChart3, Upload, Database } from "lucide-react";

export default function Dashboard() {
  // Example dummy data (replace with API data later)
  const recentUploads = [
    { id: 1, filename: "Sales_Report.xlsx", date: "2025-08-25", status: "Analyzed" },
    { id: 2, filename: "Customer_Data.xlsx", date: "2025-08-20", status: "Pending" },
    { id: 3, filename: "Inventory_Q2.xlsx", date: "2025-08-15", status: "Analyzed" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600">Welcome back, <span className="font-semibold">User</span> 👋</p>
        </div>
        <Link
          to="/upload"
          className="flex items-center gap-2 px-5 py-2 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
        >
          <Upload className="w-5 h-5" /> Upload File
        </Link>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="p-6 bg-white rounded-xl shadow flex items-center gap-4">
          <FileSpreadsheet className="w-10 h-10 text-indigo-600" />
          <div>
            <p className="text-gray-500">Total Uploads</p>
            <h2 className="text-2xl font-bold">32</h2>
          </div>
        </div>
        <div className="p-6 bg-white rounded-xl shadow flex items-center gap-4">
          <BarChart3 className="w-10 h-10 text-green-600" />
          <div>
            <p className="text-gray-500">Analyses Done</p>
            <h2 className="text-2xl font-bold">28</h2>
          </div>
        </div>
        <div className="p-6 bg-white rounded-xl shadow flex items-center gap-4">
          <Database className="w-10 h-10 text-orange-600" />
          <div>
            <p className="text-gray-500">Storage Used</p>
            <h2 className="text-2xl font-bold">-- MB</h2>
          </div>
        </div>
      </div>

      {/* Recent Uploads Table */}
      <div className="bg-white shadow rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Recent Uploads</h2>
        </div>
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-3 px-6">File Name</th>
              <th className="py-3 px-6">Date</th>
              <th className="py-3 px-6">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentUploads.map((file) => (
              <tr key={file.id} className="border-t hover:bg-gray-50">
                <td className="py-3 px-6">{file.filename}</td>
                <td className="py-3 px-6">{file.date}</td>
                <td className="py-3 px-6">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      file.status === "Analyzed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {file.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}










// // src/pages/Upload.jsx
// import { useState } from "react";
// import { Upload, FileSpreadsheet, X } from "lucide-react";

// export default function UploadPage() {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const removeFile = () => {
//     setSelectedFile(null);
//   };

//   return (
//     <div className="max-w-4xl mx-auto px-6 py-10">
//       {/* Header */}
//       <div className="mb-8 text-center">
//         <h1 className="text-3xl font-bold text-gray-800">Upload Excel File</h1>
//         <p className="text-gray-600 mt-2">
//           Upload your <span className="font-semibold">.xls or .xlsx</span> file and start analyzing your data instantly.
//         </p>
//       </div>

//       {/* Upload Box */}
//       <label
//         htmlFor="file-upload"
//         className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-2xl p-10 cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
//       >
//         <Upload className="w-12 h-12 text-indigo-600 mb-3" />
//         <span className="text-gray-700 font-medium">Drag & Drop your file here</span>
//         <span className="text-gray-500 text-sm mt-1">or click to browse</span>
//         <input
//           id="file-upload"
//           type="file"
//           accept=".xls,.xlsx"
//           className="hidden"
//           onChange={handleFileChange}
//         />
//       </label>

//       {/* Preview Selected File */}
//       {selectedFile && (
//         <div className="mt-8 bg-white shadow rounded-xl p-6 flex items-center justify-between">
//           <div className="flex items-center gap-4">
//             <FileSpreadsheet className="w-10 h-10 text-green-600" />
//             <div>
//               <p className="text-gray-800 font-semibold">{selectedFile.name}</p>
//               <p className="text-sm text-gray-500">
//                 {(selectedFile.size / 1024).toFixed(2)} KB
//               </p>
//             </div>
//           </div>
//           <button
//             onClick={removeFile}
//             className="text-red-500 hover:text-red-700 transition"
//           >
//             <X className="w-6 h-6" />
//           </button>
//         </div>
//       )}

//       {/* Submit Button */}
//       {selectedFile && (
//         <div className="mt-6 text-center">
//           <button
//             onClick={() => alert("File uploaded successfully!")}
//             className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl shadow hover:bg-indigo-700 transition"
//           >
//             Start Analysis
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }












