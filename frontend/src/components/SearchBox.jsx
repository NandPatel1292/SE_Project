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
    <div class="grid gap-6 m-6 md:grid-cols-4">
      <div>
        <label
          for="bar_code"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left	"
        >
          Bar Code
        </label>
        <input
          type="text"
          id="bar_code"
          class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-[#FBFF312B]"
          placeholder=""
          onChange={handleBarcodeChange}
        />
      </div>
      <div>
        <label
          for="item_name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
        >
          Item Name
        </label>
        <input
          type="text"
          id="item_name"
          class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-[#FBFF312B]"
          placeholder="Amul Butter"
          onChange={handleItemNameChange}
        />
      </div>
      <div>
        <label
          for="category"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left	"
        >
          Category
        </label>
        <input
          type="text"
          id="category"
          class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-[#FBFF312B]"
          placeholder="Butter"
          onChange={handleCategoryChange}
        />
      </div>
      <div>
        <label
          for="brand"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
        >
          Brand
        </label>
        <input
          type="text"
          id="brand"
          class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-[#FBFF312B]"
          placeholder=""
          onChange={handleBrandChange}
        />
      </div>
    </div>
  );
};

export default SearchBox;
