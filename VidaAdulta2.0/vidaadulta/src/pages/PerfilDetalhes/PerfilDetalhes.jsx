import React, { useEffect, useState } from "react";
import { auth } from "../../services/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { db } from "../../services/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import VotingSystem from "../../components/VotingSystem";
import './PerfilDetalhes.css';

export function PerfilDetalhes() {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [userVotes, setUserVotes] = useState({});

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
          setUserVotes(data.votes || {});
        }
      };

      fetchData();
    }
  }, [user]);

  return (
    <div className="perfil-detalhes-container">
      <Header />
      {user ? (
        <div className="perfil-detalhes-content">
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
        </div>
      ) : (
        <p className="perfil-detalhes-loading">Carregando detalhes do perfil...</p>
      )}
      <Footer />
    </div>
  );
}

export default PerfilDetalhes;
