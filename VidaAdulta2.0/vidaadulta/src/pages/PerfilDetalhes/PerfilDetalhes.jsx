import React, { useEffect, useState } from "react";
import { auth } from "../../services/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { db } from "../../services/firebaseConfig"; // Importando o Firestore
import { doc, getDoc } from "firebase/firestore"; // Importando funções do Firestore
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import './PerfilDetalhes.css';
import VotingSystem from "../../components/VotingSystem";

export function PerfilDetalhes() {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setName(data.name || "");
          setPhone(data.phone || "");
          setCpf(data.cpf || "");
          setProfileImage(data.profileImage || null);

          // Lógica para badges
          let userBadges = [];
          if (data.votes && data.votes.length > 0) {
            userBadges.push("Participante Regular");
          }
          if (data.name && data.phone && data.cpf) {
            userBadges.push("Perfil Completo");
          }
          if (data.firstVote) {
            userBadges.push("Primeiro Voto");
          }
          setBadges(userBadges);
        }
      };

      fetchData();
    }
  }, [user]);

  return (
    <div className="perfil-detalhes-container">
      <Header avatar={profileImage} /> {/* Passa a imagem para o Header */}
      {user ? (
        <div className="perfil-detalhes-content">
          <h1>Detalhes do Perfil</h1>
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
          
          {/* Exibindo Insígnias */}
          <div className="badges-container">
            {badges.map((badge, index) => (
              <span key={index} className="badge">
                {badge}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <p className="perfil-detalhes-loading">Carregando detalhes do perfil...</p>
      )}
      <VotingSystem />
      <Footer />
    </div>
  );
}

export default PerfilDetalhes;
