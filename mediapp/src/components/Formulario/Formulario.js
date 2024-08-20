import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap (ya está en App.js, pero es bueno verificarlo)
import './Formulario.css';
import exampleImage from '../../assets/bot-conversacional.png'; // Importa la imagen

const Formulario = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  const [selectedStore, setSelectedStore] = useState('');

  // Manejar el cambio en la selección
  const handleChange = (event) => {
    setSelectedStore(event.target.value);
  };

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

    // Redirige a la página de servicios después de enviar el formulario
    window.location.href = '/miniapp/servicios'; // Cambia esta URL a la URL correcta de tu página de servicios

    if (window.Telegram && window.Telegram.WebApp) {
      const { WebApp } = window.Telegram;
      WebApp.MainButton.setText('Registrarme');
      WebApp.MainButton.show();
    }
  };

  return (
    <div className="container mt-5">

      <section class="bg-light py-3 py-md-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
              <div class="card border border-light-subtle rounded-3 shadow-sm">
                <div class="card-body p-3 p-md-4 p-xl-5">
                  <div class="text-center mb-3">
                    <a href="#!">
                      <img src={exampleImage} alt="Example" className="img-fluid mb-4" /> {/* Agrega la imagen */}
                    </a>
                  </div>
                  <h2 class="fs-6 fw-normal text-center text-secondary mb-4">Completa la información</h2>
                  <form action="#!">
                    <div class="row gy-2 overflow-hidden">
                      <div class="col-12">
                        <div class="form-floating mb-3">
                          <input type="text" class="form-control" name="Nombres" id="nombres" required />
                          <label for="email" class="form-label">Cédula de identidad</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="d-grid my-3">
                          <button class="btn btn-primary btn-lg" type="submit">Registrarme</button>
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
