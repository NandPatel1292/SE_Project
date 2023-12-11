import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import {
    getallproductcall,
    deleteproductcall,
    addproductcall,
    updateproductcall
} from './productApi'

export const getAllProductsAsyncThunk = createAsyncThunk(
    'product/getallproduct',
    async () => {
        try {
            const res = await getallproductcall();
            const resData = res.data;
            return resData.data;
        } catch (error) {
            console.log(error);
        }
    }
)

export const deleteProductAsyncThunk = createAsyncThunk(
    'product/deleteproduct',
    async (id, { rejectWithValue }) => {
        try {
            const res = await deleteproductcall(id);
            const resData = res.data;
            return resData.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const addProductAsyncThunk = createAsyncThunk(
    'product/addproduct',
    async (product, { rejectWithValue }) => {
        console.log(product);
        try {
            const res = await addproductcall(product);
            const resData = res.data;
            return resData.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const updateProductAsyncThunk = createAsyncThunk(
    'product/updateproduct',
    async (product, { rejectWithValue }) => {
        try {
            console.log(product);
            const res = await updateproductcall(product._id, product);
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
    products: [],
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            // get all products
            .addCase(getAllProductsAsyncThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllProductsAsyncThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
                state.error = null;
            })
            .addCase(getAllProductsAsyncThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // delete product
            .addCase(deleteProductAsyncThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteProductAsyncThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.products = state.products.filter(product => product._id !== action.payload._id);
                state.error = null;
            })
            .addCase(deleteProductAsyncThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // add product
            .addCase(addProductAsyncThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(addProductAsyncThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.products.push(action.payload);
                state.error = null;
            })
            .addCase(addProductAsyncThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // update product
            .addCase(updateProductAsyncThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateProductAsyncThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.products = state.products.map(product => product._id === action.payload._id ? action.payload : product);
                state.error = null;
            })
            .addCase(updateProductAsyncThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    },
})

export const { } = productSlice.actions

export default productSlice.reducer