import React, { useState } from "react";
import Modal from "./Modal";
import "../style/Modal.css";
import logoImage from "../image/red-paint-crossed-with-black-paint.jpg";

const SignUpModal = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [registered, setRegistered] = useState(false);
  const [error, setError] = useState(null);

  const handleRegistration = () => {
    const registrationAPI = "https://64e6bc0e09e64530d18031e6.mockapi.io/emanga/users";
    
    if (!username || !password || !email) {
      setError("Please fill in all information");
      return;
    }

    // Kiểm tra định dạng email hợp lệ
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setError(null);

    fetch(registrationAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        email: email,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Registration failed");
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.registered === true) {
          setRegistered(true);
        } else {
          setError("Registration failed. Please try again.");
        }
      })
      .catch((error) => {
        console.error(error);
        setError("An error occurred during registration. Please try again later.");
      });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="modal-content">
        {/* modal header */}
        <div className="modal-content-header">
          <div className="logoImage">
            <img src={logoImage} alt="Logo" />
          </div>
          <h3>Sign up for eManga</h3>
          <p>Discover anime and manga, track your progress, get recommendations, and watch legal anime. For free!</p>
        </div>
        {/* Input Pure User Info */}
        <div className="SignUpInputs">
          <div className="pure-control-group">
            <input type="text" name="Username" autoFocus placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username} />
          </div>
          <div className="pure-control-group">
            <input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
          </div>
          <div className="pure-control-group">
            <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
          </div>
        </div>
        {/* End Input Pure User Info  */}
        {/* SignIn Button  */}
        <div className="SignUpAction pure-controls">
          <button type="submit" className="button-cta" onClick={handleRegistration}>
            Create account
          </button>
        </div>
        {/* End SignIn Button */}
        {/* Display registration success message or error */}
        {registered ? (
          <div className="SuccessMessage">Registration successful. Please log in.</div>
        ) : (
          error && <div className="ErrorText">{error}</div>
        )}
        {/* SignUp by Social Account */}
        <div className="background-strikethrough">
          <span>Or</span>
        </div>
        <div className="SignUpProviders">
          <a href="#" className="facebook-button">Sign up with Facebook</a>
          <a href="#" className="twitter-button">Sign up with Twitter</a>
        </div>
        {/* End SignUp by Social Account */}
        <div className="SignUpFooter">
          <p>Already a member? Log in</p>
        </div>
      </div>
    </Modal>
  );
};

export default SignUpModal;
