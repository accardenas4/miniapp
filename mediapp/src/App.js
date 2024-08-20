import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Formulario from './components/Formulario/Formulario';
import Servicios from './components/Servicios/Servicios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Formulario />} />
          <Route path="/miniapp/servicios" element={<Servicios />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


