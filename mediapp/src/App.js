import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
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
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombres:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="surname" className="form-label">Apellidos:</label>
          <input
            id="surname"
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Edad:</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Enviar</button>
      </form>
    </div>
  );
};

export default App;
