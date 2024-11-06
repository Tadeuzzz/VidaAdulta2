import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import userIcon from "../assets/user.svg";

const Header = ({ avatar }) => {
  const navigate = useNavigate();

  const handleUserIconClick = () => {
    navigate("/perfildetalhes"); // Redireciona para a página de perfil
  };

  return (
    <header>
      <div className="interface">
        <div className="logo">
          <a href="/home" className="logo-link">
            <img src={Logo} alt="Logo da Vida Adulta" className="logo-img" />
          </a>
        </div>

        <nav className="menu-desktop">
          <ul className="menu-list">
            <li className="menu-item">
              <a href="/home" className="menu-link">Início</a>
            </li>
            <li className="menu-item">
              <a href="/especialidades" className="menu-link">Especialidades</a>
            </li>
            <li className="menu-item">
              <a href="/sobre" className="menu-link">Sobre</a>
            </li>
            <li className="menu-item">
              <a href="/feedback" className="menu-link">Feedback</a>
            </li>
            <li className="menu-item">
              <a href="/contato" className="menu-link">Contato</a>
            </li>
          </ul>
        </nav>

        <div className="user-icon" onClick={handleUserIconClick}>
          {avatar ? (
            <img src={avatar} alt="Avatar do usuário" className="user-circle" />
          ) : (
            <img src={userIcon} alt="Ícone de Usuário" className="user-circle" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
