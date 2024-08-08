import React from 'react';
import "../../styles/FiltroUsuarios.css";

const FiltroUsuarios = ({ filtros, handleFiltroChange }) => (
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
);

export default FiltroUsuarios;
