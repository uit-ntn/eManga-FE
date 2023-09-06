import React, {useState} from "react";
import Modal from "./Modal";
import "../style/Modal.css";
import logoImage from "../image/red-paint-crossed-with-black-paint.jpg"

const SignUpModal = ({ isOpen, onClose }) => {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [registered, setRegistered] = useState(false);

  const handleRegistration = () => {
    const registrationAPI = "https://64e6bc0e09e64530d18031e6.mockapi.io/emanga/users";
    if (!username || !password || !email) {
      console.error("Please fill in all information");
      return;
    }

    fetch(registrationAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
        email: email,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Lỗi khi đăng ký");
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.registered === true) {
          setRegistered(true);
          console.log("Sign Up Success");
        } else {
          console.error("Registration failed");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="modal-content">
        {/* modal header */}
        <div className="modal-content-header">
          <div className="logoImage">
          <img src= {logoImage} alt="Logo" />
          </div>
          <h3>Sign up for eManga</h3>
          <p>Discover anime and manga, track your progress, get recommendations, and watch legal anime. For free!</p>
        </div>
        {/* Input Pure User Infor */}
        <div className="SignUpInputs">
        <div className="pure-control-group">
        <input type="text" name="Username" autoFocus="autoFocus" placeholder="Username"></input>
        </div>
        <div className="pure-control-group">
        <input type="email" name="email" autoFocus="autoFocus"placeholder="Email"></input>
        </div>
        <div className="pure-control-group">
        <input type="password" name="password" autoFocus="autoFocus" placeholder="Password"></input>
        </div>
        </div>
        {/* End Input Pure User Infor  */}
        {/* SignIn Button  */}
        <div className="SignUpAction pure-controls">
        <button type="submit" className="button-cta">Create account</button>
        </div>
        {/* SignUp by Social Account */}
        <div className="background-strikethrough">
          <span>Or</span>
        </div>
        <div className="SignUpProviders"> 
        <a href="#" className="facebook-button">Sign up with Facebook</a>
        <a href="#" className="twitter-button">Sign up with Twitter</a>
        </div>
        {/* End SignIn Button */}
        <div className="SignUpFooter">
        <p>Already a member? 
        <a href="#"> Log in</a>
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default SignUpModal;