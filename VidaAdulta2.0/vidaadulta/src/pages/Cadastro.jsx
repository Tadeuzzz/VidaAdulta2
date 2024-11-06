import React from 'react';
import './calma.css';

const RegisterPage = () => {
  const cadastrar = () => {
    // Lógica de cadastro que seria implementada aqui
    console.log("Register button clicked");
  };

  return (
    <>

      <div className="wrapper">
        <div className="form-box login">
          <h2 style={{ textAlign: 'center', marginTop: '35px' }}>Cadastrar</h2>
          <form action="#">
            <div className="imput-box">
              <input type="text" placeholder="Nome Completo" id="nome" style={{ marginBottom: '10px', marginLeft: '20px', width: '90%' }} />
              <input type="email" placeholder="Email" id="email" style={{ marginBottom: '10px', marginLeft: '20px', width: '90%' }} />
              <input type="password" placeholder="Senha" id="senha" style={{ marginBottom: '10px', marginLeft: '20px', width: '90%' }} />
              <input type="password" placeholder="Confirmar Senha" id="confirmar-senha" style={{ marginBottom: '10px', marginLeft: '20px', width: '90%' }} />
            </div>

            <button type="submit" id="submit-btn" onClick={(e) => { e.preventDefault(); cadastrar(); }}>Cadastrar</button>

            <div className="register-link">
              <p>Já tem uma conta? <a href="/login">Entrar</a></p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
