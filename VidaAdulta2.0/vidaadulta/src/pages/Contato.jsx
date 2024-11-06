import React, { useState } from 'react';
import './contato.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContatoPage = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    dataNascimento: '',
    endereco: '',
    endereco2: '',
    estado: '',
    cidade: '',
    cep: '',
    genero: 'masculino', // Default
    regiao: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Aqui você pode enviar os dados para o servidor ou processar como desejar.
  };

  return (
    <>
      <Header /> {/* Adiciona o cabeçalho ao componente */}
      <section className="container2">
        <header className='Contato'>Contato</header>
        <form className="form" onSubmit={handleSubmit}>
          <div className="inputContainer">
            <label htmlFor="nome">Nome Completo</label>
            <input
              type="text"
              name="nome"
              id="nome"
              placeholder="Coloque seu nome completo"
              onChange={handleChange}
              required
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Coloque seu e-mail"
              onChange={handleChange}
              required
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="telefone">Número Telefone</label>
            <input
              type="tel"
              name="telefone"
              id="telefone"
              placeholder="Coloque seu número"
              onChange={handleChange}
              required
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="dataNascimento">Data de Nascimento</label>
            <input
              type="date"
              name="dataNascimento"
              id="dataNascimento"
              onChange={handleChange}
              required
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="endereco">Endereço</label>
            <input
              type="text"
              name="endereco"
              id="endereco"
              placeholder="Coloque seu endereço"
              onChange={handleChange}
              required
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="endereco2">Endereço 2</label>
            <input
              type="text"
              name="endereco2"
              id="endereco2"
              placeholder="Coloque seu endereço 2"
              onChange={handleChange}
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="estado">Estado</label>
            <input
              type="text"
              name="estado"
              id="estado"
              placeholder="Estado"
              onChange={handleChange}
              required
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="cidade">Cidade</label>
            <input
              type="text"
              name="cidade"
              id="cidade"
              placeholder="Cidade"
              onChange={handleChange}
              required
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="cep">CEP</label>
            <input
              type="number"
              name="cep"
              id="cep"
              placeholder="CEP"
              onChange={handleChange}
              required
            />
          </div>

          <div className="gender-box">
            <h3>Gênero</h3>
            <div className="gender-option">
              <div className="gender">
                <input
                  type="radio"
                  id="check-male"
                  name="genero"
                  value="masculino"
                  onChange={handleChange}
                  checked={formData.genero === 'masculino'}
                />
                <label htmlFor="check-male">Masculino</label>
              </div>
              <div className="gender">
                <input
                  type="radio"
                  id="check-female"
                  name="genero"
                  value="feminino"
                  onChange={handleChange}
                />
                <label htmlFor="check-female">Feminino</label>
              </div>
              <div className="gender">
                <input
                  type="radio"
                  id="check-other"
                  name="genero"
                  value="outro"
                  onChange={handleChange}
                />
                <label htmlFor="check-other">Prefiro não dizer</label>
              </div>
            </div>
          </div>

          <div className="inputContainer">
            <label htmlFor="regiao">Região</label>
            <select
              name="regiao"
              id="regiao"
              onChange={handleChange}
              required
            >
              <option hidden>Selecione a Região</option>
              <option>Norte</option>
              <option>Nordeste</option>
              <option>Centro-Oeste</option>
              <option>Sudeste</option>
              <option>Sul</option>
            </select>
          </div>

          <button type="submit">Enviar</button>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default ContatoPage;
