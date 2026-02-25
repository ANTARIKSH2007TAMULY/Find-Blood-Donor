import React from "react";

export default function Spinner() {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-500 border-gray-200"></div>
    </div>
  );
}