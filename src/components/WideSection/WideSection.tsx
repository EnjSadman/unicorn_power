import React, { useEffect, useState } from 'react';
import { dataGetter } from '../../api/api';
import { HeroType } from '../../react-app-env';
import './WideSection.scss';

export const WideSection : React.FC = () => {
  const [hero, setHero] = useState<null | HeroType>(null);

  useEffect(() => {
    const fetcher = async () => {
      const result = await dataGetter();

      setHero(result.hero);
    };

    fetcher();
  }, []);

  return (
    <div className="container container--full wide">
      { hero !== null
      && (
        <div className="wide__text">
          <h1 className="wide__text--heading">{hero.title}</h1>
          <p className="wide__text--paragraph">{hero.description}</p>
        </div>
      ) }
    </div>
  );
};
