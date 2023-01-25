import {configureStore} from '@reduxjs/toolkit';
import { additionalImgsReducer } from './features/aditional-imagesSlice/additionalImagesSlice';
import { categoriesReducer } from './features/categorySlice/categorySlice';
import { prodBrandsReducer } from './features/product-brands/prodBrandsSlice';

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        addtionalImgs: additionalImgsReducer,
        productBrands:prodBrandsReducer
    }
})
