
import React from "react";

export default function DataTable({ rows = [], columns = [] }) {
  if (!rows?.length) return <div className="text-sm text-gray-500">No data to display.</div>;
  const cols = columns?.length ? columns : Object.keys(rows[0] || {});
  return (
    <div className="overflow-auto border rounded bg-white">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-50 sticky top-0">
          <tr>
            {cols.map((c) => (
              <th key={c} className="text-left font-semibold px-3 py-2 border-b">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.slice(0, 100).map((row, i) => (
            <tr key={i} className="odd:bg-white even:bg-gray-50">
              {cols.map((c) => (
                <td key={c} className="px-3 py-1 border-b whitespace-nowrap">{String(row[c] ?? "")}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {rows.length > 100 && <div className="px-3 py-2 text-xs text-gray-500">Showing first 100 of {rows.length} rows.</div>}
    </div>
  );
}
