import Footer from '../components/Footer';
import Header from '../components/Header';
import VotingSystem from '../components/VotingSystem';
import './Sublista.css'
import React from 'react';

const Sobre = () => (
    <section className="sobre">
              <Header />
        <div className="interface">
          <div className="flex">
            <div className="txt-sobre">
              <h2>Guia de Carreira e Educação: Tomando Decisões Informadas aos 18 Anos</h2>
              <p>Como um adolescente que acaba de completar 18 anos, é crucial ter acesso a informações detalhadas sobre opções de carreira e educação para tomar decisões bem fundamentadas sobre o futuro profissional e acadêmico.</p>

              <h3>Passo 1: Explorando Opções Educacionais e Profissionais</h3>
              <p>Para iniciar sua jornada educacional e profissional, é essencial explorar diversas opções disponíveis. Assim como você se matricula em um Centro de Formação de Condutores (CFC) para obter sua CNH...</p>

              {/* Restante do conteúdo */}

            </div>
          </div>
        </div>
        <Footer />
      </section>
);

export default Sobre;