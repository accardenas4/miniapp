import React, { useState, useEffect } from 'react';
import './Formulario.css'; // Estilos personalizados si los necesitas

const Formulario = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    // Verifica que Telegram y Telegram.WebApp están definidos
    const checkTelegramSDK = () => {
      if (window.Telegram && window.Telegram.WebApp) {
        const { WebApp } = window.Telegram;

        // Inicializa el WebApp
        WebApp.ready();

        // Configura el botón principal
        WebApp.MainButton.setText('Submit');
        WebApp.MainButton.show();

        // Define la acción al hacer clic en el botón principal
        WebApp.MainButton.onClick(() => {
          WebApp.close();
        });
      } else {
        console.error('Telegram WebApp SDK no está disponible');
      }
    };

    // Espera a que el SDK esté disponible
    const interval = setInterval(() => {
      if (window.Telegram && window.Telegram.WebApp) {
        clearInterval(interval);
        checkTelegramSDK();
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar el envío de los datos, por ejemplo, enviarlos a un servidor
    console.log('Form Data:', { name, surname, age });
    if (window.Telegram && window.Telegram.WebApp) {
      const { WebApp } = window.Telegram;
      WebApp.MainButton.setText('Submitted');
      WebApp.MainButton.show();
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Formulario</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombres:</label>
          <input
            id="name"
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="surname">Apellidos:</label>
          <input
            id="surname"
            type="text"
            className="form-control"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="age">Edad:</label>
          <input
            id="age"
            type="number"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;
