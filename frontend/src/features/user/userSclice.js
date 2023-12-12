import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  error: null,
  loading: false,
};

export const getUser = createAsyncThunk("user/getUser", async (_) => {
  try {
    const response = await axios.get("/api/user");
    return response.data;
  } catch (error) {
    return error.response.data.message;
  }
});

export const updateUserDetails = createAsyncThunk(
  "user/updateDetails",
  async (userData) => {
    try {
      const response = await axios.patch(
        "/api/user/change-user-details",
        userData
      );
      return response.data;
    } catch (error) {
      return error.response.data.message;
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(updateUserDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUserDetails.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(updateUserDetails.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { clearError } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectError = (state) => state.user.error;
export const selectLoading = (state) => state.user.loading;

export default userSlice.reducer;
