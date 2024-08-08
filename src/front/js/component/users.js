import React, { useState } from 'react';
import '../../styles/users.css';
import FiltroUsuarios from './FiltroUsuarios';
import TablaUsuarios from './TablaUsuarios';
import ModalEditarUsuario from './ModalEditarUsuario';

const Users = () => {
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: 'Carlos Peralta', rol: 'Repartidor', email: 'carlosp@gmail.com', telefono: '555-1234', rut: '12.345.678-9', direccion: 'Av. O’Higgins 1234, Santiago' },
    { id: 2, nombre: 'Subway', rol: 'Tienda', email: 'subway@gmail.com', telefono: '555-5678', rut: '98.765.432-1', direccion: 'Calle Nueva 5678, Valparaíso' },
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

  const usuariosFiltrados = usuarios.filter((usuario) => {
    const filtroNombre = usuario.nombre.toLowerCase().includes(filtros.nombre.toLowerCase());
    const filtroEmail = usuario.email.toLowerCase().includes(filtros.email.toLowerCase());
    const filtroRol = filtros.rol === '' || usuario.rol === filtros.rol;
    const filtroTelefono = usuario.telefono.includes(filtros.telefono);
    const filtroRut = usuario.rut.includes(filtros.rut);
    const filtroDireccion = usuario.direccion.toLowerCase().includes(filtros.direccion.toLowerCase());
    return filtroNombre && filtroEmail && filtroRol && filtroTelefono && filtroRut && filtroDireccion;
  });

  return (
    <div className="usuarios-container">
      <h2>Usuarios</h2>
      <FiltroUsuarios filtros={filtros} handleFiltroChange={handleFiltroChange} />
      <div className="results-info">
        <span>Mostrando {usuariosFiltrados.length} resultados.</span>
        <a href="#" className="reset-link" onClick={handleReset}>Reset</a>
      </div>
      <TablaUsuarios usuariosFiltrados={usuariosFiltrados} handleEditarUsuario={handleEditarUsuario} eliminarUsuario={eliminarUsuario} />
      {usuarioEditable && (
        <ModalEditarUsuario 
          usuarioEditable={usuarioEditable}
          handleChangeUsuarioEditable={handleChangeUsuarioEditable}
          handleGuardarCambios={handleGuardarCambios}
          setUsuarioEditable={setUsuarioEditable}
        />
      )}
    </div>
  );
};

export default Users;

