import React from 'react';
import '../sass/components/footer.css';
import logoFooter from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logoFooter} alt="Kasa Logo" className="footer__logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
