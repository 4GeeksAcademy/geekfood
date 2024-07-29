import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
        index < rating ? <FaStar key={index} /> : <FaRegStar key={index} />
    ));

    return (
        <div>
            {stars}
        </div>
    );
};

export default StarRating;