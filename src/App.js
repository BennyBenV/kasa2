// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './routes/Accueil';
import FicheLogement from './routes/FicheLogement';
import Page404 from './routes/Page404';
import Apropos from './routes/Apropos';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/fiche-logement/:id" element={<FicheLogement />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="/404" element={<Page404 />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>

  );
}

export default App;

