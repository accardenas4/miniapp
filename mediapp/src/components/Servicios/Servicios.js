import React from 'react';
import './Servicios.css';

const Servicios = () => {
  return (
    <div className="servicios-container">
      <h1 className="text-center mb-4">Servicios</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="path/to/doctor-image.jpg" className="card-img-top" alt="Doctor" />
            <div className="card-body">
              <h5 className="card-title">Doctores</h5>
              <p className="card-text">Encuentra doctores cerca de ti.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="path/to/pharmacy-image.jpg" className="card-img-top" alt="Farmacia" />
            <div className="card-body">
              <h5 className="card-title">Farmacias</h5>
              <p className="card-text">Localiza farmacias en tu área.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="path/to/hospital-image.jpg" className="card-img-top" alt="Hospital" />
            <div className="card-body">
              <h5 className="card-title">Hospitales</h5>
              <p className="card-text">Busca hospitales cercanos.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
