import React from "react";
import GenerateBill1 from "../images/generateBill1.png";
import help from "../images/help.png";
import manageBill from "../images/manageBill.png";
import manageProducts from "../images/manageProducts.png";
import reports from "../images/reports.png";
import template from "../images/template.png";
import { Link } from "react-router-dom";

const ManageFeatures = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-3/4">
        <div className="flex mb-4 gap-8">
          <Link
            to={"/create-bill"}
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
            to={"/report"}
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
            to={"/manage-bill"}
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
            to={"/manage-products"}
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
            to={"/bill-templates"}
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
            to={"/help"}
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

export default ManageFeatures;
