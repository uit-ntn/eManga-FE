import '../style/MangaCard.css';
import React from 'react';

function MangaCard({manga}) {

    const handleMangaCard = function(manga){
       
    }
    return (
        <div className="manga-card" onClick={handleMangaCard}>
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