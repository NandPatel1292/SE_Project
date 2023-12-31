import React, { useState, useEffect } from "react";

const Table = (props) => {
  const { tableHeaders, tableBodyDate } = props;

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-4 mx-4 ">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="  text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="p-4 bg-[#e5b3b391]">
              <div className="flex items-center ">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 "
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>

            {tableHeaders && tableHeaders.length
              ? tableHeaders.map((header, index) => {
                  return (
                    <th scope="col" className="px-6 py-3 bg-[#e5b3b391]">
                      {header}
                    </th>
                  );
                })
              : null}
          </tr>
        </thead>
        <tbody>
          {tableBodyDate && tableBodyDate.length
            ? tableBodyDate.map((item, index) => {
                return (
                  <tr className="bg-[#FFE2E291]  border-b  hover:bg-gray-50 ">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                        />
                        <label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td className="px-6 py-4">{index + 1}</td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {item && item.Product ? item.Product : ""}
                    </th>
                    <td className="px-6 py-4">
                      {item && item.Item ? item.Item : ""}
                    </td>
                    <td className="px-6 py-4">
                      {item && item.Weight ? item.Weight : ""}
                    </td>
                    <td className="px-6 py-4">
                      {item && item.Rate ? item.Rate : ""}
                    </td>
                    <td className="px-6 py-4">
                      {item && item.Disc ? item.Disc : ""}
                    </td>
                    <td className="px-6 py-4">
                      {item && item.Amount ? item.Amount : ""}
                    </td>
                    <td className="px-6 py-4">
                      {item && item.Brand ? item.Brand : ""}
                    </td>
                    <td className="px-6 py-4">
                      {item && item.Category ? item.Category : ""}
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
      <nav
        className="flex items-center flex-column flex-wrap md:flex-row justify-between p-4"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto">
          Showing <span className="font-semibold text-gray-900 ">1-10</span> of{" "}
          <span className="font-semibold text-gray-900 ">1000</span>
        </span>
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 "
            >
              Previous
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 "
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
            >
              5
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 "
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Table;
