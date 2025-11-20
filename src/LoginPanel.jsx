import React,{useState} from "react";

const LoginPanel = () => {
const [loggedIn,setLoggedIn]=useState(false);
const login = () =>{
    if (loggedIn === true) {
        setLoggedIn(false);
      } else {
        setLoggedIn(true);
      }
}
    return(
        <>
        {loggedIn ? (<h1>Welcome!You are logged in.</h1>) : (
        <div>
          <h1>Login Form</h1>
          <input type="text" placeholder="Username"/> <br/>
          <input type="password" placeholder="Password" />  <br/>
        </div>
      )} <br/>

      <button onClick={() => login()}>{loggedIn ? "Logout" : "Login"}</button>
        </>
    )

}
export default LoginPanel;