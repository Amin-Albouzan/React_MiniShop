import React from 'react';

const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, display: "block",  background: "silver", paddingTop:"1px",
 

    }}
    onClick={onClick}
  />
);

const NextArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, display: "block",
      background: "silver", 
      paddingTop:"1px"
    }}
    onClick={onClick}
  />
);

export { PrevArrow, NextArrow };
