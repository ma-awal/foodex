import React from 'react';
import './card.css';
const Card = ({ name, title }) => {
  return (
    <>
      <div className="card-box">
        <h2>{name}</h2>
        <p>{title}</p>
      </div>
    </>
  );
};

export default Card;
