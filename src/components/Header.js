import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";
import SignUpModal from "../routes/SignUpModal";
import LogInModal from "../routes/LogInModal";
function Header() {

    // State variables to control modal visibility
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const [logInModalOpen, setLogInModalOpen] = useState(false);

  // Functions to open/close modals
  const openSignUpModal = () => setSignUpModalOpen(true);
  const closeSignUpModal = () => setSignUpModalOpen(false);
  const openLogInModal = () => setLogInModalOpen(true);
  const closeLogInModal = () => setLogInModalOpen(false);

    return (
        <div className="Header">
            <nav>
                <img className="logo" src="../image/goku.png" alt="lỗi hình ảnh" />
                <Link to="/" className="nav-item">HOME</Link>
                <div className="nav-item sub-nav-trigger">
                    THỂ LOẠI
                    <div className="sub-nav">
                        <ul className="nav-list">
                            <li>Thể loại 1</li>
                            <li>Thể loại 2</li>
                            <li>Thể loại 3</li>
                            <li>Thể loại 4</li>
                            <li>Thể loại 5</li>
                        </ul>
                    </div>
                </div>
                <Link to="/about" className="nav-item">ABOUT</Link>
                <Link to="/contact" className="nav-item">CONTACT</Link>
                <Link to="/" className="nav-item">MANGA LIST</Link>
                <input placeholder="Search ..." class="input" name="text" type="text"></input>
                <div className="login-box">
                        <div>
                            <button className="login-btn" type="button"
                            onClick={openLogInModal}>Login</button>
                            <button className="signup-btn" type="button"
                            onClick={openSignUpModal}
                            >Sign up</button>
                        </div>
                </div>
            </nav>
            {/*Modals */}
            <SignUpModal isOpen={signUpModalOpen} onClose={closeSignUpModal} />
            <LogInModal isOpen={logInModalOpen} onClose={closeLogInModal}/>
        </div>
    )
}

export default Header;