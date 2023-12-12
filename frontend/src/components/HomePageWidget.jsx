import React, { useState } from "react";

const HomePageWidget = () => {
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
    <div className="flex justify-start items-center w-3/5 mt-4 flex-col ml-4">
      <div className="grid gap-6 mb-2 mx-2 mt-2 md:grid-cols-2 w-full ">
        <div className="flex">
          <label
            htmlFor="bar_code"
            className="mb-1 mr-1 flex items-center text-sm font-bold text-gray-900 text-left	"
          >
            Bar Code
          </label>
          <input
            type="text"
            id="bar_code"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-gray-300 "
            placeholder="9852656898"
            onChange={(e) => handleFieldChange(e, "barCode")}
          />
        </div>
        <div className="flex">
          <label
            htmlFor="category"
            className="mb-1 mr-1 flex items-center text-sm font-bold text-gray-900  text-left	"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-300 "
            placeholder="Butter"
            onChange={(e) => handleFieldChange(e, "Category")}
          />
        </div>
        <div className="flex">
          <label
            htmlFor="item_name"
            className="mb-1 mr-1 flex items-center text-sm font-bold text-gray-900 text-left w-1/6"
          >
            Item Name
          </label>
          <input
            type="text"
            id="item_name"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-300 "
            placeholder="Amul Butter"
            onChange={(e) => handleFieldChange(e, "itemName")}
          />
        </div>
        <div className="flex">
          <label
            htmlFor="brand"
            className=" mb-1 mr-1 flex items-center text-sm font-bold text-gray-900 text-left w-1/6"
          >
            Brand
          </label>
          <input
            type="text"
            id="brand"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-gray-300 "
            placeholder="Amul"
            onChange={(e) => handleFieldChange(e, "brand")}
          />
        </div>
        <div className="flex md:grid-cols-1">
          <label
            htmlFor="bar_code"
            className=" mb-1 mr-1 flex items-center text-sm font-bold text-gray-900 text-left	w-1/6"
          >
            Disc(%)
          </label>
          <input
            type="text"
            id="bar_code"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-gray-300 "
            placeholder="0"
            onChange={(e) => handleFieldChange(e, "disc")}
          />
        </div>
      </div>

      {/* down */}
      <div className="flex  ml-12">
        <div className="flex flex-col mx-2 justify-center items-center">
          <label
            htmlFor="bar_code"
            className=" mb-1 mr-1 flex items-center text-sm font-bold text-gray-900 text-left"
          >
            Weight
          </label>
          <div className="flex flex-row">
            <div className="mx-1 align-middle ">G</div>
            <input
              type="text"
              id="bar_code"
              placeholder="0"
              onChange={(e) => handleFieldChange(e, "weight")}
              className="border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-gray-300 "
            />
          </div>
        </div>
        <div className="flex flex-col mx-2 justify-center items-center">
          <label
            htmlFor="bar_code"
            className=" mb-1 mr-1 flex items-center text-sm font-bold text-gray-900  text-left"
          >
            Weight
          </label>
          <div className="flex flex-row">
            <input
              type="text"
              id="bar_code"
              placeholder="0"
              onChange={(e) => handleFieldChange(e, "weight")}
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-gray-300 "
            />
          </div>
        </div>
        <div className="flex flex-col mx-2 justify-center items-center">
          <label
            htmlFor="bar_code"
            className=" mb-1 mr-1 flex items-center text-sm font-bold text-gray-900 text-left"
          >
            Rate
          </label>
          <div className="flex flex-row">
            <div className="mx-1 align-middle">INR</div>
            <input
              type="text"
              id="bar_code"
              placeholder="52"
              onChange={(e) => handleFieldChange(e, "weight")}
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-300 "
            />
          </div>
        </div>
        <div className="flex flex-col mx-2 justify-center items-center">
          <label
            htmlFor="bar_code"
            className=" mb-1 mr-1 flex items-center text-sm font-bold text-gray-900  text-left"
          >
            Disc(%)
          </label>
          <div className="flex flex-row">
            <input
              type="text"
              id="bar_code"
              placeholder="0"
              onChange={(e) => handleFieldChange(e, "weight")}
              className="border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-300 "
            />
          </div>
        </div>
        <div className="flex flex-col mx-2 justify-center items-center">
          <label
            htmlFor="bar_code"
            className=" mb-1 mr-1 flex items-center text-sm font-bold text-gray-900 text-left"
          >
            Amount
          </label>
          <div className="flex flex-row">
            <div className="mx-1 align-middle">INR</div>
            <input
              type="text"
              id="bar_code"
              placeholder="0"
              onChange={(e) => handleFieldChange(e, "amount")}
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-300 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageWidget;
