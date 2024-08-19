import React from 'react';
import './Servicios.css'; // Estilos personalizados si los necesitas

const Servicios = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Servicios</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Doctores</h5>
              <p className="card-text">Encuentra los mejores doctores cerca de ti. Puedes buscar por especialidad y ubicación para obtener la mejor atención médica.</p>
              <a href="/doctores" className="btn btn-primary">Ver más</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Farmacias</h5>
              <p className="card-text">Localiza farmacias cercanas con los productos que necesitas. Consulta horarios y disponibilidad de medicamentos.</p>
              <a href="/farmacias" className="btn btn-primary">Ver más</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Hospitales</h5>
              <p className="card-text">Encuentra hospitales con servicios de emergencia y atención especializada. Consulta información sobre instalaciones y servicios.</p>
              <a href="/hospitales" className="btn btn-primary">Ver más</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
