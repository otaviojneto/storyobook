import React, { useState } from 'react';
import Rating from './Rating';
import RatingView from './RatingView';
import IconStar from './IconStar';

export default {
  title: 'Micro Components/Rating',
};

export const Basic = () => {
  const [rating, setRating] = useState(4);

  const handleRating = (rate: number) => {
    setRating(rate);
    console.log(`Your rate is: ${rate}`);
  };

  return (
    <div className="App">
      <h2>Rating </h2>
      <div>
        <Rating
          onClick={handleRating}
          ratingValue={rating}
          transition
          size={20}
          stars={5}
        ></Rating>

        <br />
        <hr />
        <br />

        <h2>read Only </h2>
        <RatingView ratingValue={5} size={20} />
      </div>
    </div>
  );
};
