import React, { useState, useEffect } from "react";

import SearchBox from "../../components/SearchBox";
import Table from "../../components/BillTable";

import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { getAllBillsAsyncThunk } from "../../features/bill/billSlice";

const ManageBills = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error, bills } = useSelector((state) => state.bill);

  useEffect(() => {
    dispatch(getAllBillsAsyncThunk());
  }, [dispatch]);

  const tableHeaders = [
    "No.",
    "Customer Name",
    "Phone No",
    "Billing Date",
    "Payment Method",
    "View Purchase Details",
  ];

  return (
    <div>
      <SearchBox />
      {/* <div className="flex flex-row ml-6 pb-4 gap-5">
        <Link
          to="/add-product"
          className="text-white bg-[#5228f5ff] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
        >
          Add Bills
        </Link>
      </div> */}
      <Table tableHeaders={tableHeaders} tableData={bills} />
    </div>
  );
};

export default ManageBills;
