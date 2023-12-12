import React, { useState, useEffect } from "react";

import Table from "../../components/Table";

import HomePageWidget from "./HomePageWidget";
import DashboardControls from "./DashboardControls";
import { useSelector } from "react-redux";

// import { useNavigate } from "react-router";
// import { useDispatch, useSelector } from "react-redux";

// import {
//   getBills,
//   selectBills,
//   selectError,
//   selectLoading,
// } from "../features/bill/billSclice";

const AddBill = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  const { products } = useSelector((state) => state.product);

  const [tableBodyDate, setTableBodyDate] = useState([]);
  const [tableHeaders, setTableHeaders] = useState([
    "No.",
    "Barcode",
    "Item Name",
    "Weight",
    "Rate",
    "Disc(%)",
    "Amount",
    "Brand",
    "Category",
  ]);

  const [bill, setBill] = useState({});

  // useEffect(() => {
  //   dispatch(getBills());
  // }, [dispatch]);

  const [product, setProduct] = useState([]);

  return (
    <div className="flex flex-col">
      <div>
        <h1 className="text-2xl items-center text-center m-5 font-semibold">
          Add Bill
        </h1>
        <div className="flex gap-5 ml-4">
          <div className="flex">
            <label
              htmlFor="item_name"
              className="mb-1 mr-1 flex items-center text-sm font-bold text-gray-900 text-left"
            >
              Customer Name
            </label>
            <input
              type="text"
              id="item_name"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#cabdfe80] "
              placeholder="Amul Butter"
              onChange={(e) => handleFieldChange(e, "itemName")}
            />
          </div>
          <div className="flex">
            <label
              htmlFor="item_name"
              className="mb-1 mr-1 flex items-center text-sm font-bold text-gray-900 text-left"
            >
              Customer Phone
            </label>
            <input
              type="text"
              id="item_name"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#cabdfe80] "
              placeholder="Amul Butter"
              onChange={(e) => handleFieldChange(e, "itemName")}
            />
          </div>
        </div>
        <div className="h-1/3 flex gap-6">
          <HomePageWidget products={products} />
          <DashboardControls />
        </div>
      </div>
      <div className="h-2/3 mx-4 mt-4">
        <Table tableHeaders={tableHeaders} tableBodyDate={product} />
      </div>
    </div>
  );
};

export default AddBill;
