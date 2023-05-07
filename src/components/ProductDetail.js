import React, {useEffect} from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getItemDetails } from "../features/productDetail/productDetail";
import SingleProduct from "./SingleProduct";
import { Link } from "react-router-dom";

function ProductDetail(){
    const {item, isLoading, hasError} = useSelector((state) => state.productDetail)
    const dispatch = useDispatch();
    let {productId}= useParams();
    // console.log(useParams());
    // console.log(productList);
    useEffect(() => {
        dispatch(getItemDetails(`https://fakestoreapi.com/products/${productId}`))
    }, [dispatch])
    // console.log(item);
    const renderItem = () => {
        if(isLoading) return <p>Loading.....</p>
        if(hasError) return <p>Error 4️⃣0️⃣4️⃣</p>
        return <SingleProduct key={item.id} item={item} />
    }
    // if(loading) return <p>Loading.....</p>
    // if(hasError) return <p>Error 4️⃣0️⃣4️⃣</p>
    return(
        <div className="min-h-screen bg-[#1B1B1B]">  
            {/* <h1 className="text-[#B68E00]  text-center p-6 font-bold text-3xl">{category}</h1> */}
            <div>
            {renderItem()}
            </div>
            {/* <img src={require('../images/pexels-guillermo-arroyo-2225727.jpg')} alt="img" className="w-100 h-80"/> */}
            <Link to="/categories" className="px-4 py-2 mx-5 my-1 bg-[#B68E00] rounded-lg text-[#FFEECA]">Back</Link>
        </div>
        
    )
}


export default ProductDetail