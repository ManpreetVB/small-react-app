import React from "react";

function Product(props){
    console.log(props)
    return(
        <>
        <h1>{props.name}</h1>
        <h1>{props.price}</h1>
        <h1>{props.category}</h1>
        </>
    )
}   
export default Product;