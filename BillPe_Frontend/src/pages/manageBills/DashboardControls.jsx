import React, { useState } from "react";
import DashboardButtons from "./DashboardButtons";

const DashboardControls = () => {
  const [data, setData] = useState([]);

  const handleFieldChange = (e, key) => {
    if (!key) {
      console.log("No Key or fieldData");
    }
    const dataCopy = data;
    dataCopy[key] = e.target.value;
    setData(dataCopy);
    console.log(data);
  };

  return (
    <div className="flex flex-col justify-start items-center w-2/5 mt-4 mr-4 ">
      <div className="grid gap-3 mb-2 mx-2 mt-2 md:grid-cols-2 w-full">
        <DashboardButtons
          buttonText="Save"
          // callBackFunction={handleAddProduct}
        />
        <DashboardButtons
          buttonText="Delete"
          // callBackFunction={handleDeleteProduct}
        />
        <DashboardButtons
          buttonText="Save & Print"
          // callBackFunction={handleAddProduct}
        />
        <DashboardButtons
          buttonText="WhatsApp"
          // callBackFunction={handleDeleteProduct}
        />
      </div>
      <div className=" m-2 w-full">
        <div
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold  p-4 rounded-xl w-full align-left "
          //   onClick={handleOnclickButton}
        >
          <span className="font-bold  p-4 rounded-xl w-1/2 ">Total</span>
          <span className="bg-gray-200 hover:bg-gray-400 text-red-500 font-bold  p-4 rounded-xl w-3/4 ">
            52.00
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashboardControls;
