import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../features/cart/cart";
import { Link } from "react-router-dom";

export default function SingleProduct({item}){
    // console.log(item)
    const dispatch = useDispatch();
    const [a, setA] = useState(false);
    return (
        <div className=" p-4 justify-center content-center flex flex-col">
            <h1 className="p-3 text-center text-2xl font-bold text-slate-300">{item.title}</h1>
            <p className="p-3 text-center text-lg leading-7 font-medium text-slate-100">{item.description}</p>
            <div className = "flex justify-center items-center p-5">
                <img src={item.image} alt={item.title} className="w-60 h-60  " />
            </div> 
            <div className="p-3 flex flex-row flex-wrap justify-center content-center">    
                <p className="p-2 mx-5 bg-[#735E2F] rounded-lg justify-self-center self-center text-lg leading-7 font-medium text-slate-100">Price : $ {item.price}</p>
                {/* <p className="p-2 mx-5 bg-[#FFEECA] rounded-lg justify-self-center self-center text-lg leading-7 font-medium ">Rating : {item.rating.rate}/5</p> */}
            </div>

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
            }} className={ `${a ? 'hidden' : 'buttonDisplay'}`} >Add to Cart</button>
            <Link to="/cart" className={ `${a ? 'buttonDisplay' : 'hidden'}`}>Move to Cart</Link>
        </div>
        
    )
}