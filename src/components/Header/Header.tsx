import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import classNames from 'classnames';
import React, { useState } from 'react';
import './Header.scss';

export const Header : React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<null | string>(null);

  return (
    <header>
      <div className="container--regular header container">
        <div>
          <a href="#" className="header__logo logo">
            Logo
          </a>
        </div>
        <div className="header__buttons">
          <div>
            <button
              type="button"
              className="header__dropdown"
              onClick={() => {
                if (selectedButton === '1') {
                  setSelectedButton(null);
                } else {
                  setSelectedButton('1');
                }
              }}
            >
              Banking&nbsp;
              <FontAwesomeIcon icon={solid('caret-down')} />
            </button>
            <div className={classNames('links', { selected: selectedButton === '1' })}>
              <a className="link" href="#">link1</a>
              <a className="link" href="#">link2</a>
              <a className="link" href="#">link3</a>
            </div>
          </div>
          <div>
            <button
              type="button"
              className="header__dropdown"
              onClick={() => {
                if (selectedButton === '2') {
                  setSelectedButton(null);
                } else {
                  setSelectedButton('2');
                }
              }}
            >
              About us&nbsp;
              <FontAwesomeIcon icon={solid('caret-down')} />
            </button>
            <div className={classNames('links', { selected: selectedButton === '2' })}>
              <a className="link" href="#">link3</a>
              <a className="link" href="#">link4</a>
              <a className="link" href="#">link5</a>
            </div>
          </div>
          <button
            type="button"
            className="header__button"
          >
            Enquire now
          </button>
        </div>
      </div>
      <div className="path container container--regular">
        <p className="path__paragraph">Home /</p>
        <p className="path__paragraph">Company Formations /</p>
        <p className="path__paragraph--selected">Companies</p>
      </div>
    </header>
  );
};
