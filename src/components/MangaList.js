import React, { useEffect, useState } from 'react';
import '../style/Home.css';
import MangaCard from '../components/MangaCard';
function MangaList() {

    const [mangaData, setMangaData] = useState([]);
    useEffect(() => {
        const mangaAPI = 'https://64e6bc0e09e64530d18031e6.mockapi.io/emanga/manga';
        fetch(mangaAPI)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network Error');
                }
                return response.json();
            })
            .then((data) => {
                // update the state 
                setMangaData(data);
            })
            .catch((error) => {
                console.error('problem with the fetch operation:', error);
            });
    }, []);

    return (
        <div className='Manga-List'>
            {
                mangaData.map((manga) => (
                    <div className="Manga-List-item" key={manga.id}>
                        <MangaCard manga={manga} />
                    </div>
                ))
            }
        </div>
    )
}
export default MangaList;