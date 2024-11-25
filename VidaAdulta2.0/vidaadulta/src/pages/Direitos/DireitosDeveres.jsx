import Footer from '../../components/Footer';
import Header from '../../components/Header';
import VotingSystem from '../../components/VotingSystem';
import VotingSystemDeveres from '../../components/VotingSystems/VotingSystemDireitos';
import '../../pages/Sublista.css';
import React from 'react';

const Sobre = () => {
    return (
        <section className="sobre">
                    <Header />
            <div className="interface">
                <div className="flex">
                    <div className="img-sobre">
                        {/* Você pode adicionar uma imagem aqui, se necessário */}
                    </div>

                    <div className="txt-sobre">
                        <h2>Direitos e Deveres Cidadãos</h2>
                        <p>Os direitos cidadãos são os direitos fundamentais garantidos a todos os indivíduos dentro de um Estado democrático. Eles são estabelecidos em constituições, declarações de direitos ou leis específicas e têm o objetivo de proteger a liberdade e a dignidade humana. Vamos descobrir que são e por que são importantes? Aqui estão alguns dos principais tipos de direitos cidadãos:</p>
                        <br />
                        <p>1. Direitos Civis: São os direitos individuais que garantem a liberdade pessoal e a igualdade perante a lei. Isso inclui o direito à vida, à liberdade de expressão, à privacidade, à liberdade religiosa e de crença, entre outros. Os direitos civis são essenciais para garantir que todos os cidadãos possam viver suas vidas de acordo com suas próprias convicções e escolhas.</p>
                        <p>2. Direitos Políticos: São os direitos que garantem a participação dos cidadãos na vida política do país. Isso inclui o direito de votar e ser votado, o direito de se candidatar a cargos públicos, o direito de participar de eleições e referendos, entre outros. Os direitos políticos são fundamentais para a democracia representativa, permitindo que os cidadãos exerçam influência sobre as decisões governamentais.</p>
                        <p>3. Direitos Sociais: São os direitos que garantem condições básicas de dignidade e bem-estar aos cidadãos. Isso inclui o direito à educação, à saúde, à moradia digna, ao trabalho justo e remunerado, à segurança social, entre outros. Os direitos sociais visam assegurar que todos os membros da sociedade tenham acesso a condições mínimas de vida digna e igualdade de oportunidades.</p>
                        <br />
                        <h3>Deveres Cidadãos</h3>
                        <p>Assim como os direitos, os deveres cidadãos são responsabilidades que os indivíduos devem cumprir para garantir o bom funcionamento da sociedade e o respeito mútuo entre os cidadãos. Entre os principais deveres cidadãos estão:</p>
                        <br />
                        <p>1. Deveres Civis: São as responsabilidades básicas de respeitar os direitos das outras pessoas, obedecer às leis, pagar impostos, cumprir contratos e servir em júris quando convocados. Os deveres civis são fundamentais para manter a ordem pública e o respeito mútuo na sociedade.</p>
                        <p>2. Deveres Sociais: São as responsabilidades de contribuir para o bem-estar coletivo e o desenvolvimento da comunidade. Isso inclui o respeito às normas éticas e morais da sociedade, a participação em atividades comunitárias e a solidariedade com os menos favorecidos. Os deveres sociais promovem a coesão social e o desenvolvimento sustentável da comunidade.</p>
                        <p>3. Deveres Políticos: São as responsabilidades de participar ativamente na vida política do país. Isso inclui o dever de votar de maneira consciente e informada, acompanhar as políticas públicas, participar de debates democráticos e defender os direitos fundamentais. Os deveres políticos são essenciais para fortalecer a democracia participativa e garantir a representatividade dos interesses da população.</p>
                        <br />
                        <h3>Importância na Sociedade</h3>
                        <p>Os direitos e deveres cidadãos são fundamentais para promover uma sociedade justa, equitativa e democrática. Quando os direitos são respeitados e protegidos, os indivíduos têm a liberdade de buscar seus próprios objetivos e contribuir para o bem-estar coletivo. Por outro lado, o cumprimento dos deveres cidadãos fortalece o tecido social, promove a solidariedade e assegura que todos os membros da sociedade compartilhem responsabilidades comuns.</p>
                        <br />
                        <p>Em resumo, direitos e deveres cidadãos formam a base para uma convivência harmoniosa e um desenvolvimento sustentável, garantindo que todos os indivíduos tenham a oportunidade de viver com dignidade, liberdade e igualdade dentro de uma sociedade democrática.</p>
                        
                        <br />
                    </div>
                </div>
            </div>
            <VotingSystemDeveres />
            <Footer />
        </section>
    );
};

export default Sobre;
