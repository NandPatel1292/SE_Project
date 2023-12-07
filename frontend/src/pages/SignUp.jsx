import React, { useState } from "react";
import BillpayLogo from "../components/BillpayLogo";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { register, selectIsAuthenticated } from "../features/auth/authSclice";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const checkAuth = useSelector(selectIsAuthenticated);

  const [signUpForm, setSignUpForm] = useState({
    name: "",
    email: "",
    password: "",
    Organization: "",
    location: "",
    GST_No: null,
    contect_No: null,
  });
  const [next1, setNext1] = useState(true);
  const [next2, setNext2] = useState(true);

  const handleChange = (e) => {
    setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(signUpForm));
    navigate("/login");
  };

  return (
    <>
      <BillpayLogo>
        <div className="flex min-h-full h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="w-full text-white mb-5 text-5xl font-bold font-['Inter'] tracking-tight">
              Sign Up
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {next1 && (
                <>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-white text-3xl font-bold font-['Inter']"
                    >
                      Owner Name
                    </label>
                    <div className="mt-2">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={signUpForm.name}
                        onChange={handleChange}
                        required
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-white text-3xl font-bold font-['Inter']"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={signUpForm.email}
                        onChange={handleChange}
                        required
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-white text-3xl font-bold font-['Inter']"
                      >
                        Password
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        value={signUpForm.password}
                        onChange={handleChange}
                        required
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="click"
                      className="flex w-2/6 mt-10 justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      onClick={() => setNext1(!next1)}
                    >
                      Next
                    </button>
                  </div>
                </>
              )}

              {!next1 && next2 && (
                <>
                  <div>
                    <label
                      htmlFor="Organization"
                      className="block text-white text-3xl font-bold font-['Inter']"
                    >
                      Organization Name
                    </label>
                    <div className="mt-2">
                      <input
                        id="Organization"
                        name="Organization"
                        type="text"
                        value={signUpForm.Organization}
                        onChange={handleChange}
                        required
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-white text-3xl font-bold font-['Inter']"
                    >
                      Location of Organization
                    </label>
                    <div className="mt-2">
                      <input
                        id="location"
                        name="location"
                        type="text"
                        value={signUpForm.location}
                        onChange={handleChange}
                        required
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="GST_No"
                        className="block text-white text-3xl font-bold font-['Inter']"
                      >
                        GST No
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        id="GST_No"
                        name="GST_No"
                        type="text"
                        value={signUpForm.GST_No}
                        onChange={handleChange}
                        required
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="contect_No"
                        className="block text-white text-3xl font-bold font-['Inter']"
                      >
                        Contect No
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        id="contect_No"
                        name="contect_No"
                        type="number"
                        value={signUpForm.contect_No}
                        onChange={handleChange}
                        required
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  {/* <div className="flex flex-row"> */}
                  <div className="flex justify-between">
                    <button
                      type="click"
                      className="flex w-2/6 mt-10 justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      onClick={() => setNext1(!next1)}
                    >
                      Back
                    </button>

                    <button
                      type="click"
                      className="flex w-2/6 mt-10 justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      onClick={() => setNext2(!next2)}
                    >
                      Next
                    </button>
                  </div>

                  {/* </div> */}
                </>
              )}

              {!next2 && (
                <div className="flex justify-start">
                  <button
                    type="click"
                    className="flex w-2/6 mt-10 justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    onClick={() => setNext2(!next2)}
                  >
                    Back
                  </button>
                </div>
              )}

              {!next1 && !next2 && (
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Sign Up
                </button>
              )}
            </form>
          </div>
        </div>
      </BillpayLogo>
    </>
  );
};

export default SignUp;
