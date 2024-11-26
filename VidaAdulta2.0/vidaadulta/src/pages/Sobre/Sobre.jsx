import React from 'react';
import './sobre.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import avatar3 from '../../assets/fprvidaadulta.png'; 
import avatar2 from '../../assets/leovidaadulta.png'; 
import avatar1 from '../../assets/tadeuvidaadulta.png';
import avatar4 from '../../assets/mrzvidaadulta.jpg'; 
import avatar5 from '../../assets/sabinovidaadulta.jpg'; 


const Sobre = () => {
  return (
    <main>
      <Header />
      <section className="topo-do-site">
        <div className="interface">
          <div className="flex">
            <div className="txt-topo-site">
              <h1>TRANSFORMANDO IDEIAS EM REALIDADE DIGITAL<span>.</span></h1>
              <p>
                Estamos muito felizes em ter você aqui! Este site foi criado
                especialmente para adolescentes prontos para dar os primeiros passos
                rumo à vida adulta. Sabemos que essa transição pode ser cheia de
                desafios e dúvidas, mas estamos aqui para tornar esse caminho mais
                fácil e esclarecedor.

                Nosso objetivo é fornecer ferramentas e informações práticas para
                ajudar você a se preparar para essa nova fase da vida, com
                responsabilidade e confiança.
              </p>

              <div className="btn-contato">
                <a href="/contato">
                  <button>Entre em contato</button>
                </a>
              </div>
            </div>

            {/* Adicionando os avatares */}
            <div className="avatar-container">
              <div className="avatar">
                <img src={avatar1} alt="Gabriel Athadeu" />
                <p>Gabriel Athadeu</p>
              </div>
              <div className="avatar">
                <img src={avatar2} alt="Leonardo Xavier" />
                <p>Leonardo Xavier</p>
              </div>
              <div className="avatar">
                <img src={avatar3} alt="Filippo Peruzzo" />
                <p>Filippo Peruzzo</p>
              </div>
              <div className="avatar">
                <img src={avatar4} alt="Arthur Moreira" />
                <p>Arthur Moreira</p>
              </div>
              <div className="avatar">
                <img src={avatar5} alt="Lucas Sabino" />
                <p>Lucas Sabino</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Sobre;
