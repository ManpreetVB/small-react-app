import React from "react";

const TodoList = () => {
    const todos=[
        {id:1,task:"Complete homework",completed:true},
        {id:2,task:"Go for walk",completed:false},
        {id:3,task:"Play with daughter ",completed:true}
    ];
  

const heading={
    color:"black",
    backgroundColor:"red",

}
const heading2={
    color:"black",
    backgroundColor:"green",
    
}



    return(
        <>
        <h1>Todo List</h1>
        <table>
        <thead>
            <tr>
                
            <td>#</td>
            <td>Id</td>
            <td>Task</td>
            <td>Completed</td>
            </tr>
        </thead>
        <tbody>
        
            {todos.length>0?todos.map((todo,index)=>(
                <tr key={index}>
                    <td>{index+1}</td>
                  <td>{todo.id}</td>  
                    <td>{todo.task}</td>
                   <td style={todo.completed?heading2:heading}> {todo.completed?"Done":"Not Yet"}</td>

                </tr>
            )):"No todos available "
            }
            </tbody>
            </table>
        
     
        </>
    )
}
export default TodoList;