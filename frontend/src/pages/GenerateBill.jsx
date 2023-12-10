import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import HomePageWidget from "../components/HomePageWidget";
import DashboardControls from "../components/DashboardControls";

const GenerateBill = () => {
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

  useEffect(() => {
    //static data can be removed
    setTableBodyDate([
      {
        Product: "9852656898",
        Item: "Amul Butter",
        Weight: "50g",
        Rate: "52",
        Disc: "0",
        Amount: "52",
        Brand: "Amul",
        Category: "Butter",
      },
      {
        Product: "7894561230",
        Item: "Milk",
        Weight: "1L",
        Rate: "25",
        Disc: "5",
        Amount: "23.75",
        Brand: "DairyCo",
        Category: "Dairy",
      },
    ]);
  }, []);
  return (
    <div className="flex flex-col">
      <div>
        <div className="h-1/3 flex gap-6">
          <HomePageWidget />
          <DashboardControls />
        </div>
      </div>
      <div className="h-2/3 mx-4 mt-4">
        <Table tableHeaders={tableHeaders} tableBodyDate={tableBodyDate} />
      </div>
    </div>
  );
};

export default GenerateBill;
