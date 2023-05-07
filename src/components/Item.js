import React from "react";
import { Link } from "react-router-dom";


export default function Item({item}){
    return(
        <>
        <div className="text-[#FFFCF0] uppercase bg-[#B68E00] justify-items-center content-center self-center justify-self-center px-4 py-2 m-2">
            <Link to={`/categories/${item}`}>{item}</Link>
            
        </div>
        </>
    )
}