import React from 'react';
import { useParams } from 'react-router-dom';
import logementsData from '../data.json';
import Carrousel from '../components/carrousel';
import Tag from '../components/tag';
import Rating from '../components/rating';
import Accordion from '../components/accordion';
import '../sass/pages/ficheLogement.scss';
import Footer from '../components/footer';
import Header from '../components/header';
import { Navigate } from "react-router-dom";


const FicheLogement = () => {
  const { id } = useParams();
  const logement = logementsData.find(logement => logement.id === id);

  if (!logement) {
    // Si le logement n'existe pas, rediriger vers la page 404
    return <Navigate to="/404" />;
  }


  return (
    <>
    <Header />
    <div className="fiche-logement">
      <Carrousel pictures={logement.pictures} />
      <div className="logement-info">
        <div className="logement-info__details">
          <p>{logement.title}</p>
          <p className="location">{logement.location}</p>
          <div className="tags">
            {logement.tags.map((tag, index) => <Tag key={index} tag={tag} />)}
          </div>
        </div>
        <div className="host-rating">
          <div className="host">
            <p className="host__name">
              {logement.host.name.split(' ')[0]}<br />
              {logement.host.name.split(' ')[1]}
            </p>
            <img src={logement.host.picture} alt={logement.host.name} className="host__picture" />
          </div>
          <Rating rating={logement.rating} />
        </div>
      </div>
      <div className="accordions">
        <Accordion title="Description" content={logement.description} />
        <Accordion title="Équipements" content={
          <ul>
            {logement.equipments.map((equipment, index) => <li key={index}>{equipment}</li>)}
          </ul>
        } />
      </div>
    </div>
    <Footer />
    </>
  );
};

export default FicheLogement;
