import React, { useState } from 'react';
import '../sass/components/aboutList.scss';

const AboutList = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAboutList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`aboutList ${isOpen ? 'active' : ''}`}>
      <div className="aboutList__header" onClick={toggleAboutList}>
        <h3>{title}</h3>
        <i className={`fa-solid ${isOpen ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
      </div>
      <div className={`aboutList__content ${isOpen ? 'aboutList__content--open' : ''}`}>
        {content}
      </div>
    </div>
  );
};

export default AboutList;
