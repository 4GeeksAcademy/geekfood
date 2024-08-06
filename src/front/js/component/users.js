import React, { useState } from 'react';
import '../../styles/users.css';

const Users = () => {
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: 'Carlos P.', rol: 'Repartidor', email: 'carlosp@gmail.com', telefono: '555-1234' },
    { id: 2, nombre: 'Subway', rol: 'Tienda', email: 'mariag@gmail.com', telefono: '555-5678' },
    { id: 3, nombre: 'Ana R.', rol: 'Consumidor', email: 'anar@gmail.com', telefono: '555-8765' },
    { id: 4, nombre: 'Pedro S.', rol: 'Administrador', email: 'pedros@gmail.com', telefono: '555-4321' },
  ]);

  const [filtros, setFiltros] = useState({
    nombre: '',
    email: '',
    rol: '',
    telefono: '',
  });

  const handleFiltroChange = (e) => {
    const { name, value } = e.target;
    setFiltros({ ...filtros, [name]: value });
  };

  const handleReset = () => {
    setFiltros({
      nombre: '',
      email: '',
      rol: '',
      telefono: '',
    });
  };

  const usuariosFiltrados = usuarios.filter((usuario) => {
    const filtroNombre = usuario.nombre.toLowerCase().includes(filtros.nombre.toLowerCase());
    const filtroEmail = usuario.email.toLowerCase().includes(filtros.email.toLowerCase());
    const filtroRol = filtros.rol === '' || usuario.rol === filtros.rol;
    const filtroTelefono = usuario.telefono.includes(filtros.telefono);
    return filtroNombre && filtroEmail && filtroRol && filtroTelefono;
  });

  const eliminarUsuario = (id) => {
    const nuevosUsuarios = usuarios.filter((usuario) => usuario.id !== id);
    setUsuarios(nuevosUsuarios);
  };

  return (
    <div className="usuarios-container">
      <h2>Usuarios</h2>
      <div className="filtros-container">
        <input
          type="text"
          placeholder="Filtrar por nombre"
          name="nombre"
          value={filtros.nombre}
          onChange={handleFiltroChange}
        />
        <input
          type="text"
          placeholder="Filtrar por email"
          name="email"
          value={filtros.email}
          onChange={handleFiltroChange}
        />
        <select
          name="rol"
          value={filtros.rol}
          onChange={handleFiltroChange}
        >
          <option value="">Filtrar por rol</option>
          <option value="Repartidor">Repartidor</option>
          <option value="Tienda">Tienda</option>
          <option value="Consumidor">Consumidor</option>
          <option value="Administrador">Administrador</option>
        </select>
        <input
          type="text"
          placeholder="Filtrar por teléfono"
          name="telefono"
          value={filtros.telefono}
          onChange={handleFiltroChange}
        />
      </div>
      <div className="results-info">
        <span>Showing {usuariosFiltrados.length} results. </span>
        <a href="#" className="reset-link" onClick={handleReset}>Reset</a>
      </div>
      <table className="usuarios-tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Rol</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {usuariosFiltrados.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.nombre}</td>
              <td>{usuario.rol}</td>
              <td>{usuario.email}</td>
              <td>{usuario.telefono}</td>
              <td>
                <i 
                  className="bi bi-trash3 delete-icon"
                  onClick={() => eliminarUsuario(usuario.id)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
