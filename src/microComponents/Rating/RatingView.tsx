import React from 'react';
import StarIcon from './IconStar';

// import { Container } from './styles';
export interface RatingProps {
  ratingValue: number;
  stars?: number;
  size?: number;
  fillColor?: string;
  emptyColor?: string;
  className?: string;
}

const Rating: React.FC<RatingProps> = ({
  ratingValue,
  stars = 5,
  size = 25,
  fillColor = '#f1a545',
  emptyColor = '#cccccc',
  className = '',
  children,
}) => {
  return (
    <span className={className}>
      {[...Array(stars)].map((_, index) => (
        <span
          key={index}
          style={{
            color:
              ratingValue && ratingValue > index
                ? fillColor
                : emptyColor,
            width: size,
            height: size,
            display: 'inline-flex',
          }}
        >
          {children || <StarIcon size={size} />}
        </span>
      ))}
    </span>
  );
};

export default Rating;
