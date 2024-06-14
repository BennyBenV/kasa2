// Accueil.js
import React from 'react';
import Header from '../components/header'
import '../sass/pages/accueil.css';
import Banner from '../components/banner';
import Gallery from '../components/gallery';
import Footer from '../components/footer';


function Accueil() {

  return (

    <div className="App">
      <Header />
      <Banner />
      <div className='mainGallery'>
        <Gallery />
      </div>
      <Footer />
    </div>


  );
}

export default Accueil;
