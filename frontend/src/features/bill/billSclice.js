import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getBills = createAsyncThunk("bill/getBills", async () => {
  try {
    const response = await axios.get("/api/bill/get");
    return response.data.data;
  } catch (error) {
    return error.response.data.message;
  }
});

export const addBill = createAsyncThunk("bill/addBill", async (bill) => {
  try {
    const response = await axios.post("/api/bill/create", bill);
    return response.data.data;
  } catch (error) {
    return error.response.data.message;
  }
});

export const deleteBill = createAsyncThunk("bill/deleteBill", async (id) => {
  try {
    const response = await axios.delete(`/api/bill/delete/${id}`);
    return response.data.data;
  } catch (error) {
    return error.response.data.message;
  }
});

export const updateBill = createAsyncThunk("bill/updateBill", async (bill) => {
  try {
    const response = await axios.put(`/api/bill/update/${bill.id}`, bill);
    return response.data.data;
  } catch (error) {
    return error.response.data.message;
  }
});

const initialState = {
  bills: [],
  error: null,
  loading: false,
};

export const billSlice = createSlice({
  name: "bill",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getBills.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBills.fulfilled, (state, action) => {
        state.bills = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getBills.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      .addCase(addBill.pending, (state) => {
        state.loading = true;
      })
      .addCase(addBill.fulfilled, (state, action) => {
        state.bills.push(action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(addBill.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      .addCase(deleteBill.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteBill.fulfilled, (state, action) => {
        state.bills = state.bills.filter((bill) => bill.id !== action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteBill.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      .addCase(updateBill.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateBill.fulfilled, (state, action) => {
        state.bills = state.bills.map((bill) =>
          bill.id === action.payload.id ? action.payload : bill
        );
        state.loading = false;
      })
      .addCase(updateBill.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { clearError } = billSlice.actions;

export const selectBills = (state) => state.bill.bills;
export const selectError = (state) => state.bill.error;
export const selectLoading = (state) => state.bill.loading;

export default billSlice.reducer;
