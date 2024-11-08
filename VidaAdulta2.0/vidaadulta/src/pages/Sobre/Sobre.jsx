import React from 'react';
import './sobre.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

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

          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Sobre;