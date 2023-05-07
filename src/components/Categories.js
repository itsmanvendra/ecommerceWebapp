import React, { useEffect } from "react";
import { getCategory } from "../features/category/category"
import { useSelector, useDispatch } from "react-redux";
import Item from "./Item";

function Categories(){
    // console.log(useSelector((store) => store.category))
    const {category, isLoading, hasError} = useSelector((store) => store.category)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategory());
    }, [dispatch])

    const renderCategory = () => {
        if(isLoading) return <p>Loading.....</p>
        if(hasError) return <p>Error 4️⃣0️⃣4️⃣</p>
        // console.log(category)
        return category.map((item, index) => (<Item key={index} item={item} />))
    }

    return(
        <div className="h-screen bg-[#1B1B1B]">  
            <h1 className="text-[#B68E00]  text-center p-6 font-bold text-3xl">Categories</h1>
            <div className="flex justify-evenly">
                {renderCategory()}
            </div>
            {/* <img src={require('../images/pexels-guillermo-arroyo-2225727.jpg')} alt="img" className="w-100 h-80"/> */}
            
        </div>
        
    )
}


export default Categories



