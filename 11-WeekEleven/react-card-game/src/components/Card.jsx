import React from 'react';

const Card = ({ card, flipped, matched, onClick }) => (
  <div
    className={`card ${flipped ? 'flipped' : ''} ${matched ? 'matched' : ''}`}
    onClick={onClick}
  >
    <div className="card-inner">
      <div className="card-front"></div>
      <div className="card-back">{card}</div>
    </div>
  </div>
);

export default Card;