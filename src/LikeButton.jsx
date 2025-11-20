
import React,{useState} from "react";

const LikeButton=()=>{
     const [count, setCount] = useState(0)
const increaseCount=()=>{
    setCount(count+1)
}

const decreaseCount=()=>{
    if(count>0)
    {
    setCount(count-1)
    }
    else
    {
        alert('count can not be less than 0')
    }
}

    return(
        <>
        <h1>Like:{count}</h1>
        <button onClick={()=> increaseCount()}>Increase Count</button>{""}
        <button onClick={()=>decreaseCount()}>Decrease Count</button>{""}
        <button onClick={()=>setCount(0)}>Reset Count</button>

        {/* <button onClick={()=>setCount(count+1)}>Increase Count</button>
        <button onClick={()=>setCount(count-1)}>Decrease Count</button>
        <button onClick={()=>setCount(0)}>Reset Count</button>
         */}
</>
    )
}
export default LikeButton;