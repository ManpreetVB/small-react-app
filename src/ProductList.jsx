import React from "react";

const ProductList = () => {
    const productDetails = [
        {productId:1,productName:"adidas jogger",productPrice:110},
        {productId:2,productName:"AirJordan shoes",productPrice:450},
        {productId:3,productName:"Guess Bag",productPrice:350},
    ];

    

    return(
        <>
        <h1>Product List</h1>
       <table>
        <thead>
            <tr>
            <th>#</th>
            <th>ProductId</th>
            <th>ProductName</th>
            <th>ProductPrice</th>
            </tr>
        </thead>
        <tbody>
      { 
      productDetails.length>0?productDetails.map((product,index)=>(
    <tr key={index}> 
        <td>{index+1}</td>
    <td>{product.productId}</td>
    <td>{product.productName}</td>
    <td>${product.productPrice}</td>
    </tr>
      )):"No Product Available"
      }
      </tbody>
      </table>
        </>
    )

}
export default ProductList;