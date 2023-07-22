import React from 'react';
import PopularColleges from '../PopularColeges/PopularColleges';
import GraduatesGallery from '../GraduatesGallery/GraduatesGallery';
import Researches from '../Researches/Researches';

const Home = () => {
    return (
        <div>
            <PopularColleges/>
            <GraduatesGallery/>
            <Researches/>
        </div>
    );
};

export default Home;