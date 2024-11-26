import React from "react";
import '../../pages/Sublista.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig"; // Importando a configuração do Firebase
import VotingSystemAlistamento from "../../components/VotingSystems/VotingSystemAlistamento";

const Sobre = () => {
    const [user] = useAuthState(auth); // Obtendo o estado do usuário

    // Função para obter o avatar do usuário
    const avatar = user ? user.photoURL : null; // Se o usuário estiver logado, pega a URL da foto

    return (
        <section className="sobre">
            <Header avatar={avatar} />
            <div className="interface">
                <div className="flex">
                    <div className="img-sobre">
                        {/* Aqui você pode adicionar uma imagem relacionada ao conteúdo */}
                    </div>
                    <div className="txt-sobre">
                        <h2>Serviço Militar Obrigatório: Alistamento, Seleção Geral, Seleção Complementar e Incorporação <span></span></h2>
                        <p>O Serviço Militar consiste no exercício de atividades específicas desempenhadas pelas Forças Armadas (Marinha, Exército e Aeronáutica) e compreenderá, na Mobilização de Pessoal, todos os encargos com a Defesa Nacional e terá a duração normal de 12 (doze) meses.</p>
                        <p>Todos os brasileiros são obrigados ao Serviço Militar, conforme previsto no Art. 143 da Constituição da República Federativa do Brasil de 1988.</p>
                        <p>Os documentos que tratam de forma particular em relação ao assunto são a Lei do Serviço Militar (Lei nº 4.375, de 17 de agosto de 1964) e seu devido Regulamento (Decreto nº 57.654, de 20 de janeiro de 1966).</p>
                        <p>A obrigação para com o Serviço Militar, em tempo de paz, começa no 1º dia de janeiro do ano em que o cidadão completar 18 (dezoito) anos de idade e subsistirá até 31 de dezembro do ano em que completar 45 (quarenta e cinco) anos.</p>
                        <h3><span>Quem estiver em débito com o Serviço Militar não poderá:</span></h3>
                        <p> - Obter passaporte ou prorrogação de sua validade;</p>
                        <p> - Ingressar como funcionário, empregado ou associado em instituição, empresa ou associação oficial, oficializada ou subvencionada; assinar contrato com o Governo Federal, Estadual, dos Territórios ou Municípios;</p>
                        <p> - Prestar exame ou matricular-se em qualquer estabelecimento de ensino;</p>
                        <p> - Obter carteira profissional, registro de diploma de profissões liberais, matrícula ou inscrição para o exercício de qualquer função e licença de indústria e profissão;</p>
                        <p> - Inscrever-se em concurso para provimento de cargo público;</p>
                        <p> - Exercer, a qualquer título, sem distinção de categoria ou forma de pagamento, qualquer função pública ou cargo público, eletivos ou de nomeação; </p>
                        <p> - Receber qualquer prêmio ou favor do Governo Federal, Estadual, dos Territórios ou Municípios.</p>

                        <img id="alistamento" src="images/alistamento.jpg" alt="Alistamento" />
                        
                    </div>
                </div>
            </div>
            <VotingSystemAlistamento />
            <Footer />
        </section>
    );
};

export default Sobre;