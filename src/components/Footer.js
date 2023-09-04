import React from "react";
import { Link } from "react-router-dom"
import "../style/Footer.css"
import img from "../image/goku_2.png"
const Footer = () => {
    return (
        <div className="footer">

            <div className="about">
                <div className="title">ABOUT US</div>
                <p>
                    Welcome to our Web Manga Code Project!
                    We are Nhan and Thi, two individuals passionate about manga, technology, and creative endeavors.
                    This project was created to combine these two passions and provide a unique experience for manga enthusiasts worldwide.
                </p>
                <p>
                    Our project is a perfect blend of programming expertise and a love for manga.
                    Our website offers you the opportunity to explore and read fantastic manga series with a user-friendly and accessible interface.
                    We continuously strive to create a safe, friendly, and diverse online environment for manga enthusiasts.
                </p>
            </div>


            {/*contact section*/}


            <div className="contact">
                <div className="title">CONTACT</div>
                <div>Phone number : 0823 346 347</div>
                <div>Email : 21521219@gm.uit.edu.vn</div>
                <a href="https://uit-ntn.github.io/portfolio/">About Nhan</a>
                <a href="">About Thi</a>
                <div>Address : University of Information Technology</div>
            </div>

            {/*follow section*/}
            <div className="follow">
                <div className="title">FOLLOW US</div>
                <div className="social-icon">
                    <Link to="/">Facebook</Link>
                    <Link to="/">Twitter</Link>
                    <Link to="/">Instagram</Link>
                    <Link to="/">YouTube</Link>
                </div>
            </div>

            <div className="footer-img">
                <img src={img}></img>
            </div>
        </div>
    )
}
export default Footer;