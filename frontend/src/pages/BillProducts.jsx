import React, { useState, useEffect } from "react";
import SearchBox from "../components/SearchBox";
import Table from "../components/Table";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../features/auth/authSclice";

const BillProducts = () => {
  const checkAuth = useSelector(selectIsAuthenticated);

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
      {
        Product: "6543219870",
        Item: "Bread",
        Weight: "400g",
        Rate: "18",
        Disc: "0",
        Amount: "18",
        Brand: "BakeryGood",
        Category: "Bread",
      },
      {
        Product: "1234567890",
        Item: "Eggs",
        Weight: "Dozen",
        Rate: "2",
        Disc: "0",
        Amount: "24",
        Brand: "FarmFresh",
        Category: "Eggs",
      },
      {
        Product: "5678901234",
        Item: "Orange Juice",
        Weight: "1L",
        Rate: "15",
        Disc: "2",
        Amount: "14.70",
        Brand: "CitrusBlend",
        Category: "Beverages",
      },
      {
        Product: "1122334455",
        Item: "Pasta",
        Weight: "500g",
        Rate: "8",
        Disc: "0",
        Amount: "8",
        Brand: "ItalianTaste",
        Category: "Pasta",
      },
      {
        Product: "9988776655",
        Item: "Tomatoes",
        Weight: "1kg",
        Rate: "3",
        Disc: "0",
        Amount: "3",
        Brand: "FreshProduce",
        Category: "Vegetables",
      },
      {
        Product: "4433221100",
        Item: "Chicken Breast",
        Weight: "500g",
        Rate: "12",
        Disc: "5",
        Amount: "11.40",
        Brand: "MeatMaster",
        Category: "Meat",
      },
    ]);
  }, []);

  const handleAddProduct = () => {
    console.log("Added Product");
  };
  const handleDeleteProduct = () => {
    console.log("Added Product");
  };
  return (
    <div>
      <div className="text-green-600">{checkAuth ? "nand" : "patel"}</div>
      <SearchBox />
      <Table tableHeaders={tableHeaders} tableBodyDate={tableBodyDate} />

      <div className="flex">
        <Button buttonText="Add Product" callBackFunction={handleAddProduct} />
        <Button
          buttonText="Delete Product"
          callBackFunction={handleDeleteProduct}
        />
      </div>
    </div>
  );
};

export default BillProducts;
