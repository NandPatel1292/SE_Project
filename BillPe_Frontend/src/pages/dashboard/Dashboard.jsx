import React from "react";
import { useDispatch, useSelector } from "react-redux";

import dashboard from "../../assets/dashboardImg.png";
import { updateUserAsyncThunk } from "../../features/user/userSlice";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.user);

  const [user, setUser] = React.useState(currentUser);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const [isEdit, setIsEdit] = React.useState(false);

  const handleClick = async (e) => {
    const res = await dispatch(updateUserAsyncThunk(user));

    if (res.meta.requestStatus === "fulfilled") {
      setIsEdit(false);
    }
  };

  return (
    <>
      <div className="flex flex-row h-screen p-10">
        <div className="basis-1/2 p-10">
          <img src={dashboard} alt="profile" className="w-[25rem] h-[25rem]" />
          <div className="flex flex-col  justify-center text-center gap-3">
            <h1 className="text-2xl font-bold w-[25rem]">{user.name}</h1>
            <h1 className="text-2xl font-bold w-[25rem]">{user.email}</h1>
          </div>
        </div>
        <div className="basis-full py-10">
          <div className="flex flex-col gap-7 p-10">
            <div className="flex gap-3 flex-row justify-center items-center">
              <label
                htmlFor="email"
                className="flex justify-center items-center text-base font-semibold text-gray-900  text-left w-1/5"
              >
                Email
              </label>
              <input
                disabled={!isEdit}
                type="email"
                id="email"
                name="email"
                value={user.email}
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-[#FBFF312B] "
                placeholder="12"
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-3 flex-row justify-center items-center">
              <label
                htmlFor="orginationName"
                className="flex justify-center items-center text-base font-semibold text-gray-900  text-left	w-1/5"
              >
                Organization Name
              </label>
              <input
                disabled={!isEdit}
                type="text"
                id="orginationName"
                name="orginationName"
                value={user.orginationName}
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-[#FBFF312B] "
                placeholder="12"
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-3 flex-row justify-center items-center">
              <label
                htmlFor="subscription"
                className="flex justify-center items-center text-base font-semibold text-gray-900  text-left	w-1/5"
              >
                Subscription
              </label>
              <input
                type="text"
                id="subscription"
                disabled
                name="subscription"
                value={user.isOnPremium ? "Premium" : "Basic"}
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-[#FBFF312B] "
                placeholder="12"
              />
            </div>
            <div className="flex gap-3 flex-row justify-center items-center">
              <label
                htmlFor="address"
                className="flex justify-center items-center text-base font-semibold text-gray-900  text-left	w-1/5"
              >
                Location of Counter
              </label>
              <input
                disabled={!isEdit}
                type="text"
                id="address"
                name="address"
                value={user.address}
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-[#FBFF312B] "
                placeholder="12"
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-3 flex-row justify-center items-center">
              <label
                htmlFor="contactNumber"
                className="flex justify-center items-center text-base font-semibold text-gray-900  text-left	w-1/5"
              >
                Contact No
              </label>
              <input
                type="number"
                id="contactNumber"
                name="contactNumber"
                disabled={!isEdit}
                value={user.contactNumber}
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-[#FBFF312B] "
                placeholder="12"
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-3 flex-row justify-center items-center">
              <label
                htmlFor="gstNumber"
                className="flex justify-center items-center text-base font-semibold text-gray-900  text-left	w-1/5"
              >
                GST No
              </label>
              <input
                type="text"
                id="gstNumber"
                value={user.gstNumber}
                disabled={!isEdit}
                name="gstNumber"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-[#FBFF312B] "
                placeholder="12"
                onChange={handleChange}
              />
            </div>
            <button
              type="button"
              onClick={isEdit ? () => handleClick() : () => setIsEdit(true)}
              className="text-white bg-[#5228f5ff] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              {isEdit ? "Save" : "Edit"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
