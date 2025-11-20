import React,{useState} from "react";

const ToggleMessage=()=>{
     const [msg, setMsg] = useState(false)
     const showMessage =()=>{
        if (msg===true)
        {
            setMsg(false)
        }
else
{
    setMsg(true)
}
     }


     return(
        <>
        <h1>ShowMessage:{msg?'On':'Off'}</h1>
        <button onClick={()=> showMessage()}>{msg?'On':'Off'}</button>{""}
        </>
     )

    }
export default ToggleMessage;