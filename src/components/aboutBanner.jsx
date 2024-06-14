import React from 'react';
import kalen from '../assets/kalen-emsley.png';

const aboutBanner = () => {
    return (
        <div className="banner" style={{ backgroundImage: `url(${kalen})` }}>
            <div className="banner__overlay"></div>
        </div>
    );
};

export default aboutBanner;
