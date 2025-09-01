
// import React, { useMemo, useState } from "react";
// import * as XLSX from "xlsx";
// import DataTable from "../components/DataTable.jsx";
// import ChartBuilder from "../components/ChartBuilder.jsx";
// import { uploadExcel } from "../api/uploadApi.js";

// export default function Upload() {
//   const [rows, setRows] = useState([]);
//   const [columns, setColumns] = useState([]);
//   const [settings, setSettings] = useState({ type: "scatter" });
//   const [serverMode, setServerMode] = useState(false);
//   const [message, setMessage] = useState("");

//   function parseLocal(file) {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const data = new Uint8Array(e.target.result);
//       const wb = XLSX.read(data, { type: "array" });
//       const sheet = wb.SheetNames[0];
//       const json = XLSX.utils.sheet_to_json(wb.Sheets[sheet], { defval: null, raw: false });
//       const cols = Array.from(json.reduce((set, row) => {
//         Object.keys(row).forEach((k)=>set.add(k));
//         return set;
//       }, new Set()));
//       setRows(json);
//       setColumns(cols);
//       setMessage(`Parsed locally: ${file.name} (${json.length} rows)`);
//     };
//     reader.readAsArrayBuffer(file);
//   }

//   async function handleFile(e) {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     setMessage("");
//     if (serverMode) {
//       try {
//         const res = await uploadExcel(file);
//         setRows(res.rows || []);
//         setColumns(res.columns || []);
//         setMessage(`Parsed on server: ${file.name} (${res.rows?.length||0} rows)`);
//       } catch (err) {
//         setMessage(err.message || "Upload failed");
//       }
//     } else {
//       parseLocal(file);
//     }
//   }

//   const canChart = useMemo(() => {
//     if (settings.type === "pie") return settings.label && settings.value;
//     if (settings.type === "scatter3d" || settings.type === "surface") return settings.x && settings.y && settings.z;
//     return settings.x && settings.y;
//   }, [settings]);

//   return (
//     <div className="space-y-4">
//       <div className="bg-white border rounded p-4">
//         <div className="flex items-center justify-between gap-3 flex-wrap">
//           <div>
//             <h2 className="font-semibold">Upload Excel</h2>
//             <p className="text-sm text-gray-600">Choose an .xls or .xlsx file. Parse locally or on the server.</p>
//           </div>
//           <label className="flex items-center gap-2 text-sm">
//             <input type="checkbox" checked={serverMode} onChange={(e)=>setServerMode(e.target.checked)} />
//             Parse on server
//           </label>
//         </div>
//         <input className="mt-3" type="file" accept=".xls,.xlsx" onChange={handleFile} />
//         {message && <div className="text-xs text-gray-600 mt-2">{message}</div>}
//       </div>

//       {!!rows.length && (
//         <div className="grid lg:grid-cols-2 gap-4">
//           <div className="space-y-3">
//             <div className="bg-white border rounded p-3">
//               <h3 className="font-semibold mb-2">Select Columns</h3>
//               <div className="flex flex-wrap gap-2">
//                 <select className="border rounded px-2 py-1" value={settings.x || ""} onChange={(e)=>setSettings((s)=>({ ...s, x: e.target.value }))}>
//                   <option value="">X</option>
//                   {columns.map((c)=>(<option key={c} value={c}>{c}</option>))}
//                 </select>
//                 <select className="border rounded px-2 py-1" value={settings.y || ""} onChange={(e)=>setSettings((s)=>({ ...s, y: e.target.value }))}>
//                   <option value="">Y</option>
//                   {columns.map((c)=>(<option key={c} value={c}>{c}</option>))}
//                 </select>
//                 <input className="border rounded px-2 py-1" placeholder="Title (optional)" value={settings.title || ""} onChange={(e)=>setSettings((s)=>({ ...s, title: e.target.value }))} />
//               </div>
//             </div>
//             <div>
//               <DataTable rows={rows} columns={columns} />
//             </div>
//           </div>
//           <div className="space-y-3">
//             <ChartBuilder data={rows} columns={columns} settings={settings} onChange={setSettings} />
//             {!canChart && <div className="text-xs text-red-600">Select required columns for the chosen chart type.</div>}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }








// import React, { useMemo, useState } from "react";
// import * as XLSX from "xlsx";
// import DataTable from "../components/DataTable.jsx";
// import ChartBuilder from "../components/ChartBuilder.jsx";
// import { uploadExcel } from "../api/uploadApi.js";
// import { UploadCloud } from "lucide-react";

// export default function Upload() {
//   const [rows, setRows] = useState([]);
//   const [columns, setColumns] = useState([]);
//   const [settings, setSettings] = useState({ type: "scatter" });
//   const [serverMode, setServerMode] = useState(false);
//   const [message, setMessage] = useState("");

//   function parseLocal(file) {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const data = new Uint8Array(e.target.result);
//       const wb = XLSX.read(data, { type: "array" });
//       const sheet = wb.SheetNames[0];
//       const json = XLSX.utils.sheet_to_json(wb.Sheets[sheet], {
//         defval: null,
//         raw: false,
//       });
//       const cols = Array.from(
//         json.reduce((set, row) => {
//           Object.keys(row).forEach((k) => set.add(k));
//           return set;
//         }, new Set())
//       );
//       setRows(json);
//       setColumns(cols);
//       setMessage(`Parsed locally: ${file.name} (${json.length} rows)`);
//     };
//     reader.readAsArrayBuffer(file);
//   }

//   async function handleFile(e) {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     setMessage("");
//     if (serverMode) {
//       try {
//         const res = await uploadExcel(file);
//         setRows(res.rows || []);
//         setColumns(res.columns || []);
//         setMessage(
//           `Parsed on server: ${file.name} (${res.rows?.length || 0} rows)`
//         );
//       } catch (err) {
//         setMessage(err.message || "Upload failed");
//       }
//     } else {
//       parseLocal(file);
//     }
//   }

//   const canChart = useMemo(() => {
//     if (settings.type === "pie") return settings.label && settings.value;
//     if (settings.type === "scatter3d" || settings.type === "surface")
//       return settings.x && settings.y && settings.z;
//     return settings.x && settings.y;
//   }, [settings]);

//   return (
//     <div className="p-6 space-y-6">
//       <div className="bg-white shadow rounded-xl p-6">
//         <div className="flex items-center justify-between gap-3 flex-wrap">
//           <div>
//             <h2 className="text-xl font-semibold flex items-center gap-2">
//               <UploadCloud className="h-6 w-6 text-blue-600" /> Upload Excel
//             </h2>
//             <p className="text-sm text-gray-600">
//               Choose an <b>.xls</b> or <b>.xlsx</b> file. Parse locally or on
//               the server.
//             </p>
//           </div>
//           <label className="flex items-center gap-2 text-sm bg-gray-100 px-3 py-1 rounded-lg cursor-pointer">
//             <input
//               type="checkbox"
//               checked={serverMode}
//               onChange={(e) => setServerMode(e.target.checked)}
//             />
//             Parse on server
//           </label>
//         </div>
//         <input
//           className="mt-4 block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
//           type="file"
//           accept=".xls,.xlsx"
//           onChange={handleFile}
//         />
//         {message && (
//           <div className="text-sm text-gray-700 mt-3 bg-gray-100 p-2 rounded">
//             {message}
//           </div>
//         )}
//       </div>

//       {!!rows.length && (
//         <div className="grid lg:grid-cols-2 gap-6">
//           {/* Left Section */}
//           <div className="space-y-4">
//             <div className="bg-white shadow rounded-xl p-4">
//               <h3 className="font-semibold mb-3">Select Columns</h3>
//               <div className="flex flex-wrap gap-3">
//                 <select
//                   className="border rounded-lg px-3 py-2"
//                   value={settings.x || ""}
//                   onChange={(e) =>
//                     setSettings((s) => ({ ...s, x: e.target.value }))
//                   }
//                 >
//                   <option value="">X</option>
//                   {columns.map((c) => (
//                     <option key={c} value={c}>
//                       {c}
//                     </option>
//                   ))}
//                 </select>
//                 <select
//                   className="border rounded-lg px-3 py-2"
//                   value={settings.y || ""}
//                   onChange={(e) =>
//                     setSettings((s) => ({ ...s, y: e.target.value }))
//                   }
//                 >
//                   <option value="">Y</option>
//                   {columns.map((c) => (
//                     <option key={c} value={c}>
//                       {c}
//                     </option>
//                   ))}
//                 </select>
//                 <input
//                   className="border rounded-lg px-3 py-2 flex-1"
//                   placeholder="Title (optional)"
//                   value={settings.title || ""}
//                   onChange={(e) =>
//                     setSettings((s) => ({ ...s, title: e.target.value }))
//                   }
//                 />
//               </div>
//             </div>
//             <div className="bg-white shadow rounded-xl p-4">
//               <DataTable rows={rows} columns={columns} />
//             </div>
//           </div>

//           {/* Right Section */}
//           <div className="space-y-4">
//             <div className="bg-white shadow rounded-xl p-4">
//               <ChartBuilder
//                 data={rows}
//                 columns={columns}
//                 settings={settings}
//                 onChange={setSettings}
//               />
//             </div>
//             {!canChart && (
//               <div className="text-sm text-red-600">
//                 ⚠️ Select required columns for the chosen chart type.
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




import React, { useMemo, useState } from "react";
import * as XLSX from "xlsx";
import DataTable from "../components/DataTable.jsx";
import ChartBuilder from "../components/ChartBuilder.jsx";
import { uploadExcel } from "../api/uploadApi.js";

export default function Upload() {
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const [settings, setSettings] = useState({ type: "scatter" });
  const [serverMode, setServerMode] = useState(false);
  const [message, setMessage] = useState("");

  function parseLocal(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const wb = XLSX.read(data, { type: "array" });
      const sheet = wb.SheetNames[0];
      const json = XLSX.utils.sheet_to_json(wb.Sheets[sheet], {
        defval: null,
        raw: false,
      });
      const cols = Array.from(
        json.reduce((set, row) => {
          Object.keys(row).forEach((k) => set.add(k));
          return set;
        }, new Set())
      );
      setRows(json);
      setColumns(cols);
      setMessage(`✅ Parsed locally: ${file.name} (${json.length} rows)`);
    };
    reader.readAsArrayBuffer(file);
  }

  async function handleFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setMessage("");
    if (serverMode) {
      try {
        const res = await uploadExcel(file);
        setRows(res.rows || []);
        setColumns(res.columns || []);
        setMessage(
          `✅ Parsed on server: ${file.name} (${res.rows?.length || 0} rows)`
        );
      } catch (err) {
        setMessage(err.message || "Upload failed ❌");
      }
    } else {
      parseLocal(file);
    }
  }

  const canChart = useMemo(() => {
    if (settings.type === "pie") return settings.label && settings.value;
    if (settings.type === "scatter3d" || settings.type === "surface")
      return settings.x && settings.y && settings.z;
    return settings.x && settings.y;
  }, [settings]);

  return (
    <div className="space-y-6 p-6">
      {/* Upload Box */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-xl font-bold">📂 Upload Excel File</h2>
            <p className="text-sm opacity-90">
              Choose an .xls or .xlsx file. You can parse locally or on the
              server.
            </p>
          </div>
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={serverMode}
              onChange={(e) => setServerMode(e.target.checked)}
              className="accent-white"
            />
            Parse on server
          </label>
        </div>
        <div className="mt-4">
          <input
            type="file"
            accept=".xls,.xlsx"
            onChange={handleFile}
            className="block w-full text-sm text-gray-900 rounded-lg cursor-pointer 
              bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 
              file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 
              file:text-sm file:font-semibold file:bg-indigo-100 file:text-indigo-700 
              hover:file:bg-indigo-200"
          />
        </div>
        {message && (
          <div className="mt-3 text-sm font-medium bg-white/20 p-2 rounded">
            {message}
          </div>
        )}
      </div>

      {/* Chart + Table Area */}
      {!!rows.length && (
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Column Selection + Table */}
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-xl shadow-md p-4 border">
              <h3 className="font-semibold mb-3">🎯 Select Columns</h3>
              <div className="flex flex-wrap gap-3">
                <select
                  className="border rounded px-3 py-2 focus:ring focus:ring-indigo-300"
                  value={settings.x || ""}
                  onChange={(e) =>
                    setSettings((s) => ({ ...s, x: e.target.value }))
                  }
                >
                  <option value="">X Axis</option>
                  {columns.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <select
                  className="border rounded px-3 py-2 focus:ring focus:ring-indigo-300"
                  value={settings.y || ""}
                  onChange={(e) =>
                    setSettings((s) => ({ ...s, y: e.target.value }))
                  }
                >
                  <option value="">Y Axis</option>
                  {columns.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <input
                  className="border rounded px-3 py-2 focus:ring focus:ring-indigo-300 flex-1"
                  placeholder="Title (optional)"
                  value={settings.title || ""}
                  onChange={(e) =>
                    setSettings((s) => ({ ...s, title: e.target.value }))
                  }
                />
              </div>
            </div>

            {/* Data Table */}
            <div className="bg-white rounded-xl shadow-md border p-4 overflow-auto max-h-[500px]">
              <h3 className="font-semibold mb-3">📊 Data Table</h3>
              <DataTable rows={rows} columns={columns} />
            </div>
          </div>

          {/* Chart Area */}
          <div className="bg-white rounded-xl shadow-md border p-4 flex flex-col">
            <h3 className="font-semibold mb-3">📈 Chart</h3>
            <div className="flex-1 min-h-[400px]">
              <ChartBuilder
                data={rows}
                columns={columns}
                settings={settings}
                onChange={setSettings}
              />
              {!canChart && (
                <div className="text-sm text-red-600 mt-2">
                  ⚠️ Select required columns for the chosen chart type.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
