import { configureStore } from '@reduxjs/toolkit'

import userReducer from '../features/user/userSlice'
import productReducer from '../features/product/productSlice'
import billReducer from '../features/bill/billSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        product: productReducer,
        bill: billReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})