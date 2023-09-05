
import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";
import SignUpModal from "../routes/SignUpModal";
import LogInModal from "../routes/LogInModal";
import logo from "../image/goku.png"
function Header() {

    // State variables to control modal visibility
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const [logInModalOpen, setLogInModalOpen] = useState(false);

  // Functions to open/close modals
  const openSignUpModal = () => setSignUpModalOpen(true);
  const closeSignUpModal = () => setSignUpModalOpen(false);
  const openLogInModal = () => setLogInModalOpen(true);
  const closeLogInModal = () => setLogInModalOpen(false)

    //searchbar seaction

    const [searchTerm, setSearchTerm] = useState(''); 
    const [authorFilter, setAuthorFilter] = useState('');
    const [genreFilter, setGenreFilter] = useState('');
    const [mangaData, setMangaData] = useState([]); 
  
    useEffect(() => {
      fetch('https://64e6bc0e09e64530d18031e6.mockapi.io/emanga/manga')  // mock API
        .then((response) => response.json())
        .then((data) => {
          
       
          const filteredData = data.filter((manga) => {
            if (authorFilter && manga.author !== authorFilter) {
              return false;
            }
            if (genreFilter && !manga.genres.includes(genreFilter)) {
              return false;
            }
            return true;
          });
  
          const searchData = filteredData.filter((manga) =>
          manga.name && searchTerm &&
          manga.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
  
          setMangaData(searchData);
        });
    }, [searchTerm, authorFilter, genreFilter]);

    return (
        <div className="Header">
            <nav>
                <img className="logo" src={logo} alt="lỗi hình ảnh" />
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
                <input placeholder="Search ..." class="input" name="text" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
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