import React, { useState } from "react";
import Modal from "./Modal";
import "../style/Modal.css";
import logoImage from "../image/red-paint-crossed-with-black-paint.jpg"

const LogInModal = ({ isOpen, onClose }) => {
  // const [inputValue, setInputValue] = useState("");
  // const [inputType, setInputType] = useState("text");

  // const handleInputChange = (e) =>
  // {
  //   const value = e.target.value;
  //   setInputType(value);
    
  //   if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)) {
  //     setInputType("email");
  //   } else
  //   setInputType("text");
  // };


  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="modal-content">
        {/* modal header */}
        <div className="modal-content-header">
          <div className="logoImage">
          <img src= {logoImage} alt="Logo" />
          </div>
          <h3>Login to eManga</h3>
          <p>Need an account?
          <a href="#"> Sign in</a>
          </p>
        </div>
        {/* SignUp by Social Account */}
        <div className="SignUpProviders"> 
        <a href="#" className="facebook-button">Login with Facebook</a>
        <a href="#" className="twitter-button">Login with Twitter</a>
        </div>
        <div className="background-strikethrough">
          <span>Or</span>
        </div>
        {/* Input Pure User Infor */}
        <div className="SignUpInputs">
          <div className="pure-control-group">
            <input type= "text" name="Username" autoFocus="autoFocus" 
            placeholder="Username or Email"
            ></input>
          </div>
  
          <div className="pure-control-group">
          <input type="password" name="password" autoFocus="autoFocus" placeholder="Password"></input>
          </div>
        </div>
        {/* End Input Pure User Infor  */}
        {/* SignIn Button  */}
        <div className="SignUpAction pure-controls">
          <button type="submit" className="button-cta">Log In</button>
        </div>
        {/* End SignIn Button */}
        <div className="SignUpFooter">
          <a href="#">Forgot your password</a>
        </div>
      </div>
    </Modal>
  );
};

export default LogInModal;
