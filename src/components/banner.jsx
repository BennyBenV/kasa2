import React from 'react';
import '../sass/components/banner.scss';
import paysage from '../assets/paysage.jpg';

const Banner = () => {
    return (
        <div className="banner" style={{ backgroundImage: `url(${paysage})` }}>
            <div className="banner__overlay"></div>
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    );
};

export default Banner;
