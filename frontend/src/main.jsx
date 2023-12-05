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

import Login from "./components/Login.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Login />}>
      <Route path="login" element={<Login />} />
    </Route>
  )
);

axios.defaults.baseURL = "http://localhost:3000";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);