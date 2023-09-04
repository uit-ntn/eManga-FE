import React, {useState, useEffect} from "react";
import { useNavigate ,Link } from 'react-router-dom';
import "../style/Header.css";
import logo from "../image/goku.png"
function Header() {

    //searchbar seaction

    const [searchTerm, setSearchTerm] = useState(''); 
    const [authorFilter, setAuthorFilter] = useState('');
    const [genreFilter, setGenreFilter] = useState('');
    const [mangaData, setMangaData] = useState([]); // State để lưu trữ dữ liệu sau khi lọc
  
    useEffect(() => {
      fetch('https://64e6bc0e09e64530d18031e6.mockapi.io/emanga/manga')  // mock API
        .then((response) => response.json())
        .then((data) => {
          
          // Lọc dữ liệu dựa trên tác giả và thể loại nếu có
          const filteredData = data.filter((manga) => {
            if (authorFilter && manga.author !== authorFilter) {
              return false;
            }
            if (genreFilter && !manga.genres.includes(genreFilter)) {
              return false;
            }
            return true;
          });
  
          // Lọc dữ liệu dựa trên giá trị từ thanh tìm kiếm
          const searchData = filteredData.filter((manga) =>
          manga.name && searchTerm &&
          manga.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
  
          setMangaData(searchData);
        });
    }, [searchTerm, authorFilter, genreFilter]);


    // login section
    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate('/login');
    };
    const handleRegisterClick = () => {
        navigate('/register');
    }



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
                        <button className="login-btn" type="button" onClick={handleLoginClick}>Login</button>
                        <button className="signup-btn" type="button" onClick={handleRegisterClick}>Sign up</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;