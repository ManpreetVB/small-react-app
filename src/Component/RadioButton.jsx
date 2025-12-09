import React from "react";

const RadioButton = ({label,options,onChange,value}) => {
   
return(
    <>
<label>{label}</label>
            {options?.map((item) => (
                <div key={item.id}>
                    <input type="radio"  value={item.id} checked={value === item.id} onChange={() => onChange(item.id)} />
                    <label>{item.gender}</label>
                </div>
            ))}
    </>
)
}
export default RadioButton;