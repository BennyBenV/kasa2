import React, { useState, useEffect } from 'react';
import '../sass/components/gallery.scss';
import Card from '../components/card';
import logementsData from '../data.json';

const Gallery = () => {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    // Charger les données depuis le fichier JSON
    setLogements(logementsData);
  }, []);

  return (
    <div className="gallery">
      {logements.map((logement, index) => (
        <Card
          key={logement.id}
          id={logement.id}
          title={logement.title}
          cover={logement.cover}
        />
      ))}
    </div>
  );
};

export default Gallery;
