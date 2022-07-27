import React from 'react';
import './Card.scss';
import { CardType } from '../../react-app-env';

export const Card : React.FC<CardType> = ({
  img, name, id, price, services,
}) => {
  return (
    <div className="card" id={`${id}`}>
      <img
        src={img}
        alt={name}
        className="card__image"
      />
      <p className="card__price">
        &#163;
        {price}
      </p>
      <p className="card__name">{name}</p>
      <p className="card__paragraph">Ltd Company package</p>
      <ul className="card__list preferencesList">
        {services.map(el => (
          <li className="preferencesList__item" key={el}>
            {el}
          </li>
        ))}
      </ul>
      <div className="card__cashback cashback">
        <p className="cashback__price">&#163; 55</p>
        <p className="cashback__text">Cash Back</p>
      </div>
      <button
        type="button"
        className="card__button"
      >
        Get started
      </button>
    </div>
  );
};
