import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Registro";
import './App.css';
import Logo from './assets/logo.png';
import Especialidades from './pages/Especialidades';
import Sobre from './pages/Sobre';
import Feedback from './pages/Feedback.jsx';
import Login from './pages/Login.jsx';
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
import Independencia from './pages/Independencia.jsx'
import Carreira from './pages/Carreira.jsx';
import Perfil from "../pages/Perfil.jsx";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} /> {/* Home */}
          <Route path="/especialidades" element={<Especialidades />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/login" element={<Login />} />
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
          <Route path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>
  );
}