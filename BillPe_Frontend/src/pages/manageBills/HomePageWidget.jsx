import React, { useState } from "react";

const HomePageWidget = ({
  products,
  handelDropDownChange,
  selectedProduct,
}) => {
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
            disabled
            value={selectedProduct[0]?.barCode}
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-[#cabdfe80] "
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
            disabled
            value={selectedProduct[0]?.category}
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#cabdfe80] "
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
          {/* <input
            type="text"
            id="item_name"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#cabdfe80] "
            placeholder="Amul Butter"
            onChange={(e) => handleFieldChange(e, "itemName")}
          /> */}
          <select
            id="countries"
            className="bg-[#cabdfe80] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handelDropDownChange}
          >
            {/* <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option> */}
            {products.map((product) => {
              return (
                <option value={product._id} key={product._id}>
                  {product.itemName} - {product.barCode}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex">
          <label
            htmlFor="brand"
            className=" mb-1 mr-1 flex items-center text-sm font-bold text-gray-900 text-left w-1/6"
          >
            Brand
          </label>
          <input
            disabled
            type="text"
            id="brand"
            value={selectedProduct[0]?.brand}
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-[#cabdfe80] "
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
            value={selectedProduct[0]?.discount}
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-[#cabdfe80] "
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
          <div className="flex flex-row items-center">
            <div className="mx-1 align-middle ">G</div>
            <input
              type="text"
              id="bar_code"
              placeholder="0"
              onChange={(e) => handleFieldChange(e, "weight")}
              className="border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-[#cabdfe80] "
            />
          </div>
        </div>
        <div className="flex flex-col mx-2 justify-center items-center">
          <label
            htmlFor="bar_code"
            className=" mb-1 mr-1 flex items-center text-sm font-bold text-gray-900  text-left"
          >
            Pic
          </label>
          <div className="flex flex-row">
            <input
              type="text"
              id="bar_code"
              placeholder="0"
              onChange={(e) => handleFieldChange(e, "weight")}
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-[#cabdfe80] "
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
          <div className="flex flex-row items-center">
            <div className="mx-1 align-middle">₹</div>
            <input
              disabled
              type="text"
              id="bar_code"
              placeholder="52"
              value={selectedProduct[0]?.price}
              onChange={(e) => handleFieldChange(e, "weight")}
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#cabdfe80] "
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
              disabled
              type="text"
              id="bar_code"
              placeholder="0"
              value={selectedProduct[0]?.discount}
              onChange={(e) => handleFieldChange(e, "weight")}
              className="border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#cabdfe80] "
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
          <div className="flex flex-row items-center">
            <div className="mx-1 align-middle">₹</div>
            <input
              disabled
              type="text"
              id="bar_code"
              placeholder="0"
              value={selectedProduct[0]?.sellingPrice}
              onChange={(e) => handleFieldChange(e, "amount")}
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#cabdfe80] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageWidget;
