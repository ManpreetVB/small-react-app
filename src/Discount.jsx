import React from "react";

const Discount = () =>{
    const age=25;

    return(
      <>
      <h1>User Age:{age}</h1>
      {age>20 && <h1>You are eligible for discount</h1>}
      </>
    )
}
export default Discount;