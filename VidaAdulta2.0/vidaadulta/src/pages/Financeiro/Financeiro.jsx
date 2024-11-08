import Footer from '../../components/Footer';
import Header from '../../components/Header';
import VotingSystemFinanceiro from '../../components/VotingSystems/VotingSystemFinanceiro';
import '../../pages/Sublista.css';
import React from 'react';

const Sobre = () => (
    <section className="sobre">
                <Header />
        <div className="interface">
            <div className="flex">
                <div className="img-sobre"></div>

                <div className="txt-sobre">
                    <h2>Planejador Financeiro Básico<span></span></h2>
                    <p>Um planejador financeiro básico é uma ferramenta essencial para qualquer pessoa que deseje gerenciar suas finanças de maneira eficaz e alcançar seus objetivos financeiros de curto, médio e longo prazo. Ele envolve a criação e o seguimento de um plano estruturado para administrar o dinheiro de forma consciente e responsável.</p>
                    <h3>Componentes de um Planejador Financeiro Básico</h3>
                    <p>1. Orçamento: O orçamento é a base de um planejador financeiro...</p>
                    <p>2. Reserva de Emergência: É essencial reservar uma parte de sua renda...</p>
                    <p>3. Controle de Dívidas: Se você possui dívidas...</p>
                    <p>4. Poupança e Investimentos: Poupar regularmente é fundamental...</p>
                    <p>5. Educação Financeira: Manter-se informado sobre conceitos financeiros...</p>

                    <h3>Benefícios de um Planejador Financeiro Básico</h3>
                    <p>Controle Financeiro: Permite um controle efetivo...</p>
                    <p>Redução de Estresse: Um planejador financeiro ajuda a reduzir o estresse...</p>
                    <p>Alcance de Metas: Ajuda a definir metas financeiras...</p>
                    <p>Preparação para Emergências: Ao reservar uma quantia...</p>
                    <p>Crescimento Patrimonial: Investir de maneira adequada...</p>

                    <p>Em resumo, um planejador financeiro básico não apenas ajuda a organizar suas finanças diárias...</p>

                </div>
            </div>
        </div>
        <VotingSystemFinanceiro />
        <Footer />
    </section>
);


export default Sobre;