import React, { useEffect, useState } from 'react';
import { dataGetter } from '../../api/api';
import { AboutType } from '../../react-app-env';
import './TextSection.scss';

export const TextSection = () => {
  const [about, setAbout] = useState<null | AboutType>(null);

  useEffect(() => {
    const fetcher = async () => {
      const result = await dataGetter();

      setAbout(result.about);
    };

    fetcher();
  }, []);

  console.log(about);

  return (
    <div className="container container--regular textSection">
      {about && (
        <>
          <p className="textSection__about">
            {about.text}
          </p>
          <div className="textSection__list list">
            <p className="list__title">
              {about.list.title}
            </p>
            <ul className="list__list">
              {about.list.elements.map((el) => (
                <li key={el} className="list__item">
                  {el}
                </li>
              ))}
            </ul>
          </div>

        </>
      )}
    </div>
  );
};
