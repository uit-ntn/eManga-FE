import React, { useState } from "react";
import Modal from "./Modal";
import ResetPassword from "./ResetPassword";
import "../style/Modal.css";
import logoImage from "../image/red-paint-crossed-with-black-paint.jpg";

const LogInModal = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] = useState(false);
  const [error, setError] = useState(null);

  const openResetPasswordModal = () => {
    setIsResetPasswordModalOpen(true);
    onClose();
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please provide username and password.");
      return;
    }

    setError(null);

    const API_URL = "https://64e6bc0e09e64530d18031e6.mockapi.io/emanga/users";

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();

      if (data && data.validLogin === true) {
        setLoggedIn(true);
        setUser(data);
        setUsername("");
        setPassword("");
      } else {
        setLoggedIn(false);
        setError("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error sending login request:", error);
      setError("An error occurred during login. Please try again later.");
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="modal-content">
          <div className="modal-content-header">
            <div className="logoImage">
              <img src={logoImage} alt="Logo" />
            </div>
            <h3>Login to eManga</h3>
            <h5>
              Discover anime and manga, track your progress, get recommendations, and watch legal anime. For free!
            </h5>
          </div>
          <div className="SignUpInputs">
            <div className="pure-control-group">
              <input
                type="text"
                name="Username"
                autoFocus
                placeholder="Username or Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="pure-control-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="SignUpAction pure-controls">
            <button type="submit" className="button-cta" onClick={handleLogin}>
              Log In
            </button>
          </div>
          <div className="background-strikethrough">
            <span>Or</span>
          </div>
          <div className="SignUpProviders">
            <a href="#" className="facebook-button">
              Login with Facebook
            </a>
            <a href="#" className="twitter-button">
              Login with Twitter
            </a>
          </div>
          <div className="SignUpFooter">
            <div onClick={openResetPasswordModal}>Forgot Password</div>

            {/*check login section*/}
          </div>
          {loggedIn ? (
            <div className="LoggedInMessage">Logged in as {user && user.username}</div>
          ) : (
            <div className="ErrorText">{error}</div>
          )}
        </div>
      </Modal>

      {isResetPasswordModalOpen && (
        <ResetPassword
          isOpen={isResetPasswordModalOpen}
          onClose={() => setIsResetPasswordModalOpen(false)}
        />
      )}
    </>
  );
};

export default LogInModal;
