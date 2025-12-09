import React from "react";
 const DropdownButton = ({label,options,name}) =>{
  

    return(
        <>
       <label for="cars">{label}</label>
<select name={name} id={name}>

{ 
      options?options.map((item,index)=>(
        <option key={index} value={item.id}>{item.name}</option>

      )):"No Product Available"
      }
      
 
</select>
        </>
    )
 }
 export default DropdownButton;