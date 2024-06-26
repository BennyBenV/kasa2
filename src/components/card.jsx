import React from 'react';
import '../sass/components/card.scss';

const Card = ({ id, title, cover }) => {
  return (
    <div className="card">
      <a href={`/fiche-logement/${id}`} >
        <div className="card__image" style={{ backgroundImage: `url(${cover})` }}>
          <div className="card__title">{title}</div>
        </div>
      </a>
    </div>
  );
};

export default Card;
