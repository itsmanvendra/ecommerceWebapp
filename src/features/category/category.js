import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    category : [],
    isLoading :false,
    hasError : false,
}

export const getCategory = createAsyncThunk('category/getCategory', () => {
        return fetch('https://fakestoreapi.com/products/categories').then(res => res.json()).catch(err => console.log(err))
})

const categorySlice = createSlice({
    name : 'category',
    initialState,
    extraReducers:{
        [getCategory.pending]:(state) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [getCategory.fulfilled]:(state, action) => {
            // console.log(action);
            state.isLoading = false;
            state.hasError = false;
            state.category = action.payload;

        },
        [getCategory.rejected]:(state) =>{
            state.isLoading = false;
            state.hasError = true;
        }
    }
});

export default categorySlice.reducer;