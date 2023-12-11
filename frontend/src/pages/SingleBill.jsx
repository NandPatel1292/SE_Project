import React from "react";
import { useNavigate } from "react-router";

const SingleBill = () => {
  const navagate = useNavigate();
  return (
    <>
      <div className="flex justify-between">
        <button
          type="click"
          className="flex w-32 m-7 justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          onClick={() => navagate(-1)}
        >
          Back
        </button>
        <button
          type="submit"
          className="flex w-32 m-7 justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Print
        </button>
      </div>

      <div className="flex flex-col gap-7 p-10">
        <div className="flex ">
          <label
            htmlFor="ID"
            className="mb-2 mr-2 flex justify-center items-center text-sm font-medium text-gray-900  text-left	w-1/6"
          >
            ID
          </label>
          <input
            type="number"
            id="ID"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-[#FBFF312B] "
            placeholder="12"
            onChange={(e) => handleFieldChange(e, "barCode")}
          />
        </div>
        <div className="flex">
          <label
            htmlFor="name"
            className=" mb-2 mr-2 flex justify-center items-center text-sm font-medium text-gray-900 text-left	w-1/6"
          >
            Customer Name
          </label>
          <input
            type="text"
            id="name"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#FBFF312B]"
            placeholder="Jack Job"
            onChange={(e) => handleFieldChange(e, "Category")}
          />
        </div>
        <div className="flex">
          <label
            htmlFor="phone_number"
            className=" mb-2 mr-2 flex justify-center items-center text-sm font-medium text-gray-900  text-left w-1/6"
          >
            Phone Number
          </label>
          <input
            type="number"
            id="phone_number"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#FBFF312B]"
            placeholder="1234567890"
            onChange={(e) => handleFieldChange(e, "itemName")}
          />
        </div>
        <div className="flex">
          <label
            htmlFor="payment_mode"
            className=" mb-2 mr-2 flex justify-center items-center text-sm font-medium text-gray-900  text-left w-1/6"
          >
            Payment Mode
          </label>
          <input
            type="text"
            id="payment_mode"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#FBFF312B]"
            placeholder="Cash"
            onChange={(e) => handleFieldChange(e, "brand")}
          />
        </div>
      </div>
    </>
  );
};

export default SingleBill;
