import React from "react";
import help from "../../assets/help_call.png";

const HelpDesk = () => {
  return (
    <div className="flex flex-row h-screen">
      <div className="flex flex-col basis-1/2 items-center justify-center gap-2">
        <img src={help} alt="" />
        <div>
          <span className="text-base font-normal text-blue-800">Call Us: </span>
          <span className="text-red-700">1800 0003 3333</span>
        </div>
        <div>
          <span className="text-base font-normal text-blue-800">Support: </span>
          <span className="text-red-700">support.billpay@gmail.com</span>
        </div>
      </div>
      <div className="flex flex-col basis-1/2 bg-blue-800 items-center justify-center gap-5 p-10">
        <label
          htmlFor="message"
          className="text-white text-2xl font-bold font-['Inter']"
        >
          Let us know, what is the problem?
        </label>

        <textarea
          id="message"
          rows="10"
          cols="7"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
          placeholder="Write your thoughts here..."
        ></textarea>
        <button className="bg-white text-blue-800 font-semibold rounded-lg px-5 py-2">
          Submit
        </button>
      </div>
    </div>
  );
};

export default HelpDesk;
