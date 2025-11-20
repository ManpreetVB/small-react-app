import React from "react";

const Cart = () => {

    const [item,setItem] = useState (0)

    const cartItem = () =>{
        if(item.length===0)
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
        {item.length===0?(<h1>Your cart is empty</h1>):(
            <div>
                <h1>Cart List</h1>
                <ul>
                <li>Watches</li>
                <li>Shoes</li>
                <li>Tees</li>
                <li>Bags</li>
                </ul>
            </div>
        )} 
         </>
    )
}
export default Cart;