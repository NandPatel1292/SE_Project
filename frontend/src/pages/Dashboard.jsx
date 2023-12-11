import React from "react";
import dashboard from "../images/dashboardImg.png";
import { useDispatch, useSelector } from "react-redux";
import { use } from "echarts";
import { selectUser } from "../features/auth/authSclice";
import { MdEdit } from "react-icons/md";

const Dashboard = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  return (
    <>
      <div className="flex flex-row h-screen">
        <div className="basis-1/2 pl-10 pt-10">
          <img src={dashboard} alt="profile" className="w-[25rem] h-[25rem]" />
          <div className="flex flex-col  justify-center text-center gap-3">
            <h1 className="text-2xl font-bold w-[25rem]">{user.user.name}</h1>
            <h1 className="text-2xl font-bold w-[25rem]">{user.user.email}</h1>
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
              <MdEdit size={25} />
              <input
                type="email"
                id="email"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-[#FBFF312B] "
                placeholder="12"
                onChange={(e) => handleFieldChange(e, "barCode")}
              />
            </div>
            <div className="flex gap-3 flex-row justify-center items-center">
              <label
                htmlFor="organization_name"
                className="flex justify-center items-center text-base font-semibold text-gray-900  text-left	w-1/5"
              >
                Organization Name
              </label>
              <MdEdit size={25} />
              <input
                type="text"
                id="organization_name"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-[#FBFF312B] "
                placeholder="12"
                onChange={(e) => handleFieldChange(e, "barCode")}
              />
            </div>
            <div className="flex gap-3 flex-row justify-center items-center">
              <label
                htmlFor="subscription"
                className="flex justify-center items-center text-base font-semibold text-gray-900  text-left	w-1/5"
              >
                Subscription
              </label>
              <MdEdit size={25} />
              <input
                type="text"
                id="subscription"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-[#FBFF312B] "
                placeholder="12"
                onChange={(e) => handleFieldChange(e, "barCode")}
              />
            </div>
            <div className="flex gap-3 flex-row justify-center items-center">
              <label
                htmlFor="location"
                className="flex justify-center items-center text-base font-semibold text-gray-900  text-left	w-1/5"
              >
                Location of Counter
              </label>
              <MdEdit size={25} />
              <input
                type="text"
                id="location"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-[#FBFF312B] "
                placeholder="12"
                onChange={(e) => handleFieldChange(e, "barCode")}
              />
            </div>
            <div className="flex gap-3 flex-row justify-center items-center">
              <label
                htmlFor="contact_no"
                className="flex justify-center items-center text-base font-semibold text-gray-900  text-left	w-1/5"
              >
                Contact No
              </label>
              <MdEdit size={25} />
              <input
                type="number"
                id="contact_no"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-[#FBFF312B] "
                placeholder="12"
                onChange={(e) => handleFieldChange(e, "barCode")}
              />
            </div>
            <div className="flex gap-3 flex-row justify-center items-center">
              <label
                htmlFor="gst_no"
                className="flex justify-center items-center text-base font-semibold text-gray-900  text-left	w-1/5"
              >
                GST No
              </label>
              <MdEdit size={25} />
              <input
                type="text"
                id="gst_no"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-[#FBFF312B] "
                placeholder="12"
                onChange={(e) => handleFieldChange(e, "barCode")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
