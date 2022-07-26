import React, { useEffect, useState } from 'react';
import { dataGetter } from '../../api/api';
import './WideSection.scss';

interface heroType {
  title: string,
  description: string,
}

export const WideSection : React.FC = () => {
  const [hero, setHero] = useState<null | heroType>(null);

  useEffect(() => {
    const fetcher = async () => {
      const result = await dataGetter();

      setHero(result.hero);
    };

    fetcher();
  }, []);

  console.log(hero);

  return (
    <div className="container container--full">
      { hero !== null
      && (
        <div className="wide">
          <div className="wide__text">
            <h1 className="wide__text--heading">{hero.title}</h1>
            <p className="wide__text--paragraph">{hero.description}</p>
          </div>
        </div>
      ) }
    </div>
  );
};
