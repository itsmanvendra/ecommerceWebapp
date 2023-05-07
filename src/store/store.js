import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from '../features/category/category';
import cartReducer from '../features/cart/cart';
import productDetailReducer from '../features/productDetail/productDetail';
import productListReducer from '../features/productList/productList';
export const store = configureStore({
  reducer: {
    cart : cartReducer,
    category: categoryReducer,
    productList: productListReducer,
    productDetail: productDetailReducer,
  },
})