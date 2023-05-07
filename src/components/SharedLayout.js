import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

function SharedLayout(){
    return(
        <>
            <div className="bg-[#1B1B1B] p-4 grid grid-cols-1 grid-flow-col gap-0.5">
                <Link className="text-slate-100 text-lg text-bold" to="/">Home🏠</Link>
                <Link className="text-slate-100 text-lg text-bold mx-3"to="/categories">Shop Now 🛍️</Link>
                <Link className="text-slate-100 text-lg text-bold mx-3" to="/cart">Cart🛒</Link>    
            </div>
            <Outlet />
        </>
        
    )
}

export default SharedLayout;