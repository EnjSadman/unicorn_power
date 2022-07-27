import React, { useEffect, useState } from 'react';
import { dataGetter } from '../../api/api';
import { Card } from '../Card/Card';
import { CardType } from '../../react-app-env';
import './CardsSection.scss';

export const CardSection : React.FC = () => {
  const [cardsList, setCardsList] = useState<null | CardType[]>(null);

  useEffect(() => {
    const fetcher = async () => {
      const result = await dataGetter();

      setCardsList(result.products);
    };

    fetcher();
  }, []);

  return (
    <div className="container container--cards cardsSection">
      {cardsList && cardsList.map(el => (
        <Card
          key={el.id}
          img={el.img}
          id={el.id}
          name={el.name}
          services={el.services}
          price={el.price}
        />
      ))}
    </div>
  );
};
