import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import '../../styles/starts.css'

const StarRating = ({ rating }) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
        index < rating ? <FaStar key={index} /> : <FaRegStar key={index} />
    ));

    return (
        <div className='stars'>
            {stars}
        </div>
    );
};

export default StarRating;