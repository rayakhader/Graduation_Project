import React from 'react';

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={
        (e) => {
        e.stopPropagation();
        if (onClick) onClick(e);
      }
    }
    />
  );
}

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={(e) => {
        e.stopPropagation();
        if (onClick) onClick(e);
      }}
    />
  );
}

export { NextArrow, PrevArrow };
