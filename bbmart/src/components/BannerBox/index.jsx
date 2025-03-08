import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const BannerBox = (props) => {
    return (
        <div className="box bannerBox overflow-hidden rounded-lg group">
            <Link to="/ ">
                <img src={props.img} alt="Banner" className='w-full transition-all transform group-hover:scale-100'/>
            </Link>     
            </div>
    );
};

export default BannerBox;