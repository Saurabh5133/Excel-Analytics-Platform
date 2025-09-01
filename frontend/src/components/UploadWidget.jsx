import React from "react";

export default function UploadWidget({ onFileSelected }) {
  return (
    <div className="border-2 border-dashed rounded p-6 bg-white">
      <input
        type="file"
        accept=".xlsx,.xls"
        onChange={(e) => onFileSelected?.(e.target.files?.[0] || null)}
      />
      <p className="text-sm text-gray-600 mt-2">
        Supported: .xls, .xlsx (max ~25MB). First 100 rows are previewed.
      </p>
    </div>
  );
}
