import React, { useState } from 'react';
import { RatingProps } from './RatingView';
import IconStar from './IconStar';

// import { Container } from './styles';

interface EditableRatingProps extends RatingProps {
  onClick: (index: number) => void;
  transition?: boolean;
}

const Rating: React.FC<EditableRatingProps> = ({
  ratingValue,
  onClick,
  stars = 5,
  size = 25,
  transition = false,
  fillColor = '#f1a545',
  emptyColor = '#cccccc',
  className = '',
  children,
}) => {
  const [hoverValue, setHoverValue] = useState(
    ratingValue || null,
  );

  return (
    <fieldset className={className}>
      {[...Array(stars)].map((_, index) => (
        <span
          key={index}
          onMouseEnter={() => setHoverValue(index + 1)}
          onMouseLeave={() => setHoverValue(null)}
          onClick={() => onClick && onClick(index + 1)}
          aria-hidden="true"
          style={{
            color:
              (hoverValue || ratingValue) &&
              (hoverValue || ratingValue) > index
                ? fillColor
                : emptyColor,
            width: size,
            height: size,
            cursor: 'pointer',
            transition: transition
              ? 'color 0.2s ease-in-out 0s'
              : '',
            display: 'inline-flex',
          }}
        >
          {children || <IconStar size={size} />}
        </span>
      ))}
    </fieldset>
  );
};

export default Rating;
