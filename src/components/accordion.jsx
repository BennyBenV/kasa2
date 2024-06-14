import React, { useState } from 'react';
import '../sass/components/accordion.css';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${isOpen ? 'active' : ''}`}>
      <div className="accordion__title" onClick={toggleAccordion}>
        {title}
        <i className={`fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
      </div>
      <div className={`accordion__content ${isOpen ? 'accordion__content--open' : ''}`}>
        {content}
      </div>
    </div>
  );
};

export default Accordion;
