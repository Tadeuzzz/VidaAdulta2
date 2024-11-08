import Footer from '../../components/Footer';
import Header from '../../components/Header';
import VotingSystemFinanceiro from '../../components/VotingSystems/VotingSystemFinanceiro';
import './../../pages/Sublista.css'
import React from 'react';

const Sobre = () => (
  <section className="sobre">
            <Header/>
    <div className="interface">
      <div className="flex">
        <div className="img-sobre"></div>

        <div className="txt-sobre">
          <h2>Guia de Independência Pessoal <span></span></h2>
          <p>Uma "Guia de Independência Pessoal" pode ser um recurso extremamente útil para quem está buscando aumentar sua autonomia e capacidade de tomar decisões próprias em diversas áreas da vida. Aqui estão alguns tópicos que poderiam ser abordados em uma guia desse tipo:</p>
          
          <h3>Autoconhecimento e Definição de Objetivos:</h3>
          <p>O primeiro passo para alcançar a independência pessoal é entender quem você é, quais são seus valores, habilidades e interesses. Isso ajuda a definir metas claras e alinhadas com suas aspirações pessoais e profissionais.</p>
          
          <h3>Educação Financeira:</h3>
          <p>Um dos pilares da independência pessoal é a habilidade de gerenciar suas finanças de forma responsável. Isso inclui criar um orçamento, economizar, investir e planejar para o futuro financeiro.</p>
          
          <h3>Desenvolvimento de Habilidades:</h3>
          <p>Identificar e desenvolver habilidades práticas e profissionais que aumentem suas oportunidades no mercado de trabalho ou em empreendimentos pessoais.</p>
          
          <h3>Networking e Relacionamentos:</h3>
          <p>Aprender a construir e manter relacionamentos pessoais e profissionais é crucial para expandir suas oportunidades e receber suporte emocional e prático.</p>
          
          <h3>Saúde e Bem-estar:</h3>
          <p>Cuidar da saúde física e mental é essencial para sustentar a independência pessoal a longo prazo. Isso inclui hábitos saudáveis de alimentação, exercício físico regular e gestão do estresse.</p>

          <h3>Resolução de Problemas e Tomada de Decisões:</h3>
          <p>Desenvolver habilidades de pensamento crítico e estratégias para resolver problemas e tomar decisões de forma eficaz e autônoma.</p>

          <h3>Planejamento e Organização:</h3>
          <p>Aprender a planejar suas atividades diárias, definir prioridades e organizar seu tempo ajuda a manter o foco e alcançar suas metas com eficiência.</p>

          <br />
        </div>
      </div>
</div>
<VotingSystemFinanceiro />
    <Footer />
  </section>
);

export default Sobre;