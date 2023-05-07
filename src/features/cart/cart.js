import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart : [],
    isLoading : false,
    hasError : false,
}



const cart = createSlice({
    name:'cart',
    initialState,
    reducers : {
        addItem : (state, action) => {
            const itemEle =action.payload;
            // console.log(itemEle);
            // state.cart = state.cart.filter((item) => item.id !== itemEle.id)
            // state.cart
            let a = false;
            let quantityEle = 0;
            for(let i = 0; i<state.cart.length; i++){
                // console.log(state.cart[i].quantity)
                if(itemEle.id === state.cart[i].id){
                    // console.log(state.cart[i].quantity)
                    quantityEle = state.cart[i].quantity;
                    quantityEle += 1;
                    
                    a = true;
                }

            }
            if(a === false){
                state.cart = [...state.cart, itemEle];
            }
            if(a === true){
                state.cart = state.cart.filter((item) => item.id !== itemEle.id );
                itemEle.quantity = quantityEle;
                state.cart = [...state.cart, itemEle];
            }
            
            console.log(state.cart);
        },
        increase : (state, action) => {
            const itemXd = action.payload;
            
            const cart = state.cart.find((item) => item.id === itemXd.id )
            cart.quantity = cart.quantity+1;
            // console.log(cart.quantity)
            
        },
        decrease : (state, action) => {
            const itemXD = action.payload;
            const cart = state.cart.find((item) => item.id === itemXD.id )
            if(cart.quantity === 1){
                state.cart = state.cart.filter((item) => item.id !== itemXD.id );
            }
            else{
                cart.quantity = cart.quantity-1;
            }
            
        }
    },
    
});
export const {addItem, increase, decrease}  = cart.actions;
export default cart.reducer;