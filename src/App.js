import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import Categories from "./components/Categories";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import ShoppingCart from "./components/ShoppingCart";
import SharedLayout from "./components/SharedLayout";
import { Checkout } from "./components/Checkout";
function App() {
  
  const [cart, setCart] = useState([]);
  const updateCart = (item) => {
      let a = false;
      
      let newArr = [];
      console.log(cart.length)
      if(cart.length !== 0){
          cart.forEach(element => {
          if(element.id === item.id){
            element.value += 1;
            a = true;
          }
        
          newArr.push(element)
        });
      }
      if(a !== true || cart.length === 0){
        const xD = {...item, value: 1}
        newArr.push(xD);
      }
      
      setCart(newArr);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
            <Route index path="/" element={<HomePage  />}/>
            <Route path="/categories" element={<Categories />} />

            <Route path="/categories/:category" element={<ProductList />} />
            <Route path="/categories/:category/:productId" element={<ProductDetail />} />
            <Route path="/cart" element={<ShoppingCart  />} />
            <Route path="/checkout" element={<Checkout />} />
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
    // <div className='h-screen bg-neutral-500'>
    //     <button className='text-gray-500'>SHOP NOW</button>
    // </div>
    
  );
}

export default App;
