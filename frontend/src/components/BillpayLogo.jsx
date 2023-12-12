import React from "react";
import Login from "../pages/Login";

const BillpayLogo = (props) => {
  return (
    <>
      <div className="flex h-screen bg-white">
        {/* flex flex-row w-2/4 relative justify-center items-center */}
        <div className=" flex flex-row min-h-full flex-1 justify-center items-center px-5 py-12 lg:px-8">
          <div className="w-52 h-11 text-blue-800 text-8xl font-bold font-['Inter'] ">
            BILL
          </div>
          <div className="w-52 h-11 text-red-600 text-opacity-80 text-8xl font-bold font-['Inter'] ">
            PAY
          </div>
        </div>
        <div className="flex bg-blue-900 w-2/4 justify-center items-center">
          {props.children}
        </div>
      </div>
    </>
  );
};

export default BillpayLogo;
