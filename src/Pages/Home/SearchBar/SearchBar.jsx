import React from 'react';
import { FiSearch } from 'react-icons/fi'

const SearchBar = () => {
    return (
        <div className="relative mx-auto w-2/3 md:w-1/2 mt-5">
            <input type="text" placeholder="Type here to search" className="p-3 border-2 focus:outline-none rounded-lg border-gray-600 w-full" />
            <FiSearch className='absolute right-5 top-4 cursor-pointer w-6 h-6'/>
        </div>
    );
};

export default SearchBar;