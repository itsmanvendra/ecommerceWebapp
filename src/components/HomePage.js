import React from "react";
import { Link } from "react-router-dom";
// const onClickHandler = () =>{
//     return (
//         <Link to="/categories" />
//     )
// }

export default function HomePage(){
    return (
        <div className="h-screen bg-[#1B1B1B]">
            <h1 className="text-slate-500 text-center p-6 font-bold text-3xl" >Welcome to Shoppify</h1>
            <div className="btn">
                <Link to="/categories" className="morphing-3 px-4 py-3 text-gray-100 text-lg font-semibold text-center" >Show More</Link>
                <Link to="/knowmore"  className="morphing-3 px-4 py-3 text-gray-100 text-lg font-semibold text-center">About Us</Link>
            </div>
            
        </div>
        
    )
}