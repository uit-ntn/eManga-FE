import React, { useState } from "react";
import Modal from "./Modal";
import logoImage from "../image/red-paint-crossed-with-black-paint.jpg";
import LogInModal from "./LogInModal";

const ForgotPassword = ({ isOpen, onClose, onLoginClick }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isOpenLogInModal, setIsOpenLogInModal] = useState(false);

  const handleResetPasswordRequest = () => {
    if (!email) {
      setMessage("Vui lòng nhập địa chỉ email hoặc tên người dùng.");
      return;
    }

    setIsLoading(true);

    const resetData = {
      email: email,
    };

    const userAPI = "https://64e6bc0e09e64530d18031e6.mockapi.io/emanga/users";
    fetch(userAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(resetData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Lỗi khi gửi yêu cầu đặt lại mật khẩu");
        }
        return response.json();
      })
      .then((data) => {
        setMessage("Yêu cầu đã được gửi. Vui lòng kiểm tra email của bạn.");
      })
      .catch((error) => {
        setMessage("Lỗi khi gửi yêu cầu đặt lại mật khẩu.");
        console.error("Lỗi khi gửi yêu cầu đặt lại mật khẩu:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Đóng modal ForgotPassword và mở modal Login khi bấm "Already a member? Log in"
  const handleLoginClick = () => {
    setIsOpenLogInModal(true);
    onClose();
  };
  return (
    <div >
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="modal-content">
          {/* Modal header */}
          <div className="modal-content-header">
            <div className="logoImage">
              <img src={logoImage} alt="Logo" />
            </div>
            <h3>Forgot Password</h3>
          </div>
          {/* Input Pure User Infor */}
          <div className="SignUpInputs">
            <div className="pure-control-group">
              <input
                type="text"
                name="email"
                autoFocus={true}
                placeholder="Enter email address or username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          {/* End Input Pure User Infor */}
          {/* Reset Password Button */}
          <div className="SignUpAction pure-controls">
            <button
              type="submit"
              className="button-cta"
              onClick={handleResetPasswordRequest}
              disabled={isLoading}
            >
              {isLoading ? 'Đang gửi...' : 'Reset Password'}
            </button>
          </div>
          {/* End Reset Password Button */}
          {message && <div className={message.includes("Lỗi") ? "error-message" : "success-message"}>{message}</div>}
          {/* Sign Up by Social Account */}
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
          {/* Sign Up Footer */}
          <div className="SignUpFooter">
            <div onClick={handleLoginClick}>Already a member? Log in</div>
          </div>
        </div>
      </Modal>
      {
        isOpenLogInModal && (
          <LogInModal
            isOpen={isOpenLogInModal}
            onClose={() => setIsOpenLogInModal(false)}
          />
        )};
    </div>)
};

export default ForgotPassword;
