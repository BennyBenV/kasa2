import React from 'react';
import Header from '../components/header'
import Footer from '../components/footer';
import '../sass/pages/page404.scss';
import { Link } from 'react-router-dom';

function Page404() {
  return (
    <div className="page-404">
      <Header />
      <div className="content">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
      <Footer />
    </div>
  );
} 

export default Page404;
