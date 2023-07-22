import React from 'react';
import PopularColleges from '../PopularColeges/PopularColleges';
import GraduatesGallery from '../GraduatesGallery/GraduatesGallery';
import Researches from '../Researches/Researches';
import SearchBar from '../SearchBar/SearchBar';

const Home = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <SearchBar/>
            <PopularColleges/>
            <GraduatesGallery/>
            <Researches/>
        </div>
    );
};

export default Home;