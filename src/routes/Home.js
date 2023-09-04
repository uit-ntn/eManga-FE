import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import '../style/Home.css';
import MangaList from '../components/MangaList';
function Home() {

    return (
        <div className='Home'>
            <Layout>
                <MangaList></MangaList>
            </Layout>
        </div>
    )
}
export default Home;
