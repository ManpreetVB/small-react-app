import React,{useState} from "react";

const Cart = () => {

    const [item,setItem] = useState (0)

    const cartItem = () =>{
        if(item===0)
        {
            setItem("Your cart is empty"); 
        }
        else
        {
            setItem("Your cart List");
        }
    }
    
    return(
         <>
        <h1>{item===0?"Your cart list is empty":
            <div>
                Cart List
                <ul>
                <li>Watches</li>
                <li>Shoes</li>
                <li>Tees</li>
                <li>Bags</li>
                </ul>
            
            </div>
}
        </h1>
        
        <button onClick={()=>cartItem ()}>Add To Cart</button>{""}
         </>
    )
}
export default Cart;