
// import React, { useMemo } from "react";
// import Plot from "react-plotly.js";

// const TYPES = [
//   { value: "scatter", label: "Scatter (2D)" },
//   { value: "line", label: "Line" },
//   { value: "bar", label: "Bar" },
//   { value: "pie", label: "Pie" },
//   { value: "bubble", label: "Bubble" },
//   { value: "scatter3d", label: "3D Scatter" },
//   { value: "surface", label: "3D Surface (matrix)" }
// ];

// export default function ChartBuilder({ data = [], columns = [], settings, onChange }) {
//   const cols = columns?.length ? columns : Object.keys((data && data[0]) || {});

//   const type = settings.type || "scatter";

//   const trace = useMemo(() => {
//     const x = data?.map((row) => row[settings.x]) || [];
//     const y = data?.map((row) => row[settings.y]) || [];
//     const z = data?.map((row) => row[settings.z]) || [];
//     const size = data?.map((row) => Number(row[settings.size]) || 8) || [];

//     if (type === "pie") {
//       const labels = data?.map((row) => row[settings.label]) || [];
//       const values = data?.map((row) => Number(row[settings.value]) || 0) || [];
//       return [{ type: "pie", labels, values, textinfo: "label+percent", hoverinfo: "label+value+percent" }];
//     }
//     if (type === "bar") return [{ type: "bar", x, y }];
//     if (type === "line") return [{ type: "scatter", mode: "lines", x, y }];
//     if (type === "bubble") return [{ type: "scatter", mode: "markers", x, y, marker: { size } }];
//     if (type === "scatter3d") return [{ type: "scatter3d", mode: "markers", x, y, z }];
//     if (type === "surface") return [{ type: "surface", z: buildMatrix(data, settings) }];
//     return [{ type: "scatter", mode: "markers", x, y }];
//   }, [data, settings, type]);

//   return (
//     <div className="space-y-3">
//       <div className="flex flex-wrap gap-2 items-center">
//         <select className="border rounded px-2 py-1" value={type} onChange={(e) => onChange({ ...settings, type: e.target.value })}>
//           {TYPES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
//         </select>

//         {(type !== "pie") && (
//           <>
//             <select className="border rounded px-2 py-1" value={settings.x || ""} onChange={(e) => onChange({ ...settings, x: e.target.value })}>
//               <option value="">X</option>
//               {cols.map((c) => <option key={c} value={c}>{c}</option>)}
//             </select>
//             <select className="border rounded px-2 py-1" value={settings.y || ""} onChange={(e) => onChange({ ...settings, y: e.target.value })}>
//               <option value="">Y</option>
//               {cols.map((c) => <option key={c} value={c}>{c}</option>)}
//             </select>
//             {(type === "scatter3d" || type === "surface") && (
//               <select className="border rounded px-2 py-1" value={settings.z || ""} onChange={(e) => onChange({ ...settings, z: e.target.value })}>
//                 <option value="">Z</option>
//                 {cols.map((c) => <option key={c} value={c}>{c}</option>)}
//               </select>
//             )}
//             {type === "bubble" && (
//               <select className="border rounded px-2 py-1" value={settings.size || ""} onChange={(e) => onChange({ ...settings, size: e.target.value })}>
//                 <option value="">Bubble size</option>
//                 {cols.map((c) => <option key={c} value={c}>{c}</option>)}
//               </select>
//             )}
//           </>
//         )}

//         {type === "pie" && (
//           <>
//             <select className="border rounded px-2 py-1" value={settings.label || ""} onChange={(e) => onChange({ ...settings, label: e.target.value })}>
//               <option value="">Pie Labels</option>
//               {cols.map((c) => <option key={c} value={c}>{c}</option>)}
//             </select>
//             <select className="border rounded px-2 py-1" value={settings.value || ""} onChange={(e) => onChange({ ...settings, value: e.target.value })}>
//               <option value="">Pie Values</option>
//               {cols.map((c) => <option key={c} value={c}>{c}</option>)}
//             </select>
//           </>
//         )}
//       </div>

//       <div className="bg-white rounded border p-2">
//         <Plot
//           data={trace}
//           layout={{ autosize: true, title: settings.title || "", height: 480 }}
//           useResizeHandler
//           style={{ width: "100%", height: "100%" }}
//           config={{ displaylogo: false, toImageButtonOptions: { format: "png", filename: "chart" } }}
//         />
//       </div>
//     </div>
//   );
// }

// function buildMatrix(data, _settings) {
//   // Build a naive Z matrix from numeric columns (for demo)
//   const first = data?.[0] || {};
//   const numericCols = Object.keys(first).filter((k) => typeof Number(first[k]) === "number" && !isNaN(Number(first[k])));
//   if (numericCols.length < 3) return [[0,1],[1,0]];
//   return data.slice(0, 20).map((row) => numericCols.slice(0, 20).map((c) => Number(row[c]) || 0));
// }



















import React, { useMemo } from "react";
import Plot from "react-plotly.js";

const TYPES = [
  { value: "scatter", label: "Scatter (2D)" },
  { value: "line", label: "Line" },
  { value: "bar", label: "Bar" },
  { value: "pie", label: "Pie" },
  { value: "bubble", label: "Bubble" },
  { value: "scatter3d", label: "3D Scatter" },
  { value: "surface", label: "3D Surface (matrix)" }
];

export default function ChartBuilder({ data = [], columns = [], settings, onChange }) {
  const cols = columns?.length ? columns : Object.keys((data && data[0]) || {});
  const type = settings.type || "scatter";

  const trace = useMemo(() => {
    const x = data?.map((row) => row[settings.x]) || [];
    const y = data?.map((row) => row[settings.y]) || [];
    const z = data?.map((row) => row[settings.z]) || [];
    const size = data?.map((row) => Number(row[settings.size]) || 8) || [];

    if (type === "pie") {
      const labels = data?.map((row) => row[settings.label]) || [];
      const values = data?.map((row) => Number(row[settings.value]) || 0) || [];
      return [
        {
          type: "pie",
          labels,
          values,
          textinfo: "label+percent",
          hoverinfo: "label+value+percent"
        }
      ];
    }
    if (type === "bar") return [{ type: "bar", x, y }];
    if (type === "line") return [{ type: "scatter", mode: "lines", x, y }];
    if (type === "bubble")
      return [{ type: "scatter", mode: "markers", x, y, marker: { size, color: y, colorscale: "Viridis" } }];
    if (type === "scatter3d") return [{ type: "scatter3d", mode: "markers", x, y, z }];
    if (type === "surface") return [{ type: "surface", z: buildMatrix(data, settings) }];
    return [{ type: "scatter", mode: "markers", x, y }];
  }, [data, settings, type]);

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-lg p-5 space-y-4">
      {/* Controls */}
      <div className="flex flex-wrap gap-3 items-center">
        <select
          className="border rounded-lg px-3 py-2 shadow-sm hover:shadow-md transition text-sm focus:ring focus:ring-indigo-300"
          value={type}
          onChange={(e) => onChange({ ...settings, type: e.target.value })}
        >
          {TYPES.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>

        {type !== "pie" && (
          <>
            <select
              className="border rounded-lg px-3 py-2 shadow-sm hover:shadow-md transition text-sm focus:ring focus:ring-indigo-300"
              value={settings.x || ""}
              onChange={(e) => onChange({ ...settings, x: e.target.value })}
            >
              <option value="">X Axis</option>
              {cols.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <select
              className="border rounded-lg px-3 py-2 shadow-sm hover:shadow-md transition text-sm focus:ring focus:ring-indigo-300"
              value={settings.y || ""}
              onChange={(e) => onChange({ ...settings, y: e.target.value })}
            >
              <option value="">Y Axis</option>
              {cols.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            {(type === "scatter3d" || type === "surface") && (
              <select
                className="border rounded-lg px-3 py-2 shadow-sm hover:shadow-md transition text-sm focus:ring focus:ring-indigo-300"
                value={settings.z || ""}
                onChange={(e) => onChange({ ...settings, z: e.target.value })}
              >
                <option value="">Z Axis</option>
                {cols.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            )}

            {type === "bubble" && (
              <select
                className="border rounded-lg px-3 py-2 shadow-sm hover:shadow-md transition text-sm focus:ring focus:ring-indigo-300"
                value={settings.size || ""}
                onChange={(e) => onChange({ ...settings, size: e.target.value })}
              >
                <option value="">Bubble Size</option>
                {cols.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            )}
          </>
        )}

        {type === "pie" && (
          <>
            <select
              className="border rounded-lg px-3 py-2 shadow-sm hover:shadow-md transition text-sm focus:ring focus:ring-indigo-300"
              value={settings.label || ""}
              onChange={(e) => onChange({ ...settings, label: e.target.value })}
            >
              <option value="">Pie Labels</option>
              {cols.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <select
              className="border rounded-lg px-3 py-2 shadow-sm hover:shadow-md transition text-sm focus:ring focus:ring-indigo-300"
              value={settings.value || ""}
              onChange={(e) => onChange({ ...settings, value: e.target.value })}
            >
              <option value="">Pie Values</option>
              {cols.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </>
        )}
      </div>

      {/* Chart */}
      <div className="bg-white rounded-xl shadow-md border p-3 min-h-[480px]">
        <Plot
          data={trace}
          layout={{
            autosize: true,
            title: settings.title || "",
            height: 460,
            margin: { t: 50, r: 30, l: 40, b: 40 },
            paper_bgcolor: "white",
            plot_bgcolor: "#f9fafb"
          }}
          useResizeHandler
          style={{ width: "100%", height: "100%" }}
          config={{
            displaylogo: false,
            toImageButtonOptions: { format: "png", filename: "chart" }
          }}
        />
      </div>
    </div>
  );
}

function buildMatrix(data, _settings) {
  const first = data?.[0] || {};
  const numericCols = Object.keys(first).filter(
    (k) => typeof Number(first[k]) === "number" && !isNaN(Number(first[k]))
  );
  if (numericCols.length < 3) return [[0, 1], [1, 0]];
  return data
    .slice(0, 20)
    .map((row) =>
      numericCols.slice(0, 20).map((c) => Number(row[c]) || 0)
    );
}
