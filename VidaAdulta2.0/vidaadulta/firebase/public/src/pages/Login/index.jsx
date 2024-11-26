import React, { useState, useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../services/firebaseConfig"; // Importando o Firestore
import { doc, setDoc } from "firebase/firestore"; // Importando funções do Firestore
import Logo from "../../assets/logo.png";
import "./login.css";
import Header2 from "../../components/HeaderLoginRegister";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  async function handleSignIn(e) {
    e.preventDefault();
    setErrorMessage("");
    try {
      const userCredential = await signInWithEmailAndPassword(email, password);
      const userId = userCredential.user.uid;

      // Armazenando a data e hora do login no Firestore
      await setDoc(doc(db, "logins", userId), {
        lastLogin: new Date(),
      }, { merge: true }); // Usando merge para não sobrescrever outros dados

      navigate("/Home");
    } catch (err) {
      setErrorMessage(err.message);
    }
  }

  useEffect(() => {
    if (user) {
      navigate("/Home");
    }

    if (error) {
      setErrorMessage(error.message);
    }
  }, [user, error, navigate]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="container">
      <Header2 />
      <form onSubmit={handleSignIn}>
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <a href="#">Esqueceu sua senha?</a>

        {errorMessage && <p className="errorMessage">{errorMessage}</p>}

        <button type="submit" className="button">
          Entrar
        </button>

        <div className="footer-container">
          <p>Você não tem uma conta?</p>
          <Link to="/register">Crie a sua conta aqui</Link>
        </div>
      </form>

      {/* Footer adicionado diretamente no código */}
      <footer className="custom-footer">
        <div className="interface2">
          <div className="flex">
            <div className="logo-footer">
              <img src={Logo} alt="Logotipo Agência BRN" className="footer-logo" />
            </div>
            <div className="btn-social">
              <a href="https://www.instagram.com/vidaadulta01/" target="_blank" rel="noopener noreferrer">
                <button className="social-button">
                  <i className="bi bi-instagram"></i>
                </button>
              </a>
              <a href="https://www.youtube.com/channel/UCEW7ikRW6oyugAtEj2uSioA" target="_blank" rel="noopener noreferrer">
                <button className="social-button">
                  <i className="bi bi-youtube"></i>
                </button>
              </a>
              <a href="https://www.linkedin.com/in/vida-adulta-0b1653324/" target="_blank" rel="noopener noreferrer">
                <button className="social-button">
                  <i className="bi bi-linkedin"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
