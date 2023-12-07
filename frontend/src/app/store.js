import { configureStore } from "@reduxjs/toolkit";
import authSclice from "../features/auth/authSclice";

export default configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    auth: authSclice,
  },
});
