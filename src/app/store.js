import {configureStore} from '@reduxjs/toolkit';
import { additionalImgsReducer } from './features/aditional-imagesSlice/additionalImagesSlice';
import { categoriesReducer } from './features/categorySlice/categorySlice';
import { prodBrandsReducer } from './features/product-brands/prodBrandsSlice';
import { toggleBoolReducer } from './features/toggleBoolean-Slice/toggleBoolSlice';

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        addtionalImgs: additionalImgsReducer,
        productBrands:prodBrandsReducer,
        toggleBool: toggleBoolReducer,
    }
})
