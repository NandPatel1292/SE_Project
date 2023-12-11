import React, { useState, useEffect } from "react";

import Table from "../../components/Table";

import HomePageWidget from "./HomePageWidget";
import DashboardControls from "./DashboardControls";

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

  // useEffect(() => {
  //   dispatch(getBills());
  // }, [dispatch]);

  const bill = [];

  return (
    <div className="flex flex-col">
      <div>
        <div className="h-1/3 flex gap-6">
          <HomePageWidget />
          <DashboardControls />
        </div>
      </div>
      <div className="h-2/3 mx-4 mt-4">
        <Table tableHeaders={tableHeaders} tableBodyDate={bill.items} />
      </div>
    </div>
  );
};

export default AddBill;
