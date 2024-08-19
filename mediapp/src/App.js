import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Formulario from './components/Formulario/Formulario';
import Servicios from './components/Servicios/Servicios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/miniapp" element={<Formulario />} />
          <Route path="/servicios" element={<Servicios />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
