import React, { useState } from "react";
import Button from "../components/Button";

const Page3 = () => {
  const intialStateObjectData = {
    barCode: "",
    Category: "",
    itemName: "",
    brand: "",
    disc: "",
    weight: "",
    CGST: "",
    price: "",
    SGST: "",
    amount: "",
    IGST: "",
  };

  const [data, setData] = useState(intialStateObjectData);
  const handleFieldChange = (e, key) => {
    if (!key) {
      console.log("No Key or fieldData");
    }
    const dataCopy = data;
    dataCopy[key] = e.target.value;
    setData(dataCopy);
    console.log(data);
  };

  const onSubmitClick = () => {
    console.log("Submitted the Form");
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <div class="grid gap-12 mb-6 mx-6 mt-8 md:grid-cols-2 w-3/4">
          <div className="flex">
            <label
              for="bar_code"
              class="block mb-2 mr-2 flex items-center text-sm font-medium text-gray-900 dark:text-white text-left	w-1/6"
            >
              Bar Code
            </label>
            <input
              type="text"
              id="bar_code"
              class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-[#FBFF312B] "
              placeholder="9852656898"
              onChange={(e) => handleFieldChange(e, "barCode")}
            />
          </div>
          <div className="flex">
            <label
              for="category"
              class="block mb-2 mr-2 flex items-center text-sm font-medium text-gray-900 dark:text-white text-left	w-1/6"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-[#FBFF312B]"
              placeholder="Butter"
              onChange={(e) => handleFieldChange(e, "Category")}
            />
          </div>
          <div className="flex">
            <label
              for="item_name"
              class="block mb-2 mr-2 flex items-center text-sm font-medium text-gray-900 dark:text-white text-left w-1/6"
            >
              Item Name
            </label>
            <input
              type="text"
              id="item_name"
              class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-[#FBFF312B]"
              placeholder="Amul Butter"
              onChange={(e) => handleFieldChange(e, "itemName")}
            />
          </div>
          <div className="flex">
            <label
              for="brand"
              class="block mb-2 mr-2 flex items-center text-sm font-medium text-gray-900 dark:text-white text-left w-1/6"
            >
              Brand
            </label>
            <input
              type="text"
              id="brand"
              class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-[#FBFF312B]"
              placeholder="Amul"
              onChange={(e) => handleFieldChange(e, "brand")}
            />
          </div>
          <div className="flex">
            <label
              for="bar_code"
              class="block mb-2 mr-2 flex items-center text-sm font-medium text-gray-900 dark:text-white text-left	w-1/6"
            >
              Disc(%)
            </label>
            <input
              type="text"
              id="bar_code"
              class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-[#FBFF312B]"
              placeholder="0"
              onChange={(e) => handleFieldChange(e, "disc")}
            />
          </div>
          <div className="flex">
            <label
              for="category"
              class="block mb-2 mr-2 flex items-center text-sm font-medium text-gray-900 dark:text-white text-left	w-1/6"
            >
              Weight
            </label>
            <input
              type="text"
              id="category"
              class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-[#FBFF312B]"
              placeholder="50"
              onChange={(e) => handleFieldChange(e, "weight")}
            />
          </div>
          <div className="flex">
            <label
              for="category"
              class="block mb-2 mr-2 flex items-center text-sm font-medium text-gray-900 dark:text-white text-left	w-1/6"
            >
              CGST(%)
            </label>
            <input
              type="text"
              id="category"
              class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-[#FBFF312B]"
              placeholder="0"
              onChange={(e) => handleFieldChange(e, "CGST")}
            />
          </div>
          <div className="flex">
            <label
              for="brand"
              class="block mb-2 mr-2 flex items-center text-sm font-medium text-gray-900 dark:text-white text-left w-1/6"
            >
              Price
            </label>
            <input
              type="text"
              id="brand"
              class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-[#FBFF312B]"
              placeholder="52"
              onChange={(e) => handleFieldChange(e, "price")}
            />
          </div>
          <div className="flex">
            <label
              for="brand"
              class="block mb-2 mr-2 flex items-center text-sm font-medium text-gray-900 dark:text-white text-left w-1/6"
            >
              SGST(%)
            </label>
            <input
              type="text"
              id="brand"
              class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-[#FBFF312B]"
              placeholder="0"
              onChange={(e) => handleFieldChange(e, "SGST")}
            />
          </div>
          <div className="flex">
            <label
              for="item_name"
              class="block mb-2 mr-2 flex items-center text-sm font-medium text-gray-900 dark:text-white text-left w-1/6"
            >
              Amount
            </label>
            <input
              type="text"
              id="item_name"
              class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-[#FBFF312B]"
              placeholder="52"
              onChange={(e) => handleFieldChange(e, "amount")}
            />
          </div>
          <div className="flex">
            <label
              for="item_name"
              class="block mb-2 mr-2 flex items-center text-sm font-medium text-gray-900 dark:text-white text-left w-1/6"
            >
              IGST(%)
            </label>
            <input
              type="text"
              id="item_name"
              class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-[#FBFF312B]"
              placeholder="0"
              onChange={(e) => handleFieldChange(e, "IGST")}
            />
          </div>
        </div>
      </div>
      <Button buttonText="Save Product" callBackFunction={onSubmitClick} />
    </div>
  );
};

export default Page3;
