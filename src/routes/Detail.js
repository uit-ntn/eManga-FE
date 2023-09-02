import React from "react";
import Layout from "../components/Layout";
import '../style/Detail.css'
import  Instagram from '../image/Instagram.png';

function Detail() {
    return (
        <Layout>
            <div className="manga-detail">
                <div className="manga-card">
                    <div className="manga-card__image">
                        <img src="https://loremflickr.com/cache/resized/65535_52559459065_f72e7e59d1_b_640_480_nofilter.jpg"></img>
                    </div>
                    <div className="manga-card__detail">
                        <div className="manga-card__detail-title">
                            <div className="manga-card__detail-name">Abyss Rage</div>
                            <div className="manga-card__detail-author">Roosevelt Brown</div>
                        </div>
                        <div className="manga-card__detail-genre">Thể loại: Metal</div>
                        <div className="manga-card__detail-rating">Rating: 25</div>
                        <div className="manga-card__buttons">
                            <button className="favorite-btn">Add to favorite</button>
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
                <div className="content-container">Repellat corporis qui fugit laborum cum eos repudiandae. Quod corporis inventore a. Voluptatibus autem molestias soluta.\nRerum laudantium molestiae sapiente dolores ducimus neque. Nisi aspernatur doloremque accusantium. Amet consequuntur non molestiae. Occaecati dolore assumenda totam accusantium optio consequatur quas nesciunt.\nFugiat consequatur vero corporis repudiandae asperiores dolorum. Libero nostrum voluptatibus ea culpa nisi. Dolore omnis illo labore commodi alias. Eum hic minima autem repellat temporibus et eum quam. Iusto nisi omnis. Non nemo impedit cum voluptates perspiciatis assumenda porro.</div>
            </div>
        </Layout>
    )
}
export default Detail;


