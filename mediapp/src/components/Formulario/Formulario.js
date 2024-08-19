import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap (ya está en App.js, pero es bueno verificarlo)

const Formulario = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    // Verifica que Telegram y Telegram.WebApp están definidos
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

    // Redirige a la página de servicios
    window.location.href = '/servicios';
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Telegram Web App Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="surname">Surname:</label>
          <input
            id="surname"
            type="text"
            className="form-control"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            id="age"
            type="number"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Formulario;
