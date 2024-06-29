import React from 'react';
import './Card.css';

function Card({ image, title, description, price }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title} - ${price}</h3>
      <p>{description}</p>
      <a href= "#"className="order-button">Order a delivery</a>
    </div>
  );
}

export default Card;
