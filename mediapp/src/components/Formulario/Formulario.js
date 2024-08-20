import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap (ya está en App.js, pero es bueno verificarlo)
import  './Formulario.css'

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
    if (window.Telegram && window.Telegram.WebApp) {
      const { WebApp } = window.Telegram;
      WebApp.MainButton.setText('Registrarme');
      WebApp.MainButton.show();
    }

  };

  return (
    <div className="container mt-5">
      <p>Explora un espacio centralizado para todos tus servicios médicos, fácil y al alcance de tu mano.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label-bold" htmlFor="name">Nombres:</label>
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
          <label className="form-label-bold" htmlFor="surname">Apellidos:</label>
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
        <label className="form-label-bold" htmlFor="storeSelect">Localidad</label>
        <select
            id="storeSelect"
            className="form-control"
            value={selectedStore}
            onChange={handleChange}
          >
            <option value="">Seleccione...</option>
            <option value="store1">Loja</option>
          </select>
      </div>
        <div className="form-group">
          <label className="form-label-bold"  htmlFor="age">Edad:</label>
          <input
            id="age"
            type="number"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        
      </form>
      <div class="alert alert-success" role="alert">
  Revisa nuestras Politicas de privacidad!       <button type="button" class="btn btn-link">Politica de provacidad</button>

</div>

    </div>
  );
};

export default Formulario;
