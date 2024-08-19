import React, { useState, useEffect } from 'react';

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
    <div>
      <h1>Telegram Web App Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="surname">Surname:</label>
          <input
            id="surname"
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
