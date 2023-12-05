import React from "react";
import generateBill from "../images/generateBill.png";
import help from "../images/help.png";
import manageBill from "../images/manageBill.png";
import manageProducts from "../images/manageProducts.png";
import reports from "../images/reports.png";
import template from "../images/template.png";

const ManageFeatures = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-3/4">
        <div class="flex mb-4 gap-8">
          <div class="w-1/3 flex flex-col items-center justify-center max-w-sm bg-blue-800 border border-gray-200 rounded-3xl	 shadow dark:bg-gray-800 dark:border-gray-700">
            <img class="rounded-t-lg w-1/3 mt-6" src={generateBill} alt="" />

            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-medium tracking-tight text-gray-100 dark:text-white">
                  Generate Bill
                </h5>
              </a>
            </div>
          </div>
          <div class="w-1/3 flex flex-col items-center justify-center max-w-sm bg-blue-800 border border-gray-200 rounded-3xl	 shadow dark:bg-gray-800 dark:border-gray-700">
            <img class="rounded-t-lg w-1/3 mt-6" src={reports} alt="" />

            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-medium tracking-tight text-gray-100 dark:text-white">
                  Sales Report
                </h5>
              </a>
            </div>
          </div>
          <div class="w-1/3 flex flex-col items-center justify-center max-w-sm bg-blue-800 border border-gray-200 rounded-3xl	 shadow dark:bg-gray-800 dark:border-gray-700">
            <img class="rounded-t-lg w-1/3 mt-6" src={manageBill} alt="" />

            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-medium tracking-tight text-gray-100 dark:text-white">
                  Manage Bill
                </h5>
              </a>
            </div>
          </div>
        </div>

        <div class="flex mb-4 gap-8">
          <div class="w-1/3 flex flex-col items-center justify-center max-w-sm bg-blue-800 border border-gray-200 rounded-3xl	 shadow dark:bg-gray-800 dark:border-gray-700">
            <img class="rounded-t-lg w-1/3 mt-6" src={manageProducts} alt="" />

            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-medium tracking-tight text-gray-100 dark:text-white">
                  Manage Products
                </h5>
              </a>
            </div>
          </div>
          <div class="w-1/3 flex flex-col items-center justify-center max-w-sm bg-blue-800 border border-gray-200 rounded-3xl	 shadow dark:bg-gray-800 dark:border-gray-700">
            <img class="rounded-t-lg w-1/3 mt-6" src={template} alt="" />

            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-medium tracking-tight text-gray-100 dark:text-white">
                  Bill Template
                </h5>
              </a>
            </div>
          </div>
          <div class="w-1/3 flex flex-col items-center justify-center max-w-sm bg-blue-800 border border-gray-200 rounded-3xl	 shadow dark:bg-gray-800 dark:border-gray-700">
            <img class="rounded-t-lg w-1/3 mt-6" src={help} alt="" />

            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-medium tracking-tight text-gray-100 dark:text-white">
                  Help
                </h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageFeatures;
