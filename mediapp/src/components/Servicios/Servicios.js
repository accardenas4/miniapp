import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap (ya está en App.js, pero es bueno verificarlo)

const Servicios = () => {

  useEffect(() => {
    // Verifica que Telegram y Telegram.WebApp están definidos
    if (window.Telegram && window.Telegram.WebApp) {
      const { WebApp } = window.Telegram;

      // Inicializa el WebApp
      WebApp.ready();

      // Configura el botón principal
      WebApp.MainButton.setText('Back');
      WebApp.MainButton.show();

      // Define la acción al hacer clic en el botón principal
      WebApp.MainButton.onClick(() => {
        WebApp.close();
      });
    } else {
      console.error('Telegram WebApp SDK no está disponible');
    }
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Servicios</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Doctores</h5>
              <p className="card-text">Encuentra doctores especialistas en diversas áreas.</p>
              <button className="btn btn-primary">Ver más</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Farmacias</h5>
              <p className="card-text">Encuentra farmacias cercanas a tu ubicación.</p>
              <button className="btn btn-primary">Ver más</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Hospitales</h5>
              <p className="card-text">Consulta la lista de hospitales disponibles en tu área.</p>
              <button className="btn btn-primary">Ver más</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
