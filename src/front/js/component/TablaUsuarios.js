import React from 'react';
import "../../styles/TablaUsuarios.css";

const TablaUsuarios = ({ usuariosFiltrados, handleEditarUsuario, eliminarUsuario }) => (
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
);

export default TablaUsuarios;
