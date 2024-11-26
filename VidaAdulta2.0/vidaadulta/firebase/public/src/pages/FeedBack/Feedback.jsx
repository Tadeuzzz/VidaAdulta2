import React, { useState, useEffect } from "react";
import { db } from "../../services/firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";
import budha from '../../assets/user.svg';
import Footer from "../../components/Footer"; // Importando o Footer
import Header from "../../components/Header"; // Importando o Header
import './Feedback.css'; // Estilo da página de feedback

function App() {
  const [comentario, setComentario] = useState(""); // Estado para armazenar o feedback do usuário
  const [feedbacks, setFeedbacks] = useState([]); // Estado para armazenar os comentários do Firestore
  const [nome, setNome] = useState(""); // Estado para armazenar o nome do usuário
  const [email, setEmail] = useState(""); // Estado para armazenar o e-mail do usuário
  const [stars, setStars] = useState(0); // Estado para armazenar a avaliação por estrelas
  const [selectedStars, setSelectedStars] = useState(0); // Estado para armazenar a estrela selecionada para filtro
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento

  // Função para carregar os feedbacks do Firestore
  const loadFeedbacks = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, "feedbacks"));
    const feedbacksList = [];
    querySnapshot.forEach((doc) => {
      feedbacksList.push({ id: doc.id, ...doc.data() });
    });
    setFeedbacks(feedbacksList);
    setLoading(false);
  };

  // Função para salvar um novo feedback no Firestore
  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();

    if (!comentario || !nome || !email || stars === 0) return; // Não permite enviar feedback vazio ou sem nome, email ou estrelas

    try {
      await addDoc(collection(db, "feedbacks"), {
        nome,
        email,
        comentario,
        stars, // Salvando a nota de estrelas
        data: new Date(),
      });

      setComentario(""); // Limpa o campo de comentário após o envio
      setNome(""); // Limpa o campo de nome após o envio
      setEmail(""); // Limpa o campo de e-mail após o envio
      setStars(0); // Reseta as estrelas após o envio
      loadFeedbacks(); // Recarrega os feedbacks após adicionar um novo
    } catch (error) {
      console.error("Erro ao salvar feedback:", error);
    }
  };

  useEffect(() => {
    loadFeedbacks(); // Carrega os feedbacks quando o componente é montado
  }, []);

  // Função para exibir estrelas
  const renderStars = (rating) => {
    const starsArray = [];
    for (let i = 1; i <= 5; i++) {
      starsArray.push(
        <span key={i} className={i <= rating ? "filled-star" : "empty-star"}>
          &#9733;
        </span>
      );
    }
    return starsArray;
  };

  // Filtrar os feedbacks com base na estrela selecionada
  const filteredFeedbacks = selectedStars === 0 
    ? feedbacks 
    : feedbacks.filter(feedback => feedback.stars === selectedStars);

  return (
    <>
      <Header /> {/* Adiciona o cabeçalho ao componente */}
      <main>
        <section className="formulario">
          <div className="interface">
            <form onSubmit={handleFeedbackSubmit}>
              <input 
                type="text" 
                placeholder="Seu nome completo:" 
                value={nome} 
                onChange={(e) => setNome(e.target.value)} 
                required 
              />
              <input 
                type="email" 
                placeholder="Seu e-mail:" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
              <input 
                type="tel" 
                placeholder="Seu celular:" 
              />
              <textarea 
                placeholder="Sua mensagem" 
                value={comentario} 
                onChange={(e) => setComentario(e.target.value)} 
                required 
              />
              
              {/* Seção para selecionar a avaliação por estrelas */}
              <div className="stars-rating">
                <label>Avaliação: </label>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={star <= stars ? "filled-star" : "empty-star"}
                    onClick={() => setStars(star)}
                    style={{ cursor: "pointer", fontSize: "24px" }}
                  >
                    &#9733;
                  </span>
                ))}
              </div>

              <div className="btn-enviar">
                <input type="submit" value="ENVIAR" />
              </div>
            </form>
          </div>
        </section>

        {/* Seção de filtro de estrelas */}
        <section className="filter-stars">
          <label>Filtrar por estrelas: </label>
          <select onChange={(e) => setSelectedStars(parseInt(e.target.value))} value={selectedStars}>
            <option value={0}>Todos</option>
            <option value={1}>1 Estrela</option>
            <option value={2}>2 Estrelas</option>
            <option value={3}>3 Estrelas</option>
            <option value={4}>4 Estrelas</option>
            <option value={5}>5 Estrelas</option>
          </select>
        </section>

        {/* Exibindo os comentários salvos no Firebase */}
        <div className="carousel-wrapper">
          <div className="testimonial-carousel">
            {loading ? (
              <p>Carregando feedbacks...</p>
            ) : (
              filteredFeedbacks.map((feedback) => (
                <div key={feedback.id} className="testimonial-item">
                 <img 
                    src={feedback.nome === "João Silva" ? tue : feedback.nome === "Maria Oliveira" ? vino : budha} 
                    alt={feedback.nome} 
                    className="profile-img" 
                  />
                  <p>"{feedback.comentario}"</p>
                  <span>- {feedback.nome}</span>
                  {/* Exibindo as estrelas */}
                  <div className="stars-rating">
                  {renderStars(feedback.stars)}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <Footer /> {/* Adiciona o rodapé */}
      </main>
    </>
  );
}

export default App;
