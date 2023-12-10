import React, { useState } from "react";
import BillpayLogo from "../../components/BillpayLogo";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addDetailsAsyncThunk } from "../../features/user/userSlice";

const AddDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.user);

  const [details, setDetails] = useState({
    orginationName: "",
    address: "",
    gstNumber: "",
    contactNumber: "",
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !details.address ||
      !details.contactNumber ||
      !details.gstNumber ||
      !details.orginationName
    )
      return;

    const res = await dispatch(addDetailsAsyncThunk(details));

    if (res.meta.requestStatus === "fulfilled") {
      navigate("/select-plan");
    }
  };

  return (
    <>
      <BillpayLogo>
        <div className="flex min-h-full h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="w-full text-white mb-5 text-5xl font-bold font-['Inter'] tracking-tight">
              Add Details
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="orginationName"
                  className="block text-white text-3xl font-bold font-['Inter']"
                >
                  Organization Name
                </label>
                <div className="mt-2">
                  <input
                    id="orginationName"
                    name="orginationName"
                    type="text"
                    value={details.orginationName}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-white text-3xl font-bold font-['Inter']"
                >
                  Location of Organization
                </label>
                <div className="mt-2">
                  <input
                    id="address"
                    name="address"
                    type="text"
                    value={details.address}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="gstNumber"
                    className="block text-white text-3xl font-bold font-['Inter']"
                  >
                    GST No
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="gstNumber"
                    name="gstNumber"
                    type="text"
                    value={details.gstNumber}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="contactNumber"
                    className="block text-white text-3xl font-bold font-['Inter']"
                  >
                    Contect No
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="contactNumber"
                    name="contactNumber"
                    type="number"
                    value={details.contactNumber}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="flex w-2/6 mt-10 justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Select Plan
                </button>
              </div>
            </form>
          </div>
        </div>
      </BillpayLogo>
    </>
  );
};

export default AddDetails;
