import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";

import App from "./App.jsx";
import Login from "./pages/login/Login.jsx";
import Landing from "./pages/lendingPage/LandingPage.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import SignUp from "./pages/signup/Signup.jsx";
import AddDetails from "./pages/addDetails/AddDetails.jsx";
import SelectPlan from "./pages/addDetails/SelectPlan.jsx";
import FeatureScreen from "./pages/featureScreen/FeatureScreen.jsx";

import { store } from "./app/store.js";
import { getUserFromStorage } from "./features/user/userSlice.js";

// Router creation
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <SignUp />,
//       },
//       {
//         path: "login",
//         element: <Login />,
//       },
//       {
//         path: "signup",
//         element: <SignUp />,
//       },
//       // {
//       //   path: "",
//       //   element: <Landing />,
//       // },
//       {
//         path: "",
//         element: <PrivateRoute />,
//         children: [
//           {
//             path: "features",
//             element: <FeatureScreen />,
//           },
//           {
//             path: "add-details",
//             element: <AddDetails />,
//           },
//           {
//             path: "select-plan",
//             element: <SelectPlan />,
//           },
//         ],
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "",
    element: <PrivateRoute />,
    children: [
      {
        path: "add-details",
        element: <AddDetails />,
      },
      {
        path: "select-plan",
        element: <SelectPlan />,
      },
      {
        path: "",
        element: <App />,
        children: [
          {
            path: "features",
            element: <FeatureScreen />,
          },
        ],
      },
    ],
  },
]);

store.dispatch(getUserFromStorage());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
