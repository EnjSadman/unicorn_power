import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.scss';

export const Footer : React.FC = () => {
  return (
    <footer>
      <div className="container container--wide footer">
        <div className="container container--regular footer__container">
          <a href="#" className="footer__logo logo">Logo</a>
          <div className="footer__links">
            <p className="footer__links--title">
              Useful Links
            </p>
            <a href="#" className="footer__links--link">
              Cookies Policy
            </a>
            <a href="#" className="footer__links--link">
              Terms & conditions
            </a>
            <a href="#" className="footer__links--link">
              Privacy policy
            </a>
            <a href="#" className="footer__links--link">
              Complaint Policy
            </a>
            <a href="#" className="footer__links--link">
              Contact Us
            </a>
          </div>
          <div className="footer__contacts">
            <p className="footer__contacts--title">
              Contact us
            </p>
            <p className="footer__contacts--paragraph">Turner Little Limited Registered in England No. 3490752 Vat No. 764466206</p>
            <p className="footer__contacts--paragraph">Office: Fanshawe House Pioneer Business Park Amy Johnson Way York YO30 4TN</p>
            <p className="footer__contacts--paragraph">
              Or message us on &#013;
              <br />
              <a href="#" className="footer__contacts--link">
                <FontAwesomeIcon icon={brands('whatsapp')} />
              </a>
              {' '}
              WhatsApp
              <br />
              Licensed by the Financial Conduct Authority No. 734784
            </p>
          </div>
          <div className="footer__icons">
            <a href="#" className="footer__icons--icon">
              <FontAwesomeIcon icon={brands('instagram')} />
            </a>
            <a href="#" className="footer__icons--icon">
              <FontAwesomeIcon icon={solid('basketball')} />
            </a>
            <a href="#" className="footer__icons--icon">
              <FontAwesomeIcon icon={brands('twitter')} />
            </a>
            <a href="#" className="footer__icons--icon">
              <FontAwesomeIcon icon={brands('youtube')} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
