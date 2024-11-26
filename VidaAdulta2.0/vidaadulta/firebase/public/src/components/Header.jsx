import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth"; // Importando a função de logout do Firebase
import { auth } from "../services/firebaseConfig"; // Assumindo que a configuração do Firebase está aqui
import Logo from "../assets/logo.png";
import userIcon from "../assets/user.svg";
import logoutIcon from "../assets/logout.svg"; // Importe o ícone de logout

const Header = ({ avatar }) => {
  const navigate = useNavigate();

  // Função chamada ao clicar no ícone de usuário (para ir ao perfil)
  const handleUserIconClick = () => {
    navigate("/perfildetalhes"); // Redireciona para a página de perfil
  };

  // Função para fazer logout
  const handleLogout = async () => {
    try {
      await signOut(auth); // Realiza o logout com o Firebase
      navigate("/"); // Redireciona o usuário para a página de login
    } catch (error) {
      console.error("Erro ao sair:", error);
    }
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
            {/* Botão de Sair com ícone de logout */}
            <li className="menu-item">
              <button onClick={handleLogout} className="logout-button">
                <img src={logoutIcon} alt="Sair" className="logout-icon" />
              </button>
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
