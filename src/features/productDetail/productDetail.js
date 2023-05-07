import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    item : [],
    isLoading : false,
    hasError : false,
}

export const getItemDetails = createAsyncThunk('productDetail/getItemDetails', (url)=>{
    return fetch(url).then((res) => res.json()).catch((err) => console.error(err));
})

const productDetailSlice = createSlice({
    name: 'productDetail',
    initialState,
    extraReducers:{
        [getItemDetails.pending]:(state) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [getItemDetails.fulfilled]:(state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.item = action.payload;
        },
        [getItemDetails.rejected]:(state) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }

});
export default productDetailSlice.reducer