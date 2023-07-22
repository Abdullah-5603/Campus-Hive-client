import React from 'react';
import PopularColleges from '../PopularColeges/PopularColleges';
import GraduatesGallery from '../GraduatesGallery/GraduatesGallery';
import Researches from '../Researches/Researches';
import SearchBar from '../SearchBar/SearchBar';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Campus Hive || Home</title>
            </Helmet>
            <div className='flex flex-col items-center justify-center w-full'>
                <SearchBar />
                <PopularColleges />
                <GraduatesGallery />
                <Researches />
            </div>
        </>
    );
};

export default Home;