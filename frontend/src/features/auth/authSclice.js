import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isAuthenticated: false,
  error: null,
  loading: false,
};

export const login = createAsyncThunk("auth/login", async (user) => {
  try {
    const response = await axios.post("/api/auth/login", user);
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    return error.response.data.message;
  }
});

export const register = createAsyncThunk("auth/register", async (user) => {
  try {
    const response = await axios.post("/api/auth/register", user);
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    return error.response.data.message;
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    const response = await axios.get("/api/auth/logout");
    localStorage.removeItem("user");
    return response.data;
  } catch (error) {
    return error.response.data.message;
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.isAuthenticated = false;
        state.loading = false;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
        state.isAuthenticated = false;
        state.loading = false;
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.loading = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { clearError } = authSlice.actions;

export const selectUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectError = (state) => state.auth.error;
export const selectLoading = (state) => state.auth.loading;

export default authSlice.reducer;
