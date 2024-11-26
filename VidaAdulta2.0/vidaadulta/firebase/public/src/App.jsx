import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Especialidades from './pages/Especialidades/Especialidades';
import Sobre from './pages/Sobre/Sobre';
import Feedback from './pages/Feedback/Feedback.jsx';
import Contato from './pages/Contato/Contato.jsx';
import Home from './pages/Home/Home.jsx';
import Responsabilidades from './pages/Responsabilidades/Responsabilidades';
import Alistamento from './pages/Alistamento/Alistamento';
import Titulo from './pages/Titulo/Titulo';
import Rg from './pages/Rg/Rg.jsx';
import Cnh from './pages/Cnh/Cnh.jsx';
import DireitosDeveres from './pages/Direitos/DireitosDeveres.jsx';
import Financeiro from './pages/Financeiro/Financeiro.jsx';
import Diretrizes from './pages/Diretrizes/Diretrizes.jsx';
import Independencia from './pages/Independencia/Independencia.jsx';
import Carreira from './pages/Carreira/Carreira.jsx';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import LeisTrabalhistas from './pages/LeisTrabalhistas/LeisTrabalhistas.jsx';
import DireitosCivis from './pages/DireitosCivis/DireitosCivis.jsx';
import DireitosPoliticos from './pages/DireitosPoliticos/DireitosPoliticos.jsx';
import DireitosHumanos from './pages/DireitosHumanos/DireitosHumanos.jsx';
import Perfil from './pages/Perfil/Perfil.jsx';
import PerfilDetalhes from './pages/PerfilDetalhes/PerfilDetalhes.jsx';
import { ThemeProvider } from './context/ThemeProvider.jsx';  // Importando o ThemeProvider
import Restrita from './pages/Restrita/Restrita.jsx';

const App = () => {
  const [avatar, setAvatar] = useState(null);

  const handleAvatarSubmit = (avatar) => {
    setAvatar(avatar);
  };

  return (
    <ThemeProvider> {/* Envolvendo a aplicação com ThemeProvider */}
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/especialidades" element={<Especialidades />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/contato" element={<Contato />} />
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
            <Route path="/Home" element={<Home />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/LeisTrabalhistas" element={<LeisTrabalhistas />} />
            <Route path="/DireitosCivis" element={<DireitosCivis />} />
            <Route path="/DireitosPoliticos" element={<DireitosPoliticos />} />
            <Route path="/DireitosHumanos" element={<DireitosHumanos />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/perfildetalhes" element={<PerfilDetalhes />} />
            <Route path="/pagina-restrita" element={<Restrita />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider> 
  );
};

export default App;
