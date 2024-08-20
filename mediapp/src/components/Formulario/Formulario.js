import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para la redirección
import 'bootstrap/dist/css/bootstrap.min.css';
import './Formulario.css';
import exampleImage from '../../assets/bot-conversacional.png';

const Formulario = () => {
  const [name] = useState('');
  const [surname] = useState('');
  const [age] = useState('');
  const navigate = useNavigate(); // Hook para redirección

  // Manejar el cambio en la selección

  useEffect(() => {
    // Verifica que Telegram y Telegram.WebApp están definidos
    if (window.Telegram && window.Telegram.WebApp) {
      const { WebApp } = window.Telegram;

      // Inicializa el WebApp
      WebApp.ready();

      // Configura el botón principal
      WebApp.MainButton.setText('Registrarme');
      WebApp.MainButton.show();

      // Define la acción al hacer clic en el botón principal
      WebApp.MainButton.onClick(() => {
        WebApp.close();
      });
    } else {
      console.error('Telegram WebApp SDK no está disponible');
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar el envío de los datos, por ejemplo, enviarlos a un servidor
    console.log('Form Data:', { name, surname, age });

    // Redirige al componente Servicios después de enviar el formulario
    navigate('/servicios'); // Redirige usando navigate

    if (window.Telegram && window.Telegram.WebApp) {
      const { WebApp } = window.Telegram;
      WebApp.MainButton.setText('Registrarme');
      WebApp.MainButton.show();
    }
  };

  return (
    <div className="container mt-5">
      <section className="bg-light py-3 py-md-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
              <div className="card border border-light-subtle rounded-3 shadow-sm">
                <div className="card-body p-3 p-md-4 p-xl-5">
                  <div className="text-center mb-3">
                    <a href="#!">
                      <img src={exampleImage} alt="Example" className="img-fluid mb-4" />
                    </a>
                  </div>
                  <h2 className="fs-6 fw-normal text-center text-secondary mb-4">Explora un espacio centralizado para todos tus servicios médicos, fácil y al alcance de tu mano.</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="row gy-2 overflow-hidden">
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input type="text" className="form-control" name="Nombres" id="nombres" required />
                          <label htmlFor="nombres" className="form-label">Cédula de identidad</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-grid my-3">
                          <button className="btn btn-primary btn-lg" type="submit">Acceder a los servicios</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="alert alert-success mt-3" role="alert">
        Revisa nuestras Políticas de privacidad!
        <button type="button" className="btn btn-link">Política de privacidad</button>
      </div>
    </div>
  );
};

export default Formulario;
