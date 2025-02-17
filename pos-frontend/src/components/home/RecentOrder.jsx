import React from "react";
import { FaSearch } from "react-icons/fa";
import OrderList from "./OrderList";

const RecentOrder = () => {
  return (
    <div className="px-8 mt-6">
      <div className="bg-[#1a1a1a] w-full h-[450px] rounded-lg">
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
            Recent Orders
          </h1>
          <a href="" className="text-[#025cca] text-sm font-semibold">
            View all
          </a>
        </div>

        <div className="flex items-center gap-4 bg-[#1f1f1f] p-2 rounded-[15px] px-6 py-4 mx-6">
          <FaSearch className="text-[#f5f5f5]" />
          <input
            type="text"
            placeholder="Search recent orders"
            className="bg-[#1f1f1f] outline-none text-[#f5f5f5]"
          />
        </div>

        {/* Order List */}
        <div className="mt-4 px-6 overflow-y-scroll h-[500px] no-scrollbar">
          <OrderList time="AM" name="Subha" item="8 Items" table="Table No: 3" />
          <OrderList time="PM" name="Sayan" item="4 Items" table="Table No: 4"/>
          <OrderList time="AM" name="Sayak" item="6 Items" table="Table No: 4"/>
          <OrderList time="AM" name="Rubela" item="9 Items" table="Table No: 6"/>
          <OrderList time="PM" name="Ruhi" item="2 Items" table="Table No: 3"/>
          <OrderList time="PM" name="Deep" item="4 Items" table="Table No: 5"/>
          <OrderList time="AM" name="Tanu" item="3 Items" table="Table No: 2"/>
          <OrderList time="PM" name="Sapta" item="4 Items" table="Table No: 3"/>
          <OrderList time="AM" name="Riya" item="5 Items" table="Table No: 1"/>
        </div>
      </div>
    </div>
  );
};

export default RecentOrder;
