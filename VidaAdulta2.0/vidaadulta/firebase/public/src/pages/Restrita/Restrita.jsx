import React, { useState } from 'react';
import './Restrita.css'; 
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import VideoPlayer from '../../components/VideoPlayer2'; 
import Video1 from '../../assets/videos/DireitosHumanos.mp4';
import Video2 from '../../assets/videos/DireitosPolíticos.mp4';
import Video3 from '../../assets/videos/TituloEleitor.mp4';
import Video4 from '../../assets/videos/LiberdadeExpressao.mp4';
import Video5 from '../../assets/videos/DireitosCivil.mp4';
import Video6 from '../../assets/videos/DireitosSociais.mp4';
import DireitosHumanos from '../../assets/imagens/direitoshumanosimg.jpg'
import DireitosPoliticos from '../../assets/imagens/direitospoliticosimg.jpg'
import TituloEleitor from '../../assets/imagens/tituloeleitorimg.jpeg'
import LiberdadeExpressao from '../../assets/imagens/liberdadeexpressaoimg.jpg'
import DireitosCivil from '../../assets/imagens/direitoscivilimg.png'
import DireitosSociais from '../../assets/imagens/direitossociaisimg.jpg'


const cardsData = [
    {
        title: "Direitos Humanos",
        description: "Entenda os direitos fundamentais de cada cidadão, desde a liberdade até a igualdade de oportunidades e proteção contra discriminação.",
        imageUrl: DireitosHumanos,
        videoUrl: Video1,  
      },
      {
        title: "Direitos Políticos",
        description: "Explore o direito de participação na vida política de um país, incluindo o direito ao voto, a elegibilidade e a liberdade de expressão.",
        imageUrl: DireitosPoliticos,
        videoUrl: Video2,  
      },
      {
        title: "Título de Eleitor",
        description: "Aprenda a emitir e utilizar seu título de eleitor, garantindo sua participação ativa nas eleições.",
        imageUrl: TituloEleitor,
        videoUrl: Video3,  
      },
      {
        title: "Liberdade de Expressão",
        description: "Compreenda o direito de se expressar livremente sem censura, dentro dos limites estabelecidos pela lei e pelos direitos dos outros.",
        imageUrl: LiberdadeExpressao,
        videoUrl: Video4,  
      },
      {
        title: "Direitos Civis",
        description: "Conheça os direitos civis básicos que garantem a igualdade, a liberdade e a proteção sob a lei, incluindo a liberdade de locomoção e o direito à privacidade.",
        imageUrl: DireitosCivil,
        videoUrl: Video5,  
      },
      {
        title: "Direitos Sociais",
        description: "Estude os direitos que garantem as condições básicas para uma vida digna, como educação, saúde, alimentação e moradia.",
        imageUrl: DireitosSociais,
        videoUrl: Video6,  
      },

];

const Restrita = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCardClick = (videoUrl) => {
    setSelectedVideo(videoUrl); 
  };

  const filteredCards = cardsData.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <input
        type="text"
        placeholder="Buscar Videos..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      <div className="card-container">
        {filteredCards.map((card, index) => (
          <div className="card" key={index} onClick={() => handleCardClick(card.videoUrl)}>
            <div className="card-image1" style={{ backgroundImage: `url(${card.imageUrl})` }}></div>
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedVideo && <VideoPlayer videoUrl={selectedVideo} />}

      <Footer />
    </div>
  );
};

export default Restrita;
