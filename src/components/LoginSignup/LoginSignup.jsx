import { useRef, useState } from "react";


import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import "./LoginSignup.css";


const LoginSignup = () => {


  //defining state to make sure if login or signup is clicked or visible or active
  const [login,setLogin] = useState(true);

  //creating reference for login-signup
  const LoginSignupRef = useRef(null);

  const handleClick = ()=> {
    setLogin(!login);

    //using useRef we can do DOM manipulation
    LoginSignupRef.current.classList.toggle("active");

  };

  return (
    <div className="login-signup" ref={LoginSignupRef}>
       <Login />
    <div className="side-div">
      <button type="button" onClick={handleClick} > 
      {" "}
      {login ? "Signup" : "Login"}
      </button> 
    </div> 
    <Signup />
    </div>
  );
};

export default LoginSignup;