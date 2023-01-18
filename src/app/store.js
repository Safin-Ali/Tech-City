import {configureStore} from '@reduxjs/toolkit';
import { categoriesReducer } from './features/categorySlice/categorySlice';

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
    }
})
