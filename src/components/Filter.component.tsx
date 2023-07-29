import React from "react";
import ButtonComponent from "./Button.component";

const FilterComponent = () => {
  return (
    <div className="flex flex-col m-6 my-10">
        {/* <p className="text-2xl tracking-wide font-light mb-2">Filter</p>
        <div className="w-full h-[1px] bg-slate-900"></div> */}
      <p className="text-xl tracking-wide font-light my-2">Price</p>
      <div className="w-full h-[1px] bg-slate-900"></div>
      <div className="flex gap-2">
        <input
          type="text"
          className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg block w-full p-2 my-4"
          placeholder="Minimum"
        />
        <input
          type="text"
          className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg block w-full p-2 my-4"
          placeholder="Maximum"
        />
      </div>
      <p className="text-xl tracking-wide font-light mb-2">Categories</p>
      <div className="w-full h-[1px] bg-slate-900"></div>
      <div className="flex gap-2">
        <select className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg block w-full p-2 my-4">
          <option selected value="all">
            All
          </option>
          <option value="fiction">Fiction</option>
          <option value="fantasy">Fantasy</option>
        </select>
      </div>
      <p className="text-xl tracking-wide font-light mb-2">Author</p>
      <div className="w-full h-[1px] bg-slate-900"></div>
      <div className="flex flex-col items-start my-4">
        <div>
          <input
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-slate-100 border-slate-300 rounded "
          />
          <label
            htmlFor="checked-checkbox"
            className="ml-2 text-sm text-slate-900"
          >
            JK Rowling
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-slate-100 border-slate-300 rounded "
          />
          <label
            htmlFor="checked-checkbox"
            className="ml-2 text-sm text-slate-900"
          >
            William Shakespeare
          </label>
        </div>
      </div>
      <ButtonComponent label="Apply" onClick={() => {}} className="p-1" />
    </div>
  );
};

export default FilterComponent;
