import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Formulario from './components/Formulario/Formulario';
import Servicios from './components/Servicios/Servicios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Formulario />} /> {/* Ruta para el formulario */}
        <Route path="/servicios" element={<Servicios />} /> {/* Ruta para Servicios */}
      </Routes>
    </div>
  );
}

export default App;
