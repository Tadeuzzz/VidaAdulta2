import React, { useState, useEffect } from "react";
import { auth } from "../services/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { db } from "../services/firebaseConfig"; // Importando o Firestore
import { doc, setDoc, getDoc } from "firebase/firestore"; // Importando funções do Firestore
import Header from "../components/Header";
import Footer from "../components/Footer";
import './Perfil.css';

export function Perfil() {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [formVisible, setFormVisible] = useState(true);
  const [isEditing, setIsEditing] = useState(false); // Estado para controlar a edição

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
        }
      };

      fetchData();
    }
  }, [user]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormVisible(false);

    // Salvar os dados no Firestore
    if (user) {
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        phone: phone,
        cpf: cpf,
        profileImage: profileImage,
      }, { merge: true }); // merge: true para não sobrescrever outros dados
    }
  };

  const handleEdit = () => {
    setIsEditing(true); // Habilita o modo de edição
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsEditing(false); // Desabilita o modo de edição

    // Salvar os dados no Firestore
    if (user) {
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        phone: phone,
        cpf: cpf,
        profileImage: profileImage,
      }, { merge: true });
    }
  };

  return (
    <div className="perfil-container">
      <Header avatar={profileImage} /> {/* Passa a imagem para o Header */}
      {user ? (
        <div className="perfil-content">
          <h1 className="perfil-welcome">Bem-vindo, {name || user.email}!</h1>
          {profileImage && (
            <img
              src={profileImage}
              alt="Imagem de Perfil"
              className="perfil-image"
            />
          )}

          {formVisible ? (
            <form onSubmit={handleSubmit} className="perfil-form">
              <div className="perfil-input-container">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="perfil-input"
                />
              </div>

              <div className="perfil-input-container">
                <label htmlFor="phone">Telefone</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="perfil-input"
                />
              </div>

              <div className="perfil-input-container">
                <label htmlFor="cpf">CPF</label>
                <input
                  type="text"
                  id="cpf"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                  required
                  className="perfil-input"
                />
              </div>

              <div className="perfil-input-container">
                <label htmlFor="profileImage">Imagem de Perfil</label>
              <input
                type="file"
                id="profileImage"
                accept="image/*"
                onChange={handleImageChange}
                className="perfil-input"
              />
            </div>

            <button type="submit" className="perfil-button">
              Enviar
            </button>
          </form>
        ) : (
          <div className="perfil-info">
            <h2>Informações do Usuário</h2>
            <p><strong>Nome:</strong> {name}</p>
            <p><strong>Telefone:</strong> {phone}</p>
            <p><strong>CPF:</strong> {cpf}</p>
            {profileImage && (
              <img
                src={profileImage}
                alt="Imagem de Perfil"
                className="perfil-image"
              />
            )}
          </div>
        )}
      </div>
    ) : (
      <p className="perfil-loading">Carregando perfil...</p>
    )}
    <Footer />
  </div>
);
}

export default Perfil;
