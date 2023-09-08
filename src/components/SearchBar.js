import React ,{ useState, useEffect } from 'react';
import '../style/SearchBar.css'

export default function SearchBar() {
    
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
        <div>
            <input
                placeholder="Search ..."
                className="input"
                name="text"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    )
}
