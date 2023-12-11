import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addProductAsyncThunk } from "../../features/product/productSlice";

const ViewAndEditProduct = () => {
  const { id } = useParams();
  const { products } = useSelector((state) => state.product);
  const product = products.find((product) => product._id === id);

  console.log(product);
  console.log(products);
  console.log(id);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState(product);

  const gst = data.gst;
  const discount = data.discount;
  const price = data.price;

  useEffect(() => {
    // amount calculation with gst and discount
    const discountedPrice = price - (price * discount) / 100;
    const sellingPrice = Math.round(
      discountedPrice + (discountedPrice * gst) / 100
    );
    setData({ ...data, sellingPrice: sellingPrice });
  }, [gst, discount, price]);

  const handelChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmitClick = async (e) => {
    e.preventDefault();

    if (
      !data.barCode ||
      !data.itemName ||
      !data.category ||
      !data.brand ||
      !data.price ||
      !data.description ||
      !data.discount ||
      !data.gst ||
      !data.sellingPrice
    )
      return;

    const res = await dispatch(addProductAsyncThunk(data));

    if (res.meta.requestStatus === "fulfilled") {
      navigate("/manage-products");
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center flex-col gap-3 mt-10">
        {/* title */}
        <div className="flex justify-center items-center flex-col gap-3">
          <h1 className="text-2xl font-medium">Add Product</h1>
        </div>
        <form
          className="grid gap-12 mb-6 mx-6 mt-8 md:grid-cols-2 w-3/4"
          onSubmit={onSubmitClick}
        >
          <div className="flex">
            <label
              htmlFor="barCode"
              className=" mb-2 mr-2 flex items-center text-sm font-medium text-gray-900  text-left	w-1/6"
            >
              Bar Code
            </label>
            <input
              value={data.barCode}
              required
              type="text"
              name="barCode"
              id="barCode"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-[#FBFF312B] "
              placeholder="9852656898"
              onChange={handelChange}
            />
          </div>
          <div className="flex">
            <label
              htmlFor="category"
              className=" mb-2 mr-2 flex items-center text-sm font-medium text-gray-900 text-left	w-1/6"
            >
              Category
            </label>
            <input
              value={data.category}
              required
              type="text"
              id="category"
              name="category"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#FBFF312B]"
              placeholder="Butter"
              onChange={handelChange}
            />
          </div>
          <div className="flex">
            <label
              htmlFor="itemName"
              className=" mb-2 mr-2 flex items-center text-sm font-medium text-gray-900  text-left w-1/6"
            >
              Item Name
            </label>
            <input
              value={data.itemName}
              required
              type="text"
              id="itemName"
              name="itemName"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#FBFF312B]"
              placeholder="Amul Butter"
              onChange={handelChange}
            />
          </div>
          <div className="flex">
            <label
              htmlFor="brand"
              className=" mb-2 mr-2 flex items-center text-sm font-medium text-gray-900  text-left w-1/6"
            >
              Brand
            </label>
            <input
              value={data.brand}
              required
              type="text"
              id="brand"
              name="brand"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#FBFF312B]"
              placeholder="Amul"
              onChange={handelChange}
            />
          </div>
          <div className="flex gap-4">
            <label
              htmlFor="priceType"
              className=" mb-2 mr-2 flex items-center text-sm font-medium text-gray-900  text-left w-1/6"
            >
              Price Type
            </label>

            <div className="flex items-center gap-4">
              <input
                type="radio"
                id="priceType_1"
                name="priceType"
                // className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#FBFF312B]"
                placeholder="Amul"
                value="false"
                checked={data.priceType === "false" ? true : false}
                onChange={handelChange}
              />
              <label
                htmlFor="priceType_1"
                // className=" mb-2 mr-2 flex items-center text-sm font-medium text-gray-900  text-left w-1/6"
              >
                Weighted
              </label>
            </div>

            <div className="flex items-center gap-4">
              <input
                type="radio"
                id="priceType_2"
                name="priceType"
                value="true"
                // className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#FBFF312B]"
                placeholder="Amul"
                checked={data.priceType === "true" ? true : false}
                onChange={handelChange}
              />
              <label
                htmlFor="priceType_2"
                // className=" mb-2 mr-2flex items-center text-sm font-medium text-gray-900  text-left w-1/6"
              >
                Quantity
              </label>
            </div>
          </div>
          <div className="flex">
            <label
              htmlFor="discount"
              className=" mb-2 mr-2 flex items-center text-sm font-medium text-gray-900  text-left	w-1/6"
            >
              Disc(%)
            </label>
            <input
              value={data.discount}
              required
              type="number"
              id="discount"
              name="discount"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-[#FBFF312B]"
              placeholder="0"
              onChange={handelChange}
            />
          </div>
          <div className="flex">
            <label
              htmlFor="weight"
              className=" mb-2 mr-2 flex items-center text-sm font-medium text-gray-900  text-left	w-1/6"
            >
              Weight
            </label>
            <input
              value={data.weight}
              required
              type="number"
              id="weight"
              name="weight"
              disabled={data.priceType === "false" ? false : true}
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-[#FBFF312B]"
              placeholder="50"
              onChange={handelChange}
            />
          </div>
          <div className="flex">
            <label
              htmlFor="gst"
              className=" mb-2 mr-2 flex items-center text-sm font-medium text-gray-900  text-left	w-1/6"
            >
              GST(%)
            </label>
            <input
              value={data.gst}
              required
              type="text"
              id="gst"
              name="gst"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-[#FBFF312B]"
              placeholder="0"
              onChange={handelChange}
            />
          </div>
          <div className="flex">
            <label
              htmlFor="price"
              className=" mb-2 mr-2 flex items-center text-sm font-medium text-gray-900  text-left w-1/6"
            >
              Price
            </label>
            <input
              value={data.price}
              required
              type="number"
              id="price"
              name="price"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-[#FBFF312B]"
              placeholder="52"
              onChange={handelChange}
            />
          </div>
          <div className="flex">
            <label
              htmlFor="sellingPrice"
              className=" mb-2 mr-2 flex items-center text-sm font-medium text-gray-900 text-left w-1/6"
            >
              Amount
            </label>
            <input
              required
              type="number"
              id="sellingPrice"
              name="sellingPrice"
              disabled
              value={data.sellingPrice}
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-[#FBFF312B]"
              placeholder="52"
              onChange={handelChange}
            />
          </div>

          <div className="flex">
            <label
              htmlFor="description"
              className=" mb-2 mr-2 flex items-center text-sm font-medium text-gray-900 text-left w-1/6"
            >
              Description
            </label>
            <textarea
              value={data.description}
              required
              id="description"
              name="description"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-[#FBFF312B]"
              placeholder="Describe your product here..."
              onChange={handelChange}
            />
          </div>

          {/* add button */}
          <div className="flex justify-center items-center col-span-2">
            <button
              type="submit"
              className="inline-flex justify-center items-center px-10 py-2 text-sm font-medium text-white bg-[#5228f5ff] border border-transparent rounded-md hover:bg-blue-600 focus:outline-none"
              onClick={onSubmitClick}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ViewAndEditProduct;
