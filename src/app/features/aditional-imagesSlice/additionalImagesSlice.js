import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAdditionalImgs = createAsyncThunk('additional-images/getBanner-images',async ()=>{
    try{
        const res = await axios.get('https://tech-city.vercel.app/additionalImgs');
        return res.data;
    }
    catch(error){
        return error
    }
});

const additionalImagesSlice = createSlice({
    name:'additional-images',
    initialState:{
        bannerImages: [],
        isLoading: false,
        error: null,
    },
    extraReducers: builder => {
        builder.addCase(fetchAdditionalImgs.pending,state =>{
            state.isLoading = true;
        });
        builder.addCase(fetchAdditionalImgs.fulfilled,(state,action) =>{
            state.isLoading = false;
            state.bannerImages = action.payload.bannerimages;
            state.error = null;
        });
        builder.addCase(fetchAdditionalImgs.rejected,(state,action) =>{
            state.isLoading = false;
            state.bannerImages = null;
            state.error = action.error.message;
        });
    }
});

export const additionalImgsReducer = additionalImagesSlice.reducer;