import React from "react";

const SearchBox = () => {
  const handleBarcodeChange = () => {
    console.log("Changed Barcode");
  };
  const handleItemNameChange = () => {
    console.log("Changed Item");
  };
  const handleCategoryChange = () => {
    console.log("Changed Category");
  };
  const handleBrandChange = () => {
    console.log("Changed Brand");
  };
  return (
    <div className="grid gap-6 m-6 md:grid-cols-4">
      <div>
        <label
          htmlFor="bar_code"
          className="block mb-2 text-sm font-medium text-gray-900 text-left"
        >
          Bar Code
        </label>
        <input
          type="text"
          id="bar_code"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#FBFF312B]"
          placeholder=""
          onChange={handleBarcodeChange}
        />
      </div>
      <div>
        <label
          htmlFor="item_name"
          className="block mb-2 text-sm font-medium text-gray-900 text-left"
        >
          Item Name
        </label>
        <input
          type="text"
          id="item_name"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#FBFF312B]"
          placeholder="Amul Butter"
          onChange={handleItemNameChange}
        />
      </div>
      <div>
        <label
          htmlFor="category"
          className="block mb-2 text-sm font-medium text-gray-900 text-left	"
        >
          Category
        </label>
        <input
          type="text"
          id="category"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#FBFF312B]"
          placeholder="Butter"
          onChange={handleCategoryChange}
        />
      </div>
      <div>
        <label
          htmlFor="brand"
          className="block mb-2 text-sm font-medium text-gray-900 text-left"
        >
          Brand
        </label>
        <input
          type="text"
          id="brand"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#FBFF312B]"
          placeholder=""
          onChange={handleBrandChange}
        />
      </div>
    </div>
  );
};

export default SearchBox;
