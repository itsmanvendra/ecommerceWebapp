import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase } from "../features/cart/cart";
import { decrease } from "../features/cart/cart";
import { Link } from "react-router-dom";



export default function CartItem({item}){
    // const increaseCounter = (e) => {
    //     console.log(e);
    // }
    const dispatch = useDispatch();
    // const decreaseCounter = (e) => {
    //     console.log(item.value);
    // }
    return(
        <div className="border-2 rounded-xl border-[#735E2F] justify-items-center items-center px-4 py-2 m-2"> 
            <h1 className="p-3 text-center text-2xl font-bold text-slate-300">{item.title}</h1>
            <div className = "flex justify-center items-center">
                <img src={item.img} alt={item.title} className="w-24 h-24  " />
            </div> 
            
            <div className="text-center p-2 text-[#FFFCF0] text-md flex justify-center items-center">
                <div className="p-2  rounded-lg justify-self-center self-center bg-gray-400 m-2" onClick={()=>{
                    const newItem = {
                        img : item.img,
                        title: item.title,
                        id : item.id,
                        price: item.price,
                        quantity : 1,
                    }
                    
                    dispatch(decrease(newItem))
                }}>➖</div>
                <p className="p-2 bg-[#735E2F] rounded-lg justify-self-center self-center">Quantity : {item.quantity}</p>
                <div className="p-2  rounded-lg justify-self-center self-center bg-gray-400 m-2" onClick={() =>{
                    const newItem = {
                        img : item.img,
                        title: item.title,
                        id : item.id,
                        price: item.price,
                        quantity : 1,
                    }
                    
                    dispatch(increase(newItem))
                }
                }>➕</div>
            </div>
            <div className="text-center p-2 text-[#FFFCF0] text-md flex justify-center items-center">
                <p className="p-2 bg-[#B68E00] rounded-lg justify-self-center self-center">Price : ${item.price} </p>
                
            </div>
            
        </div>
    )
}