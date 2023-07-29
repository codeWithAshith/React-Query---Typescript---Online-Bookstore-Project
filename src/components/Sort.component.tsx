import React from "react";

const SortComponent = () => {
  return (
    <div className="flex items-center">
      <p className="px-4 text-lg">Sort by:</p>
      <div>
        <select className="bg-slate-50 border border-slate-300 text-slate-900 text-xs rounded-lg block w-full p-1.5 ">
          <option selected value="new">
            Newest
          </option>
          <option value="a-z">Alphabetically, A-Z</option>
          <option value="z-a">Alphabetically, Z-A</option>
          <option value="h-l">Price, High-Low</option>
          <option value="l-h">Price, Low-High</option>
        </select>
      </div>
    </div>
  );
};

export default SortComponent;
