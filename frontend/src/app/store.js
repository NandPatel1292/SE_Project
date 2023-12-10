import { configureStore } from "@reduxjs/toolkit";
import authSclice from "../features/auth/authSclice";
import userSclice from "../features/user/userSclice";

export default configureStore({
  reducer: {
    auth: authSclice,
    user: userSclice,
  },
});
