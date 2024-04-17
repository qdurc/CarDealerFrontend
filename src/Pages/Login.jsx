import React, { useEffect, useState } from 'react'
import { useNavigate  } from 'react-router-dom';

export const Login = () => {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("user")
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === '12345') {
        localStorage.setItem("user", JSON.stringify(username));
        navigate("/AdminPanel", {replace: true})
      } else {
        alert('Credenciales incorrectas. Por favor, inténtelo de nuevo.');
      }
  };

  return (
    <div className="login-container">
      <div className="login-box">
      <img src="src\img\logo.jpg" alt="Logo" className="logo" />
        <h1 className="mb-4">Inicio de Sesión</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Usuario</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}