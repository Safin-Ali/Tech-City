import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProductsData = createAsyncThunk('productsData/getProductsData',async (params)=>{
    try{
        const res = await axios.get(`https://tech-city.vercel.app/products/${params}`);
        return res.data;
    }
    catch(error){
        return error
    }
});

const productsDataSlice = createSlice({
    name:'productsData',
    initialState:{
        productsData: [],
        isLoading: false,
        error: null,
    },
    extraReducers: builder => {
        builder.addCase(fetchProductsData.pending,state =>{
            state.isLoading = true;
        });
        builder.addCase(fetchProductsData.fulfilled,(state,action) =>{
            state.isLoading = false;
            state.productsData = action.payload;
            state.error = null;
        });
        builder.addCase(fetchProductsData.rejected,(state,action) =>{
            state.isLoading = false;
            state.productsData = null;
            state.error = action.error.message;
        });
    }
});

export const productsDataReducer = productsDataSlice.reducer;