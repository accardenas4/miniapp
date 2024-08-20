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
            <div class="text-center">
            <img src={exampleImage} alt="Example" className="img-fluid mb-4" /> {/* Agrega la imagen */}
</div>
      <p>Explora un espacio centralizado para todos tus servicios médicos, fácil y al alcance de tu mano.v</p>
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
          <label className="form-label-bold" htmlFor="age">Edad:</label>
          <input
            id="age"
            type="number"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
      <div className="alert alert-success mt-3" role="alert">
        Revisa nuestras Políticas de privacidad!
        <button type="button" className="btn btn-link">Política de privacidad</button>
      </div>
    </div>
  );
};

export default Formulario;
