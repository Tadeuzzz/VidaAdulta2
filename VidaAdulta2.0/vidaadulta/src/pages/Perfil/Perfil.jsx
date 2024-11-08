import React, { useState, useEffect } from "react";
import { auth } from "../../services/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { db } from "../../services/firebaseConfig"; // Importando o Firestore
import { doc, setDoc, getDoc } from "firebase/firestore"; // Importando funções do Firestore
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import './Perfil.css';
import InputMask from 'react-input-mask'; // Importando a biblioteca para máscara
import { useNavigate } from "react-router-dom"; // Importando o useNavigate

export function Perfil() {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [formVisible, setFormVisible] = useState(true);
  const [isEditing, setIsEditing] = useState(false); // Estado para controlar a edição
  const navigate = useNavigate(); // Definindo o navigate para redirecionamento

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

    // Validar CPF e Telefone
    const phoneRegex = /^\(\d{2}\) \d{4}-\d{4}$/; // Máscara de telefone: (XX) XXXX-XXXX
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/; // Máscara de CPF: XXX.XXX.XXX-XX

    if (!phoneRegex.test(phone)) {
      alert("Telefone inválido. A formatação correta é (XX) XXXX-XXXX.");
      return;
    }

    if (!cpfRegex.test(cpf)) {
      alert("CPF inválido. A formatação correta é XXX.XXX.XXX-XX.");
      return;
    }

    // Salvar os dados no Firestore
    if (user) {
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        phone: phone,
        cpf: cpf,
        profileImage: profileImage,
      }, { merge: true });

      // Redireciona para a página Home após o cadastro
      navigate("/home");
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
                <InputMask
                  mask="(99) 9999-9999"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="perfil-input"
                />
              </div>

              <div className="perfil-input-container">
                <label htmlFor="cpf">CPF</label>
                <InputMask
                  mask="999.999.999-99"
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
