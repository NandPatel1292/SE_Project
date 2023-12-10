import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import {
    loginCall,
    signupcall,
    adddetailscall,
    subscribeplancall,
    logoutcall
} from './userApi'

export const loginAsyncThunk = createAsyncThunk(
    'user/login',
    async (data, { rejectWithValue }) => {
        try {
            const res = await loginCall(data);
            const resData = res.data;
            return resData.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const signupAsyncThunk = createAsyncThunk(
    'user/register',
    async (data, { rejectWithValue }) => {
        try {
            const res = await signupcall(data);
            const resData = res.data;
            return resData.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const addDetailsAsyncThunk = createAsyncThunk(
    'user/addDetails',
    async (data, { rejectWithValue }) => {
        try {
            const res = await adddetailscall(data);
            const resData = res.data;
            return resData.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const subscribePlanAsyncThunk = createAsyncThunk(
    'user/subscribePlan',
    async (data, { rejectWithValue }) => {
        try {
            console.log(data);
            const res = await subscribeplancall(data);
            const resData = res.data;
            return resData.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const logOutUserAsyncThunk = createAsyncThunk(
    'user/logout',
    async () => {
        try {
            const res = await logoutcall();
            const resData = res.data;
            return resData.data;
        } catch (error) {
            return error;
        }
    }
)

// export const signupWithGoogleAsyncThunk = createAsyncThunk(
//     'user/google',
//     async (data, { rejectWithValue }) => {
//         try {
//             const res = await signupWithGoogleCall(data);
//             const resData = res.data;
//             return resData.data;
//         } catch (error) {
//             return rejectWithValue(error);
//         }
//     }
// )

// export const updateUserAsyncThunk = createAsyncThunk(
//     'user/update',
//     async (data, { rejectWithValue }) => {
//         try {
//             const res = await updateUserCall(data);
//             const resData = res.data;
//             return resData.data;
//         } catch (error) {
//             return rejectWithValue(error);
//         }
//     }
// )

// export const deleteAccountAsyncThunk = createAsyncThunk(
//     'user/delete',
//     async (data, { rejectWithValue }) => {
//         try {
//             const res = await deleteUserCall(data);
//             const resData = res.data;
//             return resData;
//         } catch (error) {
//             return rejectWithValue(error);
//         }
//     }
// )


const initialState = {
    error: null,
    loading: false,
    currentUser: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // get user from local storage
        getUserFromStorage: (state) => {
            localStorage.getItem('user') && (state.currentUser = JSON.parse(localStorage.getItem('user')));
        },

        // clear state
        // clearError: (state) => {
        //     state.error = null;
        // },
    },
    extraReducers: (builder) => {
        builder
            // login
            .addCase(loginAsyncThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginAsyncThunk.fulfilled, (state, action) => {
                // local storage
                localStorage.setItem('user', JSON.stringify(action.payload));

                state.loading = false;
                state.currentUser = action.payload;
                state.error = null;
            })
            .addCase(loginAsyncThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // signup
            .addCase(signupAsyncThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(signupAsyncThunk.fulfilled, (state, action) => {
                // local storage
                localStorage.setItem('user', JSON.stringify(action.payload));

                state.loading = false;
                state.currentUser = action.payload;
                state.error = null;
            })
            .addCase(signupAsyncThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // add details
            .addCase(addDetailsAsyncThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(addDetailsAsyncThunk.fulfilled, (state, action) => {
                // local storage
                localStorage.setItem('user', JSON.stringify(action.payload));

                state.loading = false;
                state.currentUser = action.payload;
                state.error = null;
            })
            .addCase(addDetailsAsyncThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Subscription plan call
            .addCase(subscribePlanAsyncThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(subscribePlanAsyncThunk.fulfilled, (state, action) => {
                // local storage
                localStorage.setItem('user', JSON.stringify(action.payload));

                state.loading = false;
                state.currentUser = action.payload;
                state.error = null;
            })
            .addCase(subscribePlanAsyncThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })


            // sign out
            .addCase(logOutUserAsyncThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(logOutUserAsyncThunk.fulfilled, (state) => {
                localStorage.removeItem('user');

                state.loading = false;
                state.currentUser = null;
                state.error = null;
            })
            .addCase(logOutUserAsyncThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

        // // signup with google
        // .addCase(signupWithGoogleAsyncThunk.pending, (state) => {
        //     state.loading = true;
        // })
        // .addCase(signupWithGoogleAsyncThunk.fulfilled, (state, action) => {
        //     // local storage
        //     localStorage.setItem('user', JSON.stringify(action.payload));

        //     state.loading = false;
        //     state.currentUser = action.payload;
        //     state.error = null;
        // })
        // .addCase(signupWithGoogleAsyncThunk.rejected, (state, action) => {
        //     state.loading = false;
        //     state.error = action.payload;
        // })

        // // delete account
        // .addCase(deleteAccountAsyncThunk.pending, (state) => {
        //     state.loading = true;
        // })
        // .addCase(deleteAccountAsyncThunk.fulfilled, (state) => {
        //     localStorage.removeItem('user');

        //     state.loading = false;
        //     state.currentUser = null;
        //     state.error = null;
        // })
        // .addCase(deleteAccountAsyncThunk.rejected, (state, action) => {
        //     state.loading = false;
        //     state.error = action.payload;
        // })

        // // update user
        // .addCase(updateUserAsyncThunk.pending, (state) => {
        //     state.loading = true;
        // })
        // .addCase(updateUserAsyncThunk.fulfilled, (state, action) => {
        //     // local storage
        //     localStorage.setItem('user', JSON.stringify(action.payload));

        //     state.loading = false;
        //     state.currentUser = action.payload;
        //     state.error = null;
        // })
        // .addCase(updateUserAsyncThunk.rejected, (state, action) => {
        //     state.loading = false;
        //     state.error = action.payload;
        // })

        // 
    },
})

export const { getUserFromStorage } = userSlice.actions

export default userSlice.reducer