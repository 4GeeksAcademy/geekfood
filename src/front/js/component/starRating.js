import React from 'react';
import '../../styles/starrating.css'

const StarRating = ({ rating, onChange }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <span
            key={index}
            className={`star ${ratingValue <= rating ? 'filled' : ''}`}
            onClick={() => onChange(ratingValue)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
