import React from 'react';
import '../../pages/Sublista.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import VotingSystem from '../../components/VotingSystem';
import VotingSystemRg from '../../components/VotingSystems/VotingSystemRg';

const Sobre = () => {
  return (
    <section className="sobre">
              <Header />
      <div className="interface">
        <div className="flex">
          <div className="txt-sobre">
            <h2>Guia Rápido sobre o RG para Jovens de 18 Anos</h2>
            <h3>O que é o RG?</h3>
            <p>O RG é o documento oficial de identidade no Brasil, contendo informações pessoais essenciais.</p>
            <h3>Importância do RG</h3>
            <p>Identificação: Necessário para comprovar sua identidade. Acesso a Serviços: Requerido para matrícula, atendimento médico, abertura de contas bancárias, etc. Legalidade: Importante para direitos e deveres legais.</p>

            <h3>Como Obter o RG</h3>
            <h4>Documentos Necessários:</h4>
            <ul>
              <li>Certidão de Nascimento ou Casamento (original e cópia).</li>
              <li>Duas fotos 3x4 recentes.</li>
              <li>Comprovante de residência.</li>
              <li>Órgão Emissor: Instituto de Identificação ou Poupatempo.</li>
              <li>Preenchimento de Formulário.</li>
              <li>Pagamento de Taxa (se aplicável).</li>
              <li>Aguarde a Emissão: Prazo varia de dias a semanas.</li>
            </ul>
            <h4>Atualizações</h4>
            <p>Atualize em caso de mudanças pessoais.</p>
            <h4>Segunda Via</h4>
            <p>Solicite imediatamente em caso de perda ou roubo.</p>

            <h3>Finalização</h3>
            <p>Manter o RG em ordem é crucial para assumir responsabilidades adultas, exercer direitos e cumprir deveres civis. Cuide bem do seu RG e esteja sempre preparado para usá-lo quando necessário.</p>

            <p>Se tiver mais dúvidas, procure o DETRAN do seu estado ou acesse a página AJUDA.</p>

          </div>
        </div>
      </div>
      <VotingSystemRg />
      <Footer/>
    </section>
  );
};

export default Sobre;
