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
          <h2>Diretrizes para a Saúde e Bem-Estar</h2>
          <p>Essa funcionalidade oferece orientações abrangentes sobre saúde física, mental e emocional para jovens adultos recém-adultos. Inclui informações sobre exercícios recomendados, exames médicos essenciais, saúde mental, estratégias de gerenciamento de estresse e recursos de apoio, como linhas diretas de ajuda.</p>

          <h3>Saúde Física</h3>
          <h4>Exercícios Recomendados</h4>
          <p>Manter-se ativo é crucial para a saúde física. Recomenda-se:</p>
          <ul>
            <li><strong>Atividade Aeróbica:</strong> Pelo menos 150 minutos de atividade aeróbica moderada ou 75 minutos de atividade intensa por semana.</li>
            <li><strong>Treinamento de Força:</strong> Exercícios que trabalham todos os principais grupos musculares, pelo menos duas vezes por semana.</li>
          </ul>

          <h4>Exames Médicos Essenciais</h4>
          <p>Realizar exames médicos regulares é fundamental para detectar problemas de saúde precocemente. Inclui:</p>
          <ul>
            <li>Check-up anual com um clínico geral</li>
            <li>Exames de sangue para monitorar níveis de colesterol e glicose</li>
            <li>Exames específicos conforme histórico familiar e orientações médicas</li>
          </ul>

          <h3>Saúde Mental</h3>
          <h4>Estratégias de Gerenciamento de Estresse</h4>
          <p>Gerenciar o estresse é vital para a saúde mental. Algumas estratégias eficazes incluem:</p>
          <ul>
            <li>Praticar técnicas de relaxamento, como meditação e respiração profunda</li>
            <li>Manter um diário para expressar pensamentos e sentimentos</li>
            <li>Buscar apoio social de amigos e familiares</li>
          </ul>

          <h4>Recursos de Apoio</h4>
          <p>Em momentos de dificuldade, utilize recursos de apoio, como:</p>
          <ul>
            <li>Linhas diretas de ajuda, como CVV (Centro de Valorização da Vida)</li>
            <li>Grupos de apoio e terapia</li>
            <li>Plataformas online de suporte emocional</li>
          </ul>

          <h3>Finalização</h3>
          <p>Seguindo essas diretrizes, você estará no caminho certo para uma vida saudável e equilibrada. Lembre-se de que cuidar de sua saúde física, mental e emocional é fundamental para o bem-estar geral. Boa sorte!</p>

          <p>Se tiver mais dúvidas, consulte profissionais de saúde ou acesse recursos online confiáveis para obter mais informações.</p>

          <br />

        </div>
      </div>
    </div>
    <Footer />
  </section>
);

export default Sobre;