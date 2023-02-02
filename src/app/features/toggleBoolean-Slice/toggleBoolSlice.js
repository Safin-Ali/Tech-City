import {createSlice} from '@reduxjs/toolkit';

const toggleBoolSlice = createSlice({
    name:'toggle-boolean',
    initialState:{
        loadPost:false,
        visibleModal: false,
    },
    reducers:{
        toggleLoadPost(state,{payload}){
            state.loadPost = payload
        }
    }
});

export const toggleBoolReducer = toggleBoolSlice.reducer;
export const {toggleLoadPost} = toggleBoolSlice.actions