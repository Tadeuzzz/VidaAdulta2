import Footer from '../components/Footer';
import Header from '../components/Header';
import VotingSystem from '../components/VotingSystem';
import './Sublista.css'
import React from 'react';

const Sobre = () => {
  return (
    <section className="sobre">
              <Header />
      <div className="interface">
        <div className="flex">
          <div className="txt-sobre">
            <h2>Obtenção do <span>Título de Eleitor</span></h2>
            <p>Obter o Título de Eleitor é um passo importante para todos os cidadãos brasileiros que atingem a maioridade, pois representa a capacidade de exercer o direito de voto e participar ativamente da democracia. Este guia fornecerá informações essenciais sobre como iniciar o processo e as etapas necessárias.</p>
            
            <h1>Passo 1: Matrícula em um Centro de Formação de Condutores (CFC)</h1>
            <p>Para iniciar o processo de obtenção do Título de Eleitor, você precisará reunir os seguintes documentos:</p>
            <ul>
              <li>RG (original e cópia)</li>
              <li>CPF (original e cópia)</li>
              <li>Comprovante de residência (original e cópia)</li>
            </ul>

            <h1>Passo 2: Comparecimento ao Cartório Eleitoral</h1>
            <p>Com os documentos em mãos, dirija-se ao cartório eleitoral mais próximo. Você pode encontrar o endereço e o horário de atendimento do cartório eleitoral no site do Tribunal Regional Eleitoral (TRE) do seu estado.</p>

            <h1>Passo 3: Preenchimento do Requerimento de Alistamento Eleitoral (RAE)</h1>
            <p>No cartório eleitoral, você preencherá o Requerimento de Alistamento Eleitoral (RAE), onde fornecerá suas informações pessoais e endereço. Um atendente estará disponível para auxiliá-lo no preenchimento correto do formulário.</p>

            <h1>Passo 4: Coleta de Biometria e Fotografia</h1>
            <p>Após o preenchimento do RAE, será realizada a coleta de sua biometria (impressões digitais) e uma fotografia para o registro no sistema eleitoral. Este passo é fundamental para garantir a segurança e a integridade do processo eleitoral.</p>

            <h1>Passo 5: Recebimento do Título de Eleitor</h1>
            <p>Com todos os dados registrados e verificados, você receberá seu Título de Eleitor. Este documento é indispensável para votar nas eleições e participar de plebiscitos e referendos.</p>

            <h1>Finalização</h1>
            <p>Seguindo esses cinco passos com atenção, você estará pronto para obter seu Título de Eleitor e exercer seu direito de voto. Lembre-se de que votar é um dever cívico e uma forma de contribuir para a construção de um país melhor. Boa sorte!</p>

          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default Sobre;
