import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../components/Table";
import { updateBillAsyncThunk } from "../../features/bill/billSlice";

const ViewAndEditBill = () => {
  const { id } = useParams();
  const { bills } = useSelector((state) => state.bill);

  const singleBill = bills.find((bill) => bill._id === id);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState(singleBill);

  const [isEdit, setIsEdit] = useState(false);

  // const gst = data.gst;
  // const discount = data.discount;
  // const price = data.price;

  // useEffect(() => {
  //   // amount calculation with gst and discount
  //   const discountedPrice = price - (price * discount) / 100;
  //   const sellingPrice = Math.round(
  //     discountedPrice + (discountedPrice * gst) / 100
  //   );
  //   setData({ ...data, sellingPrice: sellingPrice });
  // }, [gst, discount, price]);

  const handelChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

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

  const handelOnClick = async (e) => {
    e.preventDefault();

    if (!data.customerName || !data.customerMobile) return;

    const res = await dispatch(updateBillAsyncThunk(data));

    if (res.meta.requestStatus === "fulfilled") {
      setIsEdit(false);
    }
  };

  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="flex items-center justify-center pl-6">
          <p className="text-2xl font-semibold text-gray-900">
            View bill details
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-7 p-10">
        <div className="flex ">
          <label
            htmlFor="ID"
            className="mb-2 mr-2 flex justify-center items-center text-sm font-medium text-gray-900  text-left	w-1/6"
          >
            ID
          </label>
          <input
            required
            disabled
            type="text"
            id="ID"
            value={data._id}
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-[#FBFF312B] "
            placeholder="12"
          />
        </div>
        <div className="flex">
          <label
            htmlFor="customerName"
            className=" mb-2 mr-2 flex justify-center items-center text-sm font-medium text-gray-900 text-left	w-1/6"
          >
            Customer Name
          </label>
          <input
            required
            disabled={!isEdit}
            type="text"
            name="customerName"
            id="customerName"
            value={data.customerName}
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#FBFF312B]"
            placeholder="Jack Job"
            onChange={handelChange}
          />
        </div>
        <div className="flex">
          <label
            htmlFor="customerMobile"
            className=" mb-2 mr-2 flex justify-center items-center text-sm font-medium text-gray-900  text-left w-1/6"
          >
            Phone Number
          </label>
          <input
            disabled={!isEdit}
            type="number"
            id="customerMobile"
            name="customerMobile"
            value={data.customerMobile}
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#FBFF312B]"
            placeholder="1234567890"
            onChange={handelChange}
          />
        </div>
        <div className="flex">
          <label
            htmlFor="payment_mode"
            className=" mb-2 mr-2 flex justify-center items-center text-sm font-medium text-gray-900  text-left w-1/6"
          >
            Payment Mode
          </label>
          <input
            disabled
            value={data.payment.paymentType}
            type="text"
            id="payment_mode"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#FBFF312B]"
            placeholder="Cash"
          />
        </div>
        <div className="flex">
          <label
            htmlFor="payment_mode"
            className=" mb-2 mr-2 flex justify-center items-center text-sm font-medium text-gray-900  text-left w-1/6"
          >
            Amount
          </label>
          <input
            disabled
            value={data.totalAmount}
            type="text"
            id="payment_mode"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#FBFF312B]"
            placeholder="Cash"
          />
        </div>
      </div>

      <div className="flex justify-between p-3">
        <button
          type="button"
          onClick={isEdit ? handelOnClick : () => setIsEdit(true)}
          className="flex w-32 m-7 justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          {isEdit ? "Save" : "Edit"}
        </button>
        <a
          className="flex items-center gap-3 w-32 m-7 justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 "
          href="#"
        >
          <svg
            className="flex-shrink-0 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="6 9 6 2 18 2 18 9" />
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
            <rect width="12" height="8" x="6" y="14" />
          </svg>
          Print
        </a>
      </div>

      {/* table */}
      <Table tableHeaders={tableHeaders} tableData={data.items} />
    </>
  );
};

export default ViewAndEditBill;
