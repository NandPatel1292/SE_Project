import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import store from "./app/store";
import { Provider } from "react-redux";

import Login from "./pages/Login.jsx";
import BillProducts from "./pages/BillProducts.jsx";
import AddProduct from "./pages/AddProduct.jsx";
import GenerateBill from "./pages/GenerateBill.jsx";
import ManageFeatures from "./pages/ManageFeatures.jsx";
import SignUp from "./pages/SignUp.jsx";
import AddDetails from "./pages/AddDetails.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Page3 from "./pages/Page3.jsx";
import BillTemplate from "./components/BillTemplate.jsx";
import Report from "./pages/Report.jsx";
import SingleBill from "./pages/SingleBill.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Help from "./pages/Help.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GenerateBill />,
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
      // {
      //   path: "select-plan",
      //   element: <SelectPlan />,
      // },
      {
        path: "",
        element: <App />,
        children: [
          {
            path: "features",
            element: <ManageFeatures />,
          },
          {
            path: "manage-products",
            element: <BillProducts />,
          },
          {
            path: "create-bill",
            element: <GenerateBill />,
          },
          {
            path: "add-product",
            element: <AddProduct />,
          },
          {
            path: "bill-templates",
            element: <BillTemplate />,
          },
          {
            path: "report",
            element: <Report />,
          },
          {
            path: "manage-bill",
            element: <SingleBill />,
          },
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "help",
            element: <Help />,
          },
        ],
      },
    ],
  },
]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="" element={<App />}>
//       <Route path="signup" element={<SignUp />} />
//       <Route path="login" element={<Login />} />
//       <Route path="add-details" element={<AddDetails />} />
//       <Route path="features" element={<ManageFeatures />} />
//       <Route path="page1" element={<BillProducts />} />
//       <Route path="page2" element={<AddProduct />} />
//       <Route path="page3" element={<GenerateBill />} />
//     </Route>
//   )
// );

// store.dispatch(getUserFromStorage());

axios.defaults.baseURL = "http://localhost:3000";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
