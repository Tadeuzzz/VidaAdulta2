import React, { useState, useEffect } from "react";
import { db } from "../../services/firebaseConfig";
import { setDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";
import { Link } from 'react-router-dom'; // Importando o Link para navegação
import "../VotingSystem.css"; // Certifique-se de importar o CSS

function VotingSystemTitulo() {
  const themes = [
    { title: "Titulo de Eleitor", description: "Aprenda a emitir e utilizar seu título de eleitor, garantindo sua participação ativa nas eleições."},
];

  const [votes, setVotes] = useState({});
  const [userVotes, setUserVotes] = useState({});
  const [message, setMessage] = useState('');
  const [user] = useAuthState(auth);

  const loadVotes = async () => {
    try {
      const votesData = {};
      const userVotesData = {};

      for (const theme of themes) {
        const themeDoc = await getDoc(doc(db, 'themes', theme.title));
        votesData[theme.title] = themeDoc.exists() ? themeDoc.data().voteCount || 0 : 0;

        if (user) {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            userVotesData[theme.title] = userData.votes && userData.votes[theme.title] ? true : false;
          }
        }
      }

      setVotes(votesData);
      setUserVotes(userVotesData);
    } catch (error) {
      console.error("Erro ao carregar os votos: ", error);
    }
  };

  useEffect(() => {
    loadVotes();
  }, [user]);

  const handleVote = async (themeTitle) => {
    if (!user) {
      setMessage("Você precisa estar logado para votar!");
      return;
    }

    if (userVotes[themeTitle]) {
      setMessage(`Você já votou no tema "${themeTitle}"!`);
      return;
    }

    const newVotes = { ...votes, [themeTitle]: (votes[themeTitle] || 0) + 1 };
    setVotes(newVotes);
    setUserVotes({ ...userVotes, [themeTitle]: true });

    try {
      const themeDocRef = doc(db, 'themes', themeTitle);
      const userDocRef = doc(db, 'users', user.uid);

      const themeDoc = await getDoc(themeDocRef);
      if (themeDoc.exists()) {
        await updateDoc(themeDocRef, { voteCount: newVotes[themeTitle] });
      } else {
        await setDoc(themeDocRef, { voteCount: newVotes[themeTitle] });
      }

      await setDoc(userDocRef, {
        votes: { [themeTitle]: true },
      }, { merge: true });

      setMessage(`Você votou no tema "${themeTitle}" com sucesso!`);
    } catch (error) {
      console.error("Erro ao salvar o voto: ", error);
      setMessage("Erro ao salvar seu voto. Tente novamente.");
    }
  };

  return (
    <div className="themes-container">
      {themes.map((theme) => (
        <div key={theme.title} className="theme-card">
          <h3>{theme.title}</h3>
          <p>{theme.description}</p>
          
          {/* Link para redirecionar para a página do tema */}
          <Link to={theme.pageUrl}>
            <button 
              onClick={() => handleVote(theme.title)} 
              disabled={userVotes[theme.title]}
            >
              {userVotes[theme.title] ? "Lido ✔" : `Pendente (${votes[theme.title] || 0})`}
            </button>
          </Link>
        </div>
      ))}
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default VotingSystemTitulo;
