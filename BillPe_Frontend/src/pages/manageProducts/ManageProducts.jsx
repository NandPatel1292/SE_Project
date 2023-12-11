import React, { useState, useEffect } from "react";

import SearchBox from "../../components/SearchBox";
import Table from "../../components/Table";

import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { getAllProductsAsyncThunk } from "../../features/product/productSlice";

const ManageProducts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error, products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAllProductsAsyncThunk());
  }, [dispatch]);

  const tableHeaders = [
    "No.",
    "Barcode",
    "Item Name",
    "Weight",
    "Rate",
    "Disc(%)",
    "Amount",
    "Brand",
    "Category",
  ];

  return (
    <div>
      <SearchBox />
      <div className="flex flex-row ml-6 pb-4 gap-5">
        <Link
          to="/add-product"
          className="text-white bg-[#5228f5ff] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
        >
          Add Product
        </Link>
      </div>
      <Table tableHeaders={tableHeaders} tableData={products} />
    </div>
  );
};

export default ManageProducts;
