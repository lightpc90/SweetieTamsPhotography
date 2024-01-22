"use client";

import { useState } from "react";
import { portfolios } from "@/data/portfolio/Portfolios";

const AddNewPicture = () => {
  const [portCate, setPortCate] = useState("");
  return (
    <div className="bg-[#1A3B2F] w-10/12 lg:w-4/12 lg:h-[270px] lg:px-10 py-10 flex p-3 gap-3 flex-col shadow-md">
      <h2 className="text-white font-bold text-center">Add New Picture</h2>
      <div className="flex flex-col gap-2">
        <input type="file" />
        <select
          value={portCate}
          onChange={(e) => {
            setPortCate(e.target.value);
          }}
                  className="p-2"
        >
          <option value="">Select Category</option>
          {portfolios.map((portfolio, i) => (
            <option key={i} value={portfolio.value}>
              {portfolio.name}
            </option>
          ))}
        </select>
        <button className="bg-[#BD8E25] py-1 px-2 font-semibold text-white">UPLOAD</button>
      </div>
    </div>
  );
};

export default AddNewPicture;
