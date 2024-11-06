import React from 'react';
import './calma.css';
import cadastro from './Cadastro.jsx'

const LoginPage = () => {
  const logar = () => {
    // Lógica de login que estava no arquivo JS
    console.log("Login button clicked");
  };

  return (
    <>

      <div className="wrapper">
        <div className="form-box login">
          <h2 style={{ textAlign: 'center', marginTop: '35px' }}>Login</h2>
          <form action="#">
            <div className="imput-box">
              <input type="text" placeholder="Login" id="login" style={{ marginBottom: '10px', marginLeft: '20px', width: '90%' }} />
              <input type="password" placeholder="Senha" id="senha" style={{ marginBottom: '10px', marginLeft: '20px', width: '90%' }} />
            </div>
            <div className="remember-forgot">
              <label><input type="checkbox" />Remember me</label>
              <a href="#">Forgot Password</a>
            </div>

            <button type="submit" id="submit-btn" onClick={(e) => { e.preventDefault(); logar(); }}>Entrar</button>

            <div className="register-link">
              <p>Don't have an account? <a href= '/cadastro'>Register</a></p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
