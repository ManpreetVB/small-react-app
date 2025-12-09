import { useState } from "react";


const HooksDemo = () => {
    const[counter,setCounter]=useState(0);
 
    const increaseCount=()=>{
        setCounter(counter+1)
    }
    
    const decreaseCount=()=>{
        if(counter>0)
        {
        setCounter(counter-1)
        }
        else
        {
            alert('count can not be less than 0')
        }
    }


    return(
        <>
        <h1>Counter:{counter}</h1>
        <button onClick={()=> increaseCount()}>Increase Count</button>{""}
        <button onClick={()=>decreaseCount()}>Decrease Count</button>{""}
        <button onClick={()=>setCounter(0)}>Reset Count</button>
        </>
    )
}
export default HooksDemo;