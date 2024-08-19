import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Formulario from './components/Formulario/Formulario';
import Servicios from './components/Servicios/Servicios';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Formulario />} />
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
    </Router>
  );
};

export default App;
