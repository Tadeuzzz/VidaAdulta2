import React, { useState } from 'react';
import './Especialidades.css'; 
import ImageLeiTrabalhistas from '../assets/leitrabalhistas.jpg';
import ImageDireitosHumanos from '../assets/direitoshumanos.png';
import ImageDireitoCivis from '../assets/direitoscivis.jpg';
import ImageDireitosPoliticos from '../assets/direitospoliticos.jpeg';
import ImageResponsabilidade from '../assets/responsabilidade.jpg';
import ImageAlistamentoCard from '../assets/alistamentocard.jpg';
import ImageCNH from '../assets/CNH.png';
import ImageGuiaCarreira from '../assets/guiacarreira.jpg';
import ImageDiretrizes from '../assets/diretrizes.jpg';
import ImagePlanejamento from '../assets/planejamento.jpg';
import ImageRG from '../assets/rg.jpg';
import ImageTitulo from '../assets/titulo.jpeg';
import ImageIndependencia from '../assets/independencia.jpg';
import ImageDireitoseDeveres from '../assets/direitosedeveres.png';
import Header from '../components/Header';
import Footer from '../components/Footer';

const cardsData = [
  {
    title: "Responsabilidades Financeiras",
    description: "Ensinamos a administrar suas finanças de forma responsável, cobrindo temas como orçamento, dívidas, investimentos e planejamento de gastos futuros.",
    imageUrl: ImageResponsabilidade,
    pageUrl: "/responsabilidades",
  },
  {
    title: "Alistamento",
    description: "Orientamos você no processo completo de alistamento militar, garantindo que cumpra seus deveres cívicos de forma simples e eficiente.",
    imageUrl: ImageAlistamentoCard,
    pageUrl: "/alistamento",
  },
  {
    title: "Título de Eleitor",
    description: "Aprenda a emitir e utilizar seu título de eleitor, garantindo sua participação ativa nas eleições.",
    imageUrl: ImageTitulo,
    pageUrl: "/titulo",
  },
  {
    title: "Registro Geral",
    description: "Saiba como tirar ou renovar seu RG, documento essencial para sua identificação civil.",
    imageUrl: ImageRG,
    pageUrl: "/rg",
  },
  {
    title: "Carteira Nacional de Habilitação (CNH)",
    description: "Guiamos você pelos passos necessários para obter sua CNH e dirigir legalmente no Brasil.",
    imageUrl: ImageCNH,
    pageUrl: "/cnh",
  },
  {
    title: "Direitos e Deveres",
    description: "Entenda seus direitos e deveres como cidadão para exercer plenamente sua cidadania.",
    imageUrl: ImageDireitoseDeveres,
    pageUrl: "/direitosdeveres",
  },
  {
    title: "Planejador Financeiro Básico",
    description: "Oferecemos ferramentas práticas para organizar suas finanças pessoais e atingir suas metas econômicas.",
    imageUrl: ImagePlanejamento,
    pageUrl: "/financeiro",
  },
  {
    title: "Diretrizes",
    description: "Apresentamos diretrizes importantes para ajudá-lo a tomar decisões conscientes e responsáveis na vida cotidiana.",
    imageUrl: ImageDiretrizes,
    pageUrl: "/diretrizes",
  },
  {
    title: "Guia de Independência Pessoal",
    description: "Fornecemos um guia prático para desenvolver sua autonomia e tomar o controle de sua vida.",
    imageUrl: ImageIndependencia,
    pageUrl: "/independencia",
  },
  {
    title: "Guia de Carreira e Educação",
    description: "Ajudamos você a planejar sua trajetória educacional e profissional, maximizando seu potencial e oportunidades no mercado de trabalho.",
    imageUrl: ImageGuiaCarreira,
    pageUrl: "/carreira",
  },
  {
    title: "Leis Trabalhistas",
    description: "Entenda as leis que regem o ambiente de trabalho e seus direitos como trabalhador.",
    imageUrl: ImageLeiTrabalhistas,
    pageUrl: "/leistrabalhistas",
  },
  {
    title: "Direitos Civis",
    description: "Garantia de que ninguém seja privado de sua vida de forma arbitrária.",
    imageUrl: ImageDireitoCivis,
    pageUrl: "/direitoscivis",
  },
  {
    title: "Direitos Políticos",
    description: "Garantia de que ninguém seja privado de sua vida de forma arbitrária.",
    imageUrl: ImageDireitosPoliticos,
    pageUrl: "/direitospoliticos",
  },
  {
    title: "Direitos Humanos",
    description: "Garantia de que ninguém seja privado de sua vida de forma arbitrária.",
    imageUrl: ImageDireitosHumanos,
    pageUrl: "/direitoshumanos",
  },
];

const Especialidades = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCards = cardsData.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const goToPage = (pageUrl) => {
    window.location.href = pageUrl;
  };

  return (
    <div>
      <Header />
      <input
        type="text"
        placeholder="Buscar especialidades..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      <div className="card-container">
        {filteredCards.map((card, index) => (
          <div className="card" key={index} onClick={() => goToPage(card.pageUrl)}>
            <div className="card-image1" style={{ backgroundImage: `url(${card.imageUrl})` }}></div>
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              {/* Exibir as tags aqui */}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Especialidades;
