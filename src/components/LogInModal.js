import React, { useState , useEffect} from "react";
import Modal from "./Modal";
import "../style/Modal.css";
import logoImage from "../image/red-paint-crossed-with-black-paint.jpg"


const LogInModal = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState('false');

  const handleLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [loginError, setLoginError] = useState(null);
  
    useEffect(() => {
      if (loginError) {
        console.error("login failed", loginError);
      }
    }, [loginError]);
  
    const handleLogin = () => {
      const userAPI = "https://64e6bc0e09e64530d18031e6.mockapi.io/emanga/users";
      fetch(userAPI, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("error logginng in");
          }
          return response.json();
        })
        .then((data) => {
          if (data && data.validLogin === true) {
            setLoggedIn(true);
            setLoginError(null);
            console.log("login success");
          } else {
            setLoggedIn(false);
            setLoginError("login failed");
            console.error("login failed");
          }
        })
        .catch((error) => {
          setLoggedIn(false);
          setLoginError(error);
          console.error("Error sending login request:", error);
        });
  };
};



  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="modal-content">
        {/* modal header */}
        <div className="modal-content-header">
          <div className="logoImage">
            <img src={logoImage} alt="Logo" />
          </div>
          <h3>Login to eManga</h3>
          <p>Need an account?
            <a href="#"> Sign in</a>
          </p>
        </div>
        {/* Input Pure User Infor */}
        <div className="SignUpInputs">
          <div className="pure-control-group">
            <input type="text" name="Username" autoFocus="autoFocus"
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
          <button type="submit" className="button-cta" onClick={handleLogin}>Log In</button>
        </div>
        {/* End SignIn Button */}
        {/* SignUp by Social Account */}
        <div className="background-strikethrough">
          <span>Or</span>
        </div>
        <div className="SignUpProviders">
          <a href="#" className="facebook-button">Login with Facebook</a>
          <a href="#" className="twitter-button">Login with Twitter</a>
        </div>
        <div className="SignUpFooter">
          <a href="#">Forgot your password</a>
        </div>
      </div>
    </Modal>
  );
};

export default LogInModal;
