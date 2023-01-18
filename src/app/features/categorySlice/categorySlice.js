import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategories = createAsyncThunk('categories/getCategories',async ()=>{
    try{
        const res = await axios.get('https://tech-city.vercel.app/categories');
        return res.data;
    }
    catch(error){
        return error
    }
});

const categoriesSlice = createSlice({
    name:'categories',
    initialState:{
        categoriesData: [],
        isLoading: false,
        error: null,
    },
    extraReducers: builder => {
        builder.addCase(fetchCategories.pending,state =>{
            state.isLoading = true;
        });
        builder.addCase(fetchCategories.fulfilled,(state,action) =>{
            state.isLoading = false;
            state.categoriesData = action.payload;
            state.error = null;
        });
        builder.addCase(fetchCategories.rejected,(state,action) =>{
            state.isLoading = false;
            state.categoriesData = null;
            state.error = action.error.message;
        });
    }
});

export const categoriesReducer = categoriesSlice.reducer;
