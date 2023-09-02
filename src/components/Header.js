import React from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";
function Header() {

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
                            <button className="login-btn" type="button">Login</button>
                            <button className="signup-btn" type="button">Sign up</button>
                        </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;