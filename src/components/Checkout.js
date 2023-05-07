import React from "react";

export function Checkout(){
    return(
        <div className="confirm">
            <div className="paymentInfo">Payment successful</div>
            <div className="orderConfirm">Thanks for ordering</div>
            <div className="text-slate-500 text-lg">
                We appreciate your order, we’re currently processing it. So hang tight and we’ll send you confirmation very soon!
            </div>
        </div>
    )
}