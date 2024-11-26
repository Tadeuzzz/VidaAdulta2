
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login }from '../pages/Login';
import Especialidades from '../pages/Especialidades/Especialidades.jsx';
import Sobre from '../pages/Sobre/Sobre.jsx';
import Feedback from '../pages/Feedback/Feedback.jsx';
import Contato from '../pages/Contato/Contato.jsx';
import Home from '../pages/Home/Home.jsx';
import Responsabilidades from '../pages/Responsabilidades/Responsabilidades.jsx';
import Alistamento from '../pages/Alistamento/Alistamento.jsx';
import Titulo from '../pages/Titulo/Titulo.jsx';
import Rg from  '../pages/Rg/Rg.jsx';
import Cnh from '../pages/Cnh/Cnh.jsx';
import DireitosDeveres from '../pages/Direitos/DireitosDeveres.jsx';
import Financeiro from '../pages/Financeiro/Financeiro.jsx';
import Diretrizes from '../pages/Diretrizes/Diretrizes.jsx';
import Independencia from '../pages/Independencia/Independencia.jsx';
import Carreira from '../pages/Carreira/Carreira.jsx';
import { Register } from '../pages/Register/index.jsx';
import LeisTrabalhistas from '../pages/LeisTrabalhistas/LeisTrabalhistas.jsx';
import DireitosCivis from '../pages/DireitosCivis/DireitosCivis.jsx'
import DireitosPoliticos from '../pages/DireitosPoliticos/DireitosPoliticos.jsx'
import DireitosHumanos from '../pages/DireitosHumanos/DireitosHumanos.jsx'
import Perfil from '../pages/Perfil/Perfil.jsx';
import PerfilDetalhes from '../pages/PerfilDetalhes/PerfilDetalhes.jsx';

const AppRoutes = () => {
  return (
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
    </Routes>
  );
};

export default AppRoutes;
