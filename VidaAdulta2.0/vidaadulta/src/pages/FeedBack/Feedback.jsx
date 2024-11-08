import React from 'react';
import './Feedback.css';
import tue from '../../assets/tue.jpg';
import budha from '../../assets/budah.jpg';
import vino from '../../assets/vino.jpg';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function App() {
  return (
    <>
      <Header /> {/* Adiciona o cabeçalho ao componente */}
      <main>
        <section className="formulario">
          <div className="interface">
            <h2 className="titulo">FEED<span>BACK.</span></h2>
            <form>
              <input type="text" placeholder="Seu nome completo:" required />
              <input type="email" placeholder="Seu e-mail:" required />
              <input type="tel" placeholder="Seu celular:" />
              <textarea placeholder="Sua mensagem" required></textarea>
              <div className="btn-enviar">
                <input type="submit" value="ENVIAR" />
              </div>
            </form>
          </div>
        </section>

        <div className="carousel-wrapper">
          <div className="testimonial-carousel">
            <div className="testimonial-item">
              <img src={tue} alt="João Silva" className="profile-img" />
              <p>"O conteúdo do site foi excepcional..."</p>
              <span>- João Silva</span>
            </div>
            <div className="testimonial-item">
              <img src={vino} alt="Maria Oliveira" className="profile-img" />
              <p>"Estou muito satisfeita com o conteúdo..."</p>
              <span>- Maria Oliveira</span>
            </div>
            <div className="testimonial-item">
              <img src={budha} alt="Pedro Santos" className="profile-img" />
              <p>"O site realizado foi excelente..."</p>
              <span>- Pedro Santos</span>
            </div>
            <div className="testimonial-item">
              <img src={tue} alt="Ana Costa" className="profile-img" />
              <p>"A experiência com este site foi incrível..."</p>
              <span>- Ana Costa</span>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
