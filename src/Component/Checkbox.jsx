import React from "react";

const Checkbox = ({ label,options, checked, onChange }) => {

    return(
        <>
        <label>{label}</label>
            {options?.map((item) => (
                <div key={item.id}>
         <input type="checkbox" checked={checked} onChange={() => onChange(item.id)}/>
         <label>{item.skill}</label>
         </div>
         ))}
        </>
    )
}
export default Checkbox;