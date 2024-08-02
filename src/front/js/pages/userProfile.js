import React, { useState } from 'react';
import InfoCuenta from '../component/InfoCuenta';
import MediosPago from '../component/MediosPago';
import UltimasOrdenes from '../component/UltimasOrdenes';
import Seguridad from '../component/Seguridad';
import ResenasValoraciones from '../component/ResenasValoraciones';
import '../../styles/userProfile.css';
import perfil from '../../img/profilePhoto.jpg';
import { Context } from '../store/appContext';
import { useNavigate } from 'react-router-dom';


const UserProfile = () => {
  const { store, actions } = useContext(Context)
  const navigate = useNavigate()


  const [newCardNumber, setNewCardNumber] = useState('');
  const [newCardName, setNewCardName] = useState('');
  const [newExpDate, setNewExpDate] = useState('');
  const [newCVV2, setNewCVV2] = useState('');


  const [activeTab, setActiveTab] = useState('infoCuenta');
  const [name, setName] = useState('David');

  const renderContent = () => {
    switch (activeTab) {
      //info cuenta
      case 'infoCuenta':
        return <InfoCuenta name={name} setName={setName} />;
      case 'mediosPago':
        return <MediosPago />;
      case 'ultimasOrdenes':
        return <UltimasOrdenes />;
      case 'seguridad':
        return <Seguridad />;
      case 'resenasValoraciones':
        return <ResenasValoraciones />;
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
            <p>{name}</p> {}
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
        </div>
      </nav>
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
};

export default UserProfile;
