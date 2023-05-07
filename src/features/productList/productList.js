import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
    catergoryItem : [],
    isLoading: false,
    hasError : false,
}
export const getCategoryItem = createAsyncThunk('productList/getCategoryItem', async (url) => {
    return fetch(url).then((res) => res.json()).catch((err) => console.error(err));
})

const productListSlice = createSlice({
    name:'productList',
    initialState,
    extraReducers:{
        [getCategoryItem.pending]:(state) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [getCategoryItem.fulfilled]:(state, action) => {
            console.log(action);
            state.isLoading = false;
            state.hasError = false;
            state.catergoryItem = action.payload;

        },
        [getCategoryItem.rejected]:(state) =>{
            state.isLoading = false;
            state.hasError = true;
        }
    }
});

export default productListSlice.reducer;