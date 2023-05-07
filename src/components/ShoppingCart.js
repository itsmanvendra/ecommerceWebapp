import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import CartItem from "./CartItem";
function ShoppingCart(){
    // console.log(useSelector((state) => state.cart.cart));
    const {cart, isLoading, hasError} = useSelector((state) => state.cart)
    // const dispatch = useDispatch();
    // useEffect(()=>{
    //     dispatch(getcartItem());
    // // }, [dispatch])
    // const cartDetail = {...cart};
    const renderCart = () => {
        if (cart.length === 0) return <h1 className="text-center text-3xl  emptyCart ">Your Cart is Empty!!</h1>
        return cart.map((item) => (<CartItem key={item.id} item={item}/>))
    }
    
    return (
    
            <div className="min-h-screen bg-[#1B1B1B] ">
                <div className="productList">
                    {renderCart()}
                </div>
                <div className={(cart.length === 0)? `hidden` : `buttonCheckOut`}>
                    <button className="morphing-3"><Link to="/checkout">CheckOut</Link></button>
                </div>
                
            </div>
            
        
    )
}

export default ShoppingCart;