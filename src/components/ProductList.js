import React, {useEffect} from "react";
import { useParams } from "react-router";
import { getCategoryItem } from "../features/productList/productList";
import { useSelector, useDispatch } from "react-redux";
import Product from "./Product";
import { Link } from "react-router-dom";

function ProductList(){
    let {category}= useParams();
    const dispatch = useDispatch();
    const {catergoryItem, hasError, isLoading} = useSelector((state) => state.productList)
    // console.log(useSelector((state) => state.productList.catergoryItem))
    // let url = ;
    // console.log(url);

    // console.log(useParams());
    // console.log(productList);
    useEffect(() => {
        dispatch(getCategoryItem(`https://fakestoreapi.com/products/category/${category}`));
    }, [dispatch])
    // console.log(catergoryItem);
    const renderC = () => {
        if(isLoading) return <p className="text-slate-500">Loading.....</p>
        if(hasError) return <p className="text-slate-500">Error 4️⃣0️⃣4️⃣</p>
        
        return catergoryItem.map((item, index) => (<Product key={item.id} item={item}/>))
    }
    // if(loading) return <p>Loading.....</p>
    // if(hasError) return <p>Error 4️⃣0️⃣4️⃣</p>
    return(
        <div className="min-h-screen bg-[#1B1B1B]">  
            <h1 className="text-[#B68E00]  text-center p-6 font-bold text-3xl">{category}</h1>
            <div className="productList ">
            {renderC()}
            </div>
            {/* <img src={require('../images/pexels-guillermo-arroyo-2225727.jpg')} alt="img" className="w-100 h-80"/> */}
            <Link to="/categories" className="px-4 py-2 mx-5 my-1 bg-[#B68E00] rounded-lg text-[#FFEECA]">Back</Link>
        </div>
        
    )
}
// wait
// ok


export default ProductList

// function ProductList(){
//     let {category} = useParams();
//     return(
//         <h1>{category}</h1>
//     )
// }

// export default ProductList;