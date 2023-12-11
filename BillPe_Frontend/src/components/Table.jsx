import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProductAsyncThunk } from "../features/product/productSlice";

const Table = ({ tableHeaders, tableData }) => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(10);
  const [startingIndex, setStartingIndex] = useState(0);
  const [endingIndex, setEndingIndex] = useState(10);

  useEffect(() => {
    // only display 10 products
    if (tableData && tableData.length) {
      setProducts(tableData.slice(startingIndex, endingIndex));
      setTotalPages(Math.ceil(tableData.length / productsPerPage));
    }
  }, [startingIndex, endingIndex, tableData]);

  // change the product when clicked on next
  const handleNext = (e) => {
    e.preventDefault();
    setCurrentPage(currentPage + 1);
    setStartingIndex(startingIndex + 10);
    setEndingIndex(endingIndex + 10);
  };

  // change the product when clicked on previous
  const handlePrevious = (e) => {
    e.preventDefault();
    setCurrentPage(currentPage - 1);
    setStartingIndex(startingIndex - 10);
    setEndingIndex(endingIndex - 10);
  };

  // delete product
  const handelDeleteProduct = async (e, id) => {
    e.preventDefault();
    const res = await dispatch(deleteProductAsyncThunk(id));

    if (res.meta.requestStatus === "fulfilled") {
      console.log("deleted successfully");
    }
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-4 mx-4 ">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="  text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            {/* <th scope="col" className="p-4 bg-[#e5b3b391]">
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
            </th> */}

            {tableHeaders && tableHeaders.length
              ? tableHeaders.map((header, index) => {
                  return (
                    <th
                      scope="col"
                      className="px-6 py-3 bg-[#cabdfe80]"
                      key={index}
                    >
                      {header}
                    </th>
                  );
                })
              : null}
            {tableHeaders && tableHeaders.length ? (
              <th scope="col" className="p-4 bg-[#cabdfe80]">
                <div className="flex items-center ">Delete</div>
              </th>
            ) : null}
          </tr>
        </thead>

        {/* product table */}
        <tbody>
          {products && products.length
            ? products.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-[#d7cefc64]  border-b  hover:bg-gray-50 "
                  >
                    {/* <td className="w-4 p-4">
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
                    </td> */}
                    <td className="px-6 py-4">{startingIndex + index + 1}</td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {item && item.barCode ? item.barCode : ""}
                    </th>
                    <td className="px-6 py-4">
                      <Link to={`/product/${item._id}`}>
                        {item && item.itemName ? item.itemName : ""}
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      {item && item.Weight ? item.Weight : "1"}
                    </td>
                    <td className="px-6 py-4">
                      {item && item.price ? item.price : ""}
                    </td>
                    <td className="px-6 py-4">
                      {item && item.discount ? item.discount : ""}
                    </td>
                    <td className="px-6 py-4">
                      {item && item.sellingPrice ? item.sellingPrice : ""}
                    </td>
                    <td className="px-6 py-4">
                      {item && item.brand ? item.brand : ""}
                    </td>
                    <td className="px-6 py-4">
                      {item && item.category ? item.category : ""}
                    </td>

                    {/* delete option */}
                    <td className="w-4 p-4">
                      <div
                        className="flex items-center justify-center text-center cursor-pointer hover:border rounded hover:border-red-200"
                        onClick={(e) => handelDeleteProduct(e, item._id)}
                      >
                        <MdDelete className="text-lg text-red-500" />
                      </div>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>

      {/*  */}
      <nav
        className="flex items-center flex-column flex-wrap md:flex-row justify-between p-4"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto">
          Showing{" "}
          <span className="font-semibold text-gray-900 ">
            {startingIndex + 1}-
            {tableData && tableData.length < 10
              ? tableData.length
              : endingIndex}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 ">
            {tableData && tableData.length}
          </span>
        </span>
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
          {/* previous button */}
          <li>
            <button
              type="button"
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className="flex items-center cursor-pointer justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 "
            >
              Previous
            </button>
          </li>

          {
            // loop to display the page numbers
            Array.from({ length: totalPages }, (_, i) => {
              return (
                <li key={i}>
                  <a
                    href="#"
                    className={`flex items-center justify-center px-3 h-8 border ${
                      currentPage === i + 1
                        ? "text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 "
                        : "leading-tight text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                    }`}
                  >
                    {i + 1}
                  </a>
                </li>
              );
            })
          }

          {/* next button */}
          <li>
            <button
              type="button"
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="flex items-center cursor-pointer justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 "
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Table;
