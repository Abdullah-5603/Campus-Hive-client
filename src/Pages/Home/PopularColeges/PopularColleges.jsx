import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const PopularColleges = () => {
    const { data: colleges = [] } = useQuery({
        queryKey: ['popular-colleges'],
        queryFn: async () => {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/all-colleges`);
            return response.data;
        },
    })
    // vents, research history, and sports
    return (
        <div className='w-full'>
            <p className='text-center md:text-2xl text-xl font-bold mt-5 md:mt-10'>Popular Colleges</p>
            <div className='w-1/4 md:w-1/12 bg-cyan-500 h-[3px] mx-auto mb-4 md:mb-6 mt-1'></div>
            <div className="grid gri-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    colleges.slice(0, 3).map((college, index) => (
                        <div key={index} className='card w-80 lg:w-96 glass mx-auto'>
                            <figure><img className='w-full h-[200px] md:h-[250px] lg:h-[270px]' src={college.image} alt={college.name} /></figure>
                            <div className='card-body'>
                                <h2 className='card-title'>{college.name}</h2>
                                <p className='font-semibold'>Admission Date: <span className='font-normal'>{college.admission_dates}</span></p>
                                <p className='font-semibold'>Events : <span className='font-normal'>{college.events.join(', ')}</span></p>
                                <p className='font-semibold'>Spots : <span className='font-normal'>{college.sports.join(', ')}</span></p>
                                <p className='font-semibold'>Research History : <span className='font-normal'>{college.research_history}</span></p>
                            </div>
                            <Link to={`/college-details/${college._id}`}><button className='btn hover:bg-cyan-500 bg-cyan-500 font-bold w-full text-white'>See Details</button></Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PopularColleges;