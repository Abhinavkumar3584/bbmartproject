import React from 'react';
import '../Search/style.css'; // Add this import statement
import Button from '@mui/material/Button';
import {IoSearch} from 'react-icons/io5';

const Search = () => {
    return (
        <div className="searchbox w-[100%] h-[50px] bg-[#d9d9d9] rounded-[5px] relative p-2">
            <input type="text" placeholder='search for products....' className='w-full h-[35px] focus:outline-none bg-inherit p-2  text-[15px]'/>
            <Button className='!absolute top-[7px] right-[5px] z-50 !w-[37px] !min-w-[37px] h-[37px] !rounded-full !text-black'><IoSearch className='text-[#5a5a5a] text-[20px]'/></Button>
        </div>
    )
}

export default Search; 