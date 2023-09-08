import React from "react";
import Layout from "../components/Layout";
import '../style/Detail.css'
import  Instagram from '../image/Instagram.png';
import { useLocation } from 'react-router-dom';

function Detail() {
    const location = useLocation();
    const manga = location.state.manga;

    return (
        <Layout>
            <div className="manga-detail">
                <div className="manga-card-detail background">
                    <div className="manga-card__image">
                        <img src={manga.cover} alt="#"></img>
                    </div>
                    <div className="manga-card__detail">
                        <div className="manga-card__detail-title">
                            <div className="manga-card__detail-name">{manga.title}</div>
                            <div className="manga-card__detail-author">{manga.author}</div>
                        </div>
                        <div className="manga-card__detail-genre">
                            <span className="Manga-card__label">Thể loại:</span>
                            <span className="Manga-card__value">{manga.genre}</span>
                            </div>
                        <div className="manga-card__detail-rating">
                        <span className="Manga-card__label">Rating: 
                        <span className="Manga-card__value">{manga.rating}</span>
                        </span>
                        </div>
                        <div className="manga-card__buttons">
                            <button className="favorite-btn">+ Add to favorite</button>
                            <button className="rating-btn">Rating</button>
                            <ul className="manga-card__share-buttons">
                                <li className="share-button">
                                    <a href="">
                                       <img src="https://static.fanfox.net/v202307252/mangafox/images/detail-btn-2.png"></img>
                                    </a>
                                </li>
                                <li className="share-button">
                                    <a href="">
                                        <img src="https://static.fanfox.net/v202307252/mangafox/images/detail-btn-3.png"></img>
                                    </a>
                                </li>
                                <li className="share-button">
                                    <a href="">
                                        <img src={Instagram}></img>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="tab-heading">
                <span className="tab-link tab-heading__manga-content-tab">Nội Dung Truyện</span>
                <span className="tab-link tab-heading__comments-tab">Bình Luận</span>
                </div>
                <div className="content-container">{manga.content}</div>
            </div>
        </Layout>
    )
}
export default Detail;


