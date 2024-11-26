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
  const [membership, setMembership] = useState("free");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        try {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
  
          if (docSnap.exists()) {
            const data = docSnap.data();
            setName(data.name || "Nome não disponível");
            setPhone(data.phone || "Telefone não disponível");
            setCpf(data.cpf || "CPF não disponível");
            setProfileImage(data.profileImage || null);
            setUserVotes(data.votes || {});
            setMembership(data.membership || "free");
          } else {
            console.error("Documento não encontrado no Firestore!");
          }
        } catch (error) {
          console.error("Erro ao carregar dados do perfil:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }
  }, [user]);

  const handleMembershipChange = async (newMembership) => {
    if (user) {
      const docRef = doc(db, "users", user.uid);
      await updateDoc(docRef, {
        membership: newMembership,
      });
      setMembership(newMembership);
    }
  };

  const planDetails = {
    free: { price: 0, features: ["Acesso limitado a conteúdo"] },
    plus: { price: 19.90, features: ["Mais conteúdo", "Suporte mais rápido", "Avisos no e-mail"] },
    premium: { price: 49.90, features: ["Mais conteúdo", "Vídeos interativos", "Suporte mais rápido", "Acesso a aulas", "Conteúdo VIP", "Avisos no e-mail"] },
  };

  const currentPlan = planDetails[membership];

  return (
    <div className="perfil-detalhes-container">
      <Header />
      {user ? (
        loading ? (
          <p className="perfil-detalhes-loading">Carregando detalhes do perfil...</p>
        ) : (
          <div className={`perfil-detalhes-content ${membership}`}>
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
              {Object.entries(planDetails).map(([key, plan]) => (
                <div key={key} className={`plan-card ${membership === key ? "selected" : ""}`}>
                  <h3>Plano {key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                  <ul>
                    {plan.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <p><strong>Preço: R$ {plan.price}</strong></p>
                  <button 
                    onClick={() => handleMembershipChange(key)}
                    className={`membership-btn ${membership === key ? "selected" : ""}`}
                  >
                    Selecionar {key.charAt(0).toUpperCase() + key.slice(1)}
                  </button>
                </div>
              ))}
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
