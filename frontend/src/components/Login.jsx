import React from "react";

const Login = () => {
  return (
    <>
      <div className="flex h-screen bg-white">
        {/* flex flex-row w-2/4 relative justify-center items-center */}
        <div className=" flex flex-row min-h-full flex-1 justify-center items-center px-6 py-12 lg:px-8">
          <span className="w-56 h-11 text-blue-800 text-8xl font-bold font-['Inter'] ">
            BILL
          </span>
          <span className="w-52 h-11 text-red-600 text-opacity-80 text-8xl font-bold font-['Inter'] ">
            PAY
          </span>
        </div>
        <div className="flex bg-blue-900 w-2/4 justify-center items-center">
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="w-full text-white mb-5 text-5xl font-bold font-['Inter'] tracking-tight">
                Log in
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
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
                      required
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                    <div className="text-sm  my-2">
                      <a
                        href="#"
                        className="font-semibold text-red-600 hover:text-red-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Log in
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm text-gray-500">
                Not a member?{" "}
                <a
                  href="#"
                  className="font-semibold mx-2 leading-6 text-white hover:text-gray-500"
                >
                  Start a 14 day free trial
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
