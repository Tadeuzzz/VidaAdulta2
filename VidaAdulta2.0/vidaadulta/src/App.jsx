import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Especialidades from './pages/Especialidades';
import Sobre from './pages/Sobre';
import Feedback from './pages/Feedback.jsx';
import Calma from './pages/calma.jsx';
import Contato from './pages/Contato.jsx';
import Cadastro from './pages/Cadastro.jsx';
import Home from './pages/Home';
import Responsabilidades from './pages/Responsabilidades';
import Alistamento from './pages/Alistamento';
import Titulo from './pages/Titulo';
import Rg from './pages/Rg.jsx';
import Cnh from './pages/Cnh.jsx';
import DireitosDeveres from './pages/DireitosDeveres.jsx';
import Financeiro from './pages/Financeiro.jsx';
import Diretrizes from './pages/Diretrizes.jsx';
import Independencia from './pages/Independencia.jsx';
import Carreira from './pages/Carreira.jsx';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import LeisTrabalhistas from './pages/LeisTrabalhistas.jsx';
import DireitosCivis from './pages/DireitosCivis.jsx';
import DireitosPoliticos from './pages/DireitosPoliticos.jsx';
import DireitosHumanos from './pages/DireitosHumanos.jsx';
import UserForm from './pages/UsuarioForm.jsx';
import UserPage from './pages/Usuario.jsx';
import Perfil from './pages/Perfil.jsx';
import PerfilDetalhes from './pages/PerfilDetalhes/PerfilDetalhes.jsx';

const App = () => {
  const [avatar, setAvatar] = useState(null);

  const handleAvatarSubmit = (avatar) => {
    setAvatar(avatar);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/especialidades" element={<Especialidades />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/responsabilidades" element={<Responsabilidades />} />
          <Route path="/alistamento" element={<Alistamento />} />
          <Route path="/titulo" element={<Titulo />} />
          <Route path="/rg" element={<Rg />} />
          <Route path="/cnh" element={<Cnh />} />
          <Route path="/direitosdeveres" element={<DireitosDeveres />} />
          <Route path="/financeiro" element={<Financeiro />} />
          <Route path="/diretrizes" element={<Diretrizes />} />
          <Route path="/independencia" element={<Independencia />} />
          <Route path="/carreira" element={<Carreira />} />
          <Route path="/Calma" element={<Calma />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/LeisTrabalhistas" element={<LeisTrabalhistas />} />
          <Route path="/DireitosCivis" element={<DireitosCivis />} />
          <Route path="/DireitosPoliticos" element={<DireitosPoliticos />} />
          <Route path="/DireitosHumanos" element={<DireitosHumanos />} />
          <Route path="/userpage" element={<UserPage />} />
          <Route path="/userform" element={<UserForm onAvatarSubmit={handleAvatarSubmit} />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/perfildetalhes" element={<PerfilDetalhes />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
