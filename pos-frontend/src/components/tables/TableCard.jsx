import React from "react";
import { getRandomBG } from "../../utils";

const TableCard = ({ name, status, initials }) => {
  return (
    <div className="w-[300px] bg-[#262626] p-4 hover:bg-[#1f1f1f] rounded-lg cursor-pointer">
      <div className="flex items-center justify-between px-1">
        <h1 className="text-[#f5f5f5] text-xl font-semibold">{name}</h1>
        <p className={`${status=== "Booked" ? "text-green-600 bg-[#2e4a40]" : "bg-[#664a04] text-white"} px-2 py-1 rounded-lg`}>
          {status}
        </p>
      </div>
      <div className="flex items-center justify-center my-5">
        <h1 className={`${getRandomBG()} text-white rounded-full p-5 text-2xl`}>
          {initials}
        </h1>
      </div>
    </div>
  );
};

export default TableCard;
