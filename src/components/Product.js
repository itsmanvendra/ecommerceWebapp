import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../features/cart/cart";
import { Link } from "react-router-dom";



export default function Product({item}){
    const [a, setA] = useState(false);
    const dispatch = useDispatch();
    return(
        <div className="border-2 rounded-xl border-[#735E2F] justify-items-center items-center px-4 py-2 m-2"> 
            <div className = "flex justify-center items-center">
                <img src={item.image} alt={item.title} className="w-24 h-24  " />
            </div> 
            
            <div className="text-center p-2 text-[#FFFCF0] text-md ">
                <Link to={`/categories/${item.category}/${item.id}`}>{item.title}</Link>
                
            </div>
            <div className="flex flex-row justify-between p-2 m-2">
                <p className="p-2 bg-[#FFEECA] rounded-lg justify-self-center self-center">${item.price} </p>
                <button onClick={()=>{
                    setA(true);
                const newItem = {
                    img : item.image,
                    title: item.title,
                    id : item.id,
                    price: item.price,
                    quantity : 1,
                }
                dispatch(addItem(newItem))
            }} className="p-2 bg-[#B68E00] rounded-lg text-[#FFEECA]">{a ? "Added ✔️":"Add to Cart" }</button>
            </div>
            
        </div>
    )
}