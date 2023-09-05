import '../style/MangaCard.css';
import React from 'react';
import { useNavigate} from "react-router-dom";

function MangaCard({manga}) {

    const navigate = useNavigate();

    const handleMangaCard = function(manga){
        navigate(`/detail/${manga.id}`,{state: {manga}});
    }
    return (
        <div className="manga-card" onClick={() =>handleMangaCard(manga)}>
            <div className="card-image" >
                <img src={manga.cover} alt={manga.title}></img>
            </div>
            <div className="genre"> {manga.genre} </div>
            <div className="heading">
                {manga.title}
                <div className="author">
                 <span className="name">{manga.author}</span>
                </div>
            </div>
        </div>
    )
};

export default MangaCard;