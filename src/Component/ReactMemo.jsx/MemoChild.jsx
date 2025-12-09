import React from 'react'


const MemoChild = React.memo(function Memo({title,}) {
console.log('{ title }');
  return (
    
 <>
     <h2>{title}</h2> 
     
    </>
  )
})

export default MemoChild;
