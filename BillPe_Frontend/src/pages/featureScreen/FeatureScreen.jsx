import React from "react";

import GenerateBill1 from "../../assets//generateBill1.png";
import help from "../../assets/help.png";
import manageBill from "../../assets/manageBill.png";
import manageProducts from "../../assets/manageProducts.png";
import reports from "../../assets/reports.png";
import template from "../../assets/template.png";

import { Link } from "react-router-dom";

const FeatureScreen = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-3/4">
        <div className="flex mb-4 gap-8">
          <Link
            to={"/page1"}
            className="w-1/3 flex flex-col items-center justify-center max-w-sm bg-blue-800 border border-gray-200 rounded-3xl shadow hover:scale-105 transition-transform "
          >
            <img
              className="rounded-t-lg w-1/3 mt-6"
              src={GenerateBill1}
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-100 ">
                Generate Bill
              </h5>
            </div>
          </Link>

          <Link
            to={"/page1"}
            className="w-1/3 flex flex-col items-center justify-center max-w-sm bg-blue-800 border border-gray-200 rounded-3xl	shadow hover:scale-105 transition-transform"
          >
            <img className="rounded-t-lg w-1/3 mt-6" src={reports} alt="" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-100 ">
                Sales Report
              </h5>
            </div>
          </Link>

          <Link
            to={"/page1"}
            className="w-1/3 flex flex-col items-center justify-center max-w-sm bg-blue-800 border border-gray-200 rounded-3xl	shadow hover:scale-105 transition-transform"
          >
            <img className="rounded-t-lg w-1/3 mt-6" src={manageBill} alt="" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-100 ">
                Manage Bill
              </h5>
            </div>
          </Link>
        </div>

        <div className="flex mb-4 gap-8">
          <Link
            to={"/page1"}
            className="w-1/3 flex flex-col items-center justify-center max-w-sm bg-blue-800 border border-gray-200 rounded-3xl	shadow hover:scale-105 transition-transform"
          >
            <img
              className="rounded-t-lg w-1/3 mt-6"
              src={manageProducts}
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-100 ">
                Manage Products
              </h5>
            </div>
          </Link>

          <Link
            to={"/page1"}
            className="w-1/3 flex flex-col items-center justify-center max-w-sm bg-blue-800 border border-gray-200 rounded-3xl	shadow hover:scale-105 transition-transform"
          >
            <img className="rounded-t-lg w-1/3 mt-6" src={template} alt="" />

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-100 ">
                Bill Template
              </h5>
            </div>
          </Link>

          <Link
            to={"/page1"}
            className="w-1/3 flex flex-col items-center justify-center max-w-sm bg-blue-800 border border-gray-200 rounded-3xl	shadow hover:scale-105 transition-transform"
          >
            <img className="rounded-t-lg w-1/3 mt-6" src={help} alt="" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-100 ">
                Help
              </h5>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureScreen;
