import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProdBrands = createAsyncThunk('product-brands/getProdBrands',async ()=>{
    try{
        const res = await axios.get('https://tech-city.vercel.app/productBrands');
        return res.data;
    }
    catch(error){
        return error
    }
});

const prodBrandsSlice = createSlice({
    name:'product-brands',
    initialState:{
        prodBrands: [],
        isLoading: false,
        error: null,
    },
    extraReducers: builder => {
        builder.addCase(fetchProdBrands.pending,state =>{
            state.isLoading = true;
        });
        builder.addCase(fetchProdBrands.fulfilled,(state,action) =>{
            state.isLoading = false;
            state.prodBrands = action.payload;
            state.error = null;
        });
        builder.addCase(fetchProdBrands.rejected,(state,action) =>{
            state.isLoading = false;
            state.prodBrands = null;
            state.error = action.error.message;
        });
    }
});

export const prodBrandsReducer = prodBrandsSlice.reducer;