import React,{useState} from "react";
import MemoChild from "./MemoChild";

const MemoParent = () => {

    const [title, setTitle] = useState("ReactMemo");
    const [description, setDescription] = useState("Component rerender testing");
  
    return(
        <>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>

        <MemoChild title={title}/>
        </>
    )

}
export default MemoParent