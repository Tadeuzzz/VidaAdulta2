import React, { useEffect, useState } from "react";
import { auth } from "../../services/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { db } from "../../services/firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import './PerfilDetalhes.css';

export function PerfilDetalhes() {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [userVotes, setUserVotes] = useState({});
  const [membership, setMembership] = useState("free");  // Definido como "free" por padrão
  const [loading, setLoading] = useState(true);  // Estado de loading

  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        try {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const data = docSnap.data();
            // Definindo os dados padrão caso não existam no Firestore
            setName(data.name || "Nome não disponível");
            setPhone(data.phone || "Telefone não disponível");
            setCpf(data.cpf || "CPF não disponível");
            setProfileImage(data.profileImage || null);
            setUserVotes(data.votes || {});
            
            // Se não houver plano definido, atribuir "free" como plano padrão
            const userMembership = data.membership || "free"; 
            setMembership(userMembership);
          } else {
            console.log("Documento não encontrado!");
            // Defina valores padrão caso o documento não exista
            setName("Nome não encontrado");
            setPhone("Telefone não encontrado");
            setCpf("CPF não encontrado");
          }
        } catch (error) {
          console.error("Erro ao carregar dados do perfil: ", error);
        } finally {
          setLoading(false); // Quando os dados forem carregados (ou erro ocorrer), definimos loading como false
        }
      };

      fetchData();
    }
  }, [user]);

  // Função para atualizar o plano no Firestore
  const handleMembershipChange = async (newMembership) => {
    if (user) {
      const docRef = doc(db, "users", user.uid);
      await updateDoc(docRef, {
        membership: newMembership,  // Atualizar o campo no Firestore
      });
      setMembership(newMembership);  // Atualizar o estado local
    }
  };

  // Funções para funcionalidades do plano
  const planDetails = {
    free: {
      price: 0,
      features: [
        "Acesso limitado a conteúdo"
      ]
    },
    plus: {
      price: 19.90,
      features: [
        "Mais conteúdo",
        "Suporte mais rápido",
        "Avisos no e-mail"
      ]
    },
    premium: {
      price: 49.90,
      features: [
        "Mais conteúdo",
        "Vídeos interativos",
        "Suporte mais rápido",
        "Acesso a aulas",
        "Conteúdo VIP",
        "Avisos no e-mail"
      ]
    }
  };

  const currentPlan = planDetails[membership];

  return (
    <div className="perfil-detalhes-container">
      <Header />
      {user ? (
        loading ? (
          <p className="perfil-detalhes-loading">Carregando detalhes do perfil...</p>
        ) : (
          <div className={`perfil-detalhes-content ${membership}`}> {/* Adiciona a classe com base no plano */}
            <h1>Perfil</h1>
            {profileImage && (
              <img
                src={profileImage}
                alt="Imagem de Perfil"
                className="perfil-detalhes-image"
              />
            )}
            <p><strong>Nome:</strong> {name}</p>
            <p><strong>Telefone:</strong> {phone}</p>
            <p><strong>CPF:</strong> {cpf}</p>
            
            <h2>Registros Lidos</h2>
            <ul className="votos-lista">
              {Object.keys(userVotes).map((vote, index) => (
                <li key={index} className={userVotes[vote] ? 'voto-realizado' : ''}>
                  {vote}
                  {userVotes[vote] && <span className="estrela">⭐</span>}
                </li>
              ))}
            </ul>

            <div className="membership-options">

              <div className={`plan-card ${membership === "free" ? "selected" : ""}`}>
                <h3>Plano Free</h3>
                <p>Acesso limitado ao conteúdo.</p>
                <ul>
                  {planDetails.free.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <p><strong>Preço: Gratuito</strong></p>
                <button 
                  className={`membership-btn ${membership === "free" ? "selected" : ""}`} 
                  onClick={() => handleMembershipChange("free")}>
                  Selecionar Free
                </button>
              </div>

              {/* Card explicativo para o plano Plus */}
              <div className={`plan-card ${membership === "plus" ? "selected" : ""}`}>
                <h3>Plano Plus</h3>
                <p>Mais recursos e suporte aprimorado.</p>
                <ul>
                  {planDetails.plus.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <p><strong>Preço: R$ 19,90</strong></p>
                <button 
                  className={`membership-btn ${membership === "plus" ? "selected" : ""}`} 
                  onClick={() => handleMembershipChange("plus")}>
                  Selecionar Plus - R$ 19,90
                </button>
              </div>

              {/* Card explicativo para o plano Premium */}
              <div className={`plan-card ${membership === "premium" ? "selected" : ""}`}>
                <h3>Plano Premium</h3>
                <p>O plano mais completo, com todos os recursos.</p>
                <ul>
                  {planDetails.premium.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <p><strong>Preço: R$ 49,90</strong></p>
                <button 
                  className={`membership-btn ${membership === "premium" ? "selected" : ""}`} 
                  onClick={() => handleMembershipChange("premium")}>
                  Selecionar Premium - R$ 49,90
                </button>
              </div>
            </div>

          </div>
        )
      ) : (
        <p className="perfil-detalhes-loading">Carregando detalhes do perfil...</p>
      )}
      <Footer />
    </div>
  );
}

export default PerfilDetalhes;
