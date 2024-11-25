import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../services/firebaseConfig"; // Importando o Firestore
import { doc, setDoc } from "firebase/firestore"; // Importando funções do Firestore
import logoImg from "../../assets/logo.png";
import "./styles.css";
import Header2 from "../../components/HeaderLoginRegister";
import Footer from "../../components/Footer2";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Usando o useNavigate para redirecionar

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  async function handleSignUp(e) {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(email, password);
      const userId = userCredential.user.uid;

      // Armazenando os dados do usuário no Firestore
      await setDoc(doc(db, "users", userId), {
        email: email,
        createdAt: new Date(),
      });

      navigate("/perfil"); // Redireciona para a página de perfil após o registro
    } catch (err) {
      console.error(err);
    }
  }

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="container">
      <Header2 />

      <form onSubmit={handleSignUp}>
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********************"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="button">
          Cadastrar
        </button>
        <div className="footer">
          <p>Você já tem uma conta?</p>
          <Link to="/">Acesse sua conta aqui</Link>
        </div>
      </form>
      <Footer />
    </div>
  );
}