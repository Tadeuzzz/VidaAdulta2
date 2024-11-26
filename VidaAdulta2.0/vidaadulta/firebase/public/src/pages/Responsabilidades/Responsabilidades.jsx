import React, { useEffect, useState } from 'react';
import { auth } from "../../services/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { db } from "../../services/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import '../../pages/Sublista.css';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import VotingSystemResponsabilidades from '../../components/VotingSystems/VotingSystemResponsabilidades';

const Sobre = () => {
  const [user] = useAuthState(auth);
  const [membership, setMembership] = useState('free'); // Definir como 'free' inicialmente
  const [showAlert, setShowAlert] = useState(false); // Controle do alerta para usuários Free

  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setMembership(data.membership || 'free'); // Atualiza o plano de acordo com o que está salvo no Firestore
        }
      };

      fetchData();
    }
  }, [user]);

  // Função para mostrar o alerta quando o usuário Free clicar no botão
  const handleButtonClick = () => {
    if (membership === 'free') {
      setShowAlert(true); // Exibe o alerta
    }
  };

  return (
    <section className="sobre">
      <Header />
      <div className="interface">
        <div className="flex">
          <div className="img-sobre"></div>

          <div className="txt-sobre">
            <h2>Guia Para Responsabilidades Financeiras</h2>
            <p>Assumir responsabilidades financeiras é um passo importante para muitos jovens que começam a administrar suas próprias finanças, pois representa a independência e a capacidade de gerir o próprio dinheiro de forma consciente. Este guia fornecerá informações essenciais sobre como iniciar o processo e as possibilidades disponíveis.</p>

            <h1>Passo 1: Educação Financeira Básica</h1>
            <p>Primeiro, é fundamental buscar conhecimento sobre finanças pessoais. Para isso, você pode se inscrever em cursos online ou presenciais, ler livros sobre o assunto e seguir especialistas em finanças. Alguns tópicos importantes incluem:</p>
            <ul>
              <li>Orçamento pessoal</li>
              <li>Economia e investimentos</li>
              <li>Poupança e planejamento financeiro</li>
              <li>Crédito e dívidas</li>
            </ul>

            <h1>Passo 2: Criação de um Orçamento</h1>
            <p>Após adquirir conhecimentos básicos, o próximo passo é criar um orçamento pessoal. Para isso, você precisará dos seguintes dados:</p>
            <ul>
              <li>Renda mensal</li>
              <li>Despesas fixas</li>
              <li>Despesas variáveis</li>
              <li>Objetivos financeiros</li>
            </ul>

            <h1>Passo 3: Controle de Gastos</h1>
            <p>Com o orçamento criado, é essencial monitorar e controlar seus gastos. Utilize ferramentas como aplicativos de finanças pessoais, planilhas ou mesmo anotações manuais para registrar todas as despesas. Isso ajudará a identificar áreas onde é possível economizar e ajustar seus hábitos de consumo.</p>

            <h1>Passo 4: Formação de Reserva de Emergência</h1>
            <p>Um passo importante na gestão financeira é a formação de uma reserva de emergência. Essa reserva deve ser equivalente a, pelo menos, três a seis meses de suas despesas mensais e deve ser mantida em uma conta de fácil acesso. Ela servirá para cobrir imprevistos, como perda de emprego ou despesas médicas emergenciais.</p>

            <h1>Passo 5: Investimentos e Planejamento de Longo Prazo</h1>
            <p>Após estabelecer uma reserva de emergência, é hora de pensar em investimentos e no planejamento financeiro de longo prazo. Pesquise sobre diferentes opções de investimentos, como poupança, CDBs, ações, fundos imobiliários, entre outros, e escolha aqueles que melhor se adequam ao seu perfil e objetivos financeiros. Lembre-se de diversificar seus investimentos para reduzir riscos.</p>

            <h1>Finalização</h1>
            <p>Seguindo esses cinco passos com atenção, você estará no caminho certo para assumir responsabilidades financeiras de forma consciente e eficaz. Lembre-se de que a educação financeira é um processo contínuo e que revisar e ajustar seus planos periodicamente é fundamental para o sucesso financeiro. Boa sorte! Se tiver mais dúvidas, procure orientação de um consultor financeiro ou acesse recursos de educação financeira disponíveis online.</p>

            {/* Mostrar o botão "Ver mais" de forma única */}
            {membership === 'free' ? (
              <>
                <button className="btn-ver-mais" onClick={handleButtonClick}>
                  Ver mais
                </button>
                {showAlert && (
                  <div className="alerta">
                    <strong>Atenção!</strong> Você precisa ser Plus ou Premium para acessar mais conteúdo. 
                  </div>
                )}
              </>
            ) : (
              <a href="/pagina-restrita" className="btn-ver-mais">
                Ver mais
              </a>
            )}
          </div>
        </div>
      </div>
      <VotingSystemResponsabilidades />
      <Footer />
    </section>
  );
};

export default Sobre;
