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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />}>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="page1" element={<BillProducts />} />
      <Route path="page2" element={<AddProduct />} />
      <Route path="page3" element={<GenerateBill />} />
      <Route path="page4" element={<ManageFeatures />} />
    </Route>
  )
);

axios.defaults.baseURL = "http://localhost:3000";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
