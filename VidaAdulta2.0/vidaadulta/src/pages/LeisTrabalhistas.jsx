import React, { useState } from 'react';
import './LeisTrabalhistas.css';
import Image from '../assets/leitrabalhistas.jpg'
import Header from '../components/Header';
import Footer from '../components/Footer';

const cardsData = [
  { title: "Lei 605/1949", description: "Repouso Semanal Remunerado", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["Repouso", "Remuneração"] },
  { title: "Lei 2.757/1956", description: "Porteiros, Zeladores", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["Porteiros", "Zeladores"] },
  { title: "Lei 2.959/1956", description: "Contrato por Obra ou Serviço Certo", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["Contrato", "Obra"] },
  { title: "Lei 3.030/1956", description: "Desconto por Fornecimento de Alimentação", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["Desconto", "Alimentação"] },
  { title: "Lei 3.207/1957", description: "Empregados Vendedores, Viajantes ou Pracistas", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["Vendedores", "Viagem"] },
  { title: "Lei 3.857/1960", description: "Músicos", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["Músicos", "Profissão"] },
  { title: "Lei 4.090/1962", description: "Gratificação de Natal", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["Gratificação", "Natal"] },
  { title: "Decreto 1.232/1962", description: "Aeroviários", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["Aeroviários", "Profissão"] },
  { title: "Lei 4.749/1965", description: "13º Salário", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["Salário", "Benefício"] },
  { title: "Lei 4.860/1965", description: "Regime de Trabalho nos Portos Organizados", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["Portos", "Regime"] },
  { title: "Lei 4.886/1965", description: "Representantes Comerciais Autônomos", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["Comerciais", "Autônomos"] },
  { title: "Lei 4.950-A/1966", description: "Remuneração de Profissionais em Engenharia, Química, Arquitetura, Agronomia e Veterinária", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["Engenharia", "Remuneração"] },
  { title: "Lei 5.859/1972", description: "Empregado Doméstico", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["Doméstico", "Trabalho"] },
  { title: "Lei 5.889/1973", description: "Trabalho Rural", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["Rural", "Trabalho"] },
  { title: "Lei 6.019/1974", description: "Trabalho Temporário Urbano", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["Temporário", "Urbano"] },
  { title: "Lei 6.494/1977 e Lei 11.788/2008", description: "Estagiários", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["Estágio", "Educação"] },
  { title: "Lei 6.533/1978", description: "Artistas e Técnicos em Espetáculos de Diversões", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["Artistas", "Espetáculos"] },
  { title: "Lei 6.615/1978", description: "Radialistas", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["Radialistas", "Comunicação"] },
  { title: "Lei 6.919/1981", description: "FGTS de Diretores", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["FGTS", "Diretores"] },
  { title: "Lei 6.932/1981", description: "Médicos Residentes", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["Médicos", "Residência"] },
  { title: "Lei 7.183/1984", description: "Aeronautas", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["Aeronautas", "Aviação"] },
  { title: "Lei 7.210/1984", description: "Trabalho e Serviços do Preso", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["Preso", "Trabalho"] },
  { title: "Lei 7.418/1985", description: "Vale-Transporte", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["Transporte", "Vale"] },
  { title: "Lei 7.644/1987", description: "Mãe Social", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["Social", "Família"] },
  { title: "Lei 8.036/1990", description: "Lei do FGTS", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["FGTS", "Trabalho"] },
  { title: "Lei 8.906/1994", description: "Advogados", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["Advogados", "Justiça"] },
  { title: "Lei 9.601/1998", description: "Banco de Horas e Contrato por Prazo Determinado", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["Banco de Horas", "Contrato"] },
  { title: "Lei 9.719/1998", description: "Trabalho Portuário", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["Portos", "Trabalho"] },
  { title: "Lei 10.101/2000", description: "Participação dos Trabalhadores nos Lucros ou Resultados", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["Lucros", "Resultados"] },
  { title: "Lei 10.607/2002", description: "Declara Feriados Nacionais", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["Feriados", "Nacional"] },
  { title: "Lei 10.748/2003", description: "Programa Primeiro Emprego - PNPE", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["Emprego", "Juventude"] },
  { title: "Lei 10.820/2003", description: "Desconto de Prestações em Folha de Pagamento", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["Desconto", "Folha de Pagamento"] },
  { title: "Lei 12.009/2009", description: "Mototaxista e Motoboy", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["Mototaxista", "Motoboy"] },
  { title: "Lei 12.468/2011", description: "Taxista", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["Taxista", "Profissão"] },
  { title: "Lei 12.619/2012", description: "Motorista Profissional", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["Motorista", "Profissional"] },
  { title: "Lei 12.867/2013", description: "Regula a profissão de árbitro de futebol e dá outras providências", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["Árbitro", "Futebol"] },
  { title: "Lei 12.870/2013", description: "Dispõe sobre o exercício da atividade profissional de vaqueiro", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["Vaqueiro", "Profissão"] },
  { title: "Lei 13.432/2017", description: "Dispõe sobre o exercício da profissão de detetive particular", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["Detetive", "Privado"] },
  { title: "Lei 13.467/2017", description: "Lei da Reforma Trabalhista", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["Reforma", "Trabalhista"] },
  { title: "Lei 13.475/2017", description: "Aeronautas - Tripulante de Aeronave", imageUrl: Image, pageUrl: "/responsabilidades", tags: ["Aeronautas", "Tripulação"] },

];
  
const Especialidades = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCards = cardsData.filter(card =>
    card.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const goToPage = (pageUrl) => {
    window.location.href = pageUrl;
  };

  return (
    <div className="especialidades-container">
      <Header />
      <div className="especialidades-search-bar">
        <input
          type="text"
          className="especialidades-search-input"
          placeholder="Buscar Leis Trabalhistas..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="especialidades-cards">
        {filteredCards.map((card, index) => (
          <div className="especialidades-card" key={index} onClick={() => window.location.href = card.pageUrl}>
            <img src={card.imageUrl} alt={card.title} className="especialidades-card-image" />
            <div className="especialidades-card-content">
              <h3 className="especialidades-card-title">{card.title}</h3>
              <p className="especialidades-card-description">{card.description}</p>
              <div className="especialidades-card-tags">
                {card.tags.map((tag, idx) => (
                  <span key={idx} className="especialidades-card-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Especialidades;
