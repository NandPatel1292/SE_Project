import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import {
    getallbillcall,
    deletebillcall,
    // addbillcall,
    // updatebillcall
} from './billApi'

export const getAllBillsAsyncThunk = createAsyncThunk(
    'bill/getallbill',
    async () => {
        try {
            const res = await getallbillcall();
            const resData = res.data;
            return resData.data;
        } catch (error) {
            console.log(error);
        }
    }
)

export const deleteBillAsyncThunk = createAsyncThunk(
    'bill/deletebill',
    async (id, { rejectWithValue }) => {
        try {
            const res = await deletebillcall(id);
            const resData = res.data;
            return resData.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const addBillAsyncThunk = createAsyncThunk(
    'bill/addbill',
    async (bill, { rejectWithValue }) => {
        console.log(bill);
        try {
            const res = await addbillcall(bill);
            const resData = res.data;
            return resData.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const updateBillAsyncThunk = createAsyncThunk(
    'bill/updatebill',
    async (bill, { rejectWithValue }) => {
        try {
            console.log(bill);
            const res = await updatebillcall(bill._id, bill);
            const resData = res.data;
            return resData.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }

)

const initialState = {
    error: null,
    loading: false,
    bills: [],
}

export const billSlice = createSlice({
    name: 'bill',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            // get all bills
            .addCase(getAllBillsAsyncThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllBillsAsyncThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.bills = action.payload;
                state.error = null;
            })
            .addCase(getAllBillsAsyncThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // delete Bill
            .addCase(deleteBillAsyncThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteBillAsyncThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.bills = state.bills.filter(bill => bill._id !== action.payload._id);
                state.error = null;
            })
            .addCase(deleteBillAsyncThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // add Bill
            .addCase(addBillAsyncThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(addBillAsyncThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.bills.push(action.payload);
                state.error = null;
            })
            .addCase(addBillAsyncThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // update Bill
            .addCase(updateBillAsyncThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateBillAsyncThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.bills = state.bills.map(bill => bill._id === action.payload._id ? action.payload : bill);
                state.error = null;
            })
            .addCase(updateBillAsyncThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    },
})

export const { } = billSlice.actions

export default billSlice.reducer