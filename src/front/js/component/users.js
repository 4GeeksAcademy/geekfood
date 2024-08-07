import React, { useState } from 'react';
import '../../styles/users.css';

const Users = () => {
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: 'Carlos Peralta', rol: 'Repartidor', email: 'carlosp@gmail.com', telefono: '555-1234', rut: '12.345.678-9', direccion: 'Av. O’Higgins 1234, Santiago' },
    { id: 2, nombre: 'Subway', rol: 'Tienda', email: 'mariag@gmail.com', telefono: '555-5678', rut: '98.765.432-1', direccion: 'Calle Nueva 5678, Valparaíso' },
    { id: 3, nombre: 'Ana Rodriguez', rol: 'Consumidor', email: 'anar@gmail.com', telefono: '555-8765', rut: '11.223.344-5', direccion: 'Av. Italia 3456, Concepción' },
    { id: 4, nombre: 'Pedro Santana', rol: 'Administrador', email: 'pedros@gmail.com', telefono: '555-4321', rut: '77.888.999-2', direccion: 'Calle Los Álamos 987, La Serena' },
  ]);

  const [filtros, setFiltros] = useState({
    nombre: '',
    email: '',
    rol: '',
    telefono: '',
    rut: '',
    direccion: '',
  });

  const [usuarioEditable, setUsuarioEditable] = useState(null);

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
      rut: '',
      direccion: '',
    });
  };

  const usuariosFiltrados = usuarios.filter((usuario) => {
    const filtroNombre = usuario.nombre.toLowerCase().includes(filtros.nombre.toLowerCase());
    const filtroEmail = usuario.email.toLowerCase().includes(filtros.email.toLowerCase());
    const filtroRol = filtros.rol === '' || usuario.rol === filtros.rol;
    const filtroTelefono = usuario.telefono.includes(filtros.telefono);
    const filtroRut = usuario.rut.includes(filtros.rut);
    const filtroDireccion = usuario.direccion.toLowerCase().includes(filtros.direccion.toLowerCase());
    return filtroNombre && filtroEmail && filtroRol && filtroTelefono && filtroRut && filtroDireccion;
  });

  const eliminarUsuario = (id) => {
    const nuevosUsuarios = usuarios.filter((usuario) => usuario.id !== id);
    setUsuarios(nuevosUsuarios);
  };

  const handleEditarUsuario = (usuario) => {
    setUsuarioEditable(usuario);
  };

  const handleGuardarCambios = () => {
    setUsuarios(usuarios.map(u => u.id === usuarioEditable.id ? usuarioEditable : u));
    setUsuarioEditable(null);
  };

  const handleChangeUsuarioEditable = (e) => {
    const { name, value } = e.target;
    setUsuarioEditable({ ...usuarioEditable, [name]: value });
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
        <input
          type="text"
          placeholder="Filtrar por RUT"
          name="rut"
          value={filtros.rut}
          onChange={handleFiltroChange}
        />
        <input
          type="text"
          placeholder="Filtrar por dirección"
          name="direccion"
          value={filtros.direccion}
          onChange={handleFiltroChange}
        />
      </div>
      <div className="results-info">
        <span>Mostrando {usuariosFiltrados.length} resultados. </span>
        <a href="#" className="reset-link" onClick={handleReset}>Reset</a>
      </div>
      <table className="usuarios-tabla">
        <thead>
          <tr>
            <th>Nombres</th>
            <th>Rol</th>
            <th>Email</th>
            <th>RUT</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Modificar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {usuariosFiltrados.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.nombre}</td>
              <td>{usuario.rol}</td>
              <td>{usuario.email}</td>
              <td>{usuario.rut}</td>
              <td>{usuario.telefono}</td>
              <td>{usuario.direccion}</td>
              <td>
                <i
                  className="bi bi-pen-fill edit-icon"
                  onClick={() => handleEditarUsuario(usuario)}
                ></i>
              </td>
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

      {usuarioEditable && (
        <div className="modal">
          <div className="modal-content">
            <h3>Modificar Usuario</h3>
            <input
              type="text"
              name="nombre"
              value={usuarioEditable.nombre}
              onChange={handleChangeUsuarioEditable}
              placeholder="Nombre"
            />
            <input
              type="text"
              name="email"
              value={usuarioEditable.email}
              onChange={handleChangeUsuarioEditable}
              placeholder="Email"
            />
            <input
              type="text"
              name="rut"
              value={usuarioEditable.rut}
              onChange={handleChangeUsuarioEditable}
              placeholder="RUT"
            />
            <input
              type="text"
              name="telefono"
              value={usuarioEditable.telefono}
              onChange={handleChangeUsuarioEditable}
              placeholder="Teléfono"
            />
            <input
              type="text"
              name="direccion"
              value={usuarioEditable.direccion}
              onChange={handleChangeUsuarioEditable}
              placeholder="Dirección"
            />
            <select
              name="rol"
              value={usuarioEditable.rol}
              onChange={handleChangeUsuarioEditable}
            >
              <option value="Repartidor">Repartidor</option>
              <option value="Tienda">Tienda</option>
              <option value="Consumidor">Consumidor</option>
              <option value="Administrador">Administrador</option>
            </select>
            <button onClick={handleGuardarCambios}>Guardar Cambios</button>
            <button onClick={() => setUsuarioEditable(null)}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
