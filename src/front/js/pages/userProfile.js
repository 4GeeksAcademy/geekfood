import React, { useState } from 'react';
import InfoCuenta from '../component/InfoCuenta';
import MediosPago from '../component/MediosPago';
import UltimasOrdenes from '../component/UltimasOrdenes';
import Seguridad from '../component/Seguridad';
import ResenasValoraciones from '../component/ResenasValoraciones';
import Usuarios from '../component/users';  
import '../../styles/userProfile.css';
import perfil from '../../img/profilePhoto.jpg';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('infoCuenta');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSave = async () => {
    try {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        },
        body: JSON.stringify({ name, phone, address })
      });

      if (!response.ok) {
        throw new Error('Error al guardar los datos');
      }

      const result = await response.json();
      console.log('Datos guardados:', result);
      // Opcional: Mostrar un mensaje de éxito al usuario
    } catch (error) {
      console.error('Error:', error);
      // Opcional: Mostrar un mensaje de error al usuario
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'infoCuenta':
        return (
          <InfoCuenta
            name={name}
            phone={phone}
            address={address}
            setName={setName}
            setPhone={setPhone}
            setAddress={setAddress}
            onSave={handleSave}
          />
        );
      case 'mediosPago':
        return <MediosPago />;
      case 'ultimasOrdenes':
        return <UltimasOrdenes />;
      case 'seguridad':
        return <Seguridad />;
      case 'resenasValoraciones':
        return <ResenasValoraciones />;
      case 'usuarios':  // Agrega el caso para el nuevo componente Usuarios
        return <Usuarios />;
      default:
        return null;
    }
  };

  return (
    <div className="user-profile-container">
      <nav className="sidebar">
        <div className="sidebar-sticky">
          <div className="profile text-center">
            <img src={perfil} alt="Perfil" className="img-fluid rounded-circle" />
            <h4>Mi perfil</h4>
            <p>{name}</p>
          </div>
          <a
            href="#"
            className={`nav-link ${activeTab === 'infoCuenta' ? 'active' : ''}`}
            onClick={() => setActiveTab('infoCuenta')}
          >
            Información de cuenta
          </a>
          <a
            href="#"
            className={`nav-link ${activeTab === 'mediosPago' ? 'active' : ''}`}
            onClick={() => setActiveTab('mediosPago')}
          >
            Medios de pago
          </a>
          <a
            href="#"
            className={`nav-link ${activeTab === 'ultimasOrdenes' ? 'active' : ''}`}
            onClick={() => setActiveTab('ultimasOrdenes')}
          >
            Últimas órdenes
          </a>
          <a
            href="#"
            className={`nav-link ${activeTab === 'seguridad' ? 'active' : ''}`}
            onClick={() => setActiveTab('seguridad')}
          >
            Seguridad
          </a>
          <a
            href="#"
            className={`nav-link ${activeTab === 'resenasValoraciones' ? 'active' : ''}`}
            onClick={() => setActiveTab('resenasValoraciones')}
          >
            Reseñas y valoraciones
          </a>
          <a
            href="#"
            className={`nav-link ${activeTab === 'usuarios' ? 'active' : ''}`}  // Nuevo enlace para Usuarios
            onClick={() => setActiveTab('usuarios')}
          >
            Usuarios
          </a>
        </div>
      </nav>
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
};

export default UserProfile;
