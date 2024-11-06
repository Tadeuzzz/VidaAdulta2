import ContentRating from '../components/ContentRating';
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
                        <h2>Obtenção da Carteira Nacional de Habilitação (CNH)</h2>
                        <p>Obter a Carteira Nacional de Habilitação (CNH) é um passo importante para muitos jovens que completam 18 anos, pois representa a independência e a capacidade de dirigir legalmente. Este guia fornecerá informações essenciais sobre como iniciar o processo e as possibilidades disponíveis.</p>

                        <h3>Passo 1: Matrícula em um Centro de Formação de Condutores (CFC)</h3>
                        <p>Primeiro, matricule-se em um Centro de Formação de Condutores (CFC), conhecido como autoescola. Para a matrícula, você precisará dos seguintes documentos:</p>
                        <ul>
                            <li>RG (original e cópia)</li>
                            <li>CPF (original e cópia)</li>
                            <li>Comprovante de residência (original e cópia)</li>
                        </ul>

                        <h3>Passo 2: Exames Médicos e Psicotécnicos</h3>
                        <p>Após a matrícula, a autoescola encaminhará você para realizar exames médicos e psicotécnicos, que avaliam sua aptidão física e mental para dirigir.</p>

                        <h3>Passo 3: Curso Teórico e Prova Teórica</h3>
                        <p>Com os exames aprovados, você iniciará o curso teórico (45 horas/aula) sobre:</p>
                        <ul>
                            <li>Legislação de trânsito</li>
                            <li>Direção defensiva</li>
                            <li>Primeiros socorros</li>
                            <li>Meio ambiente e cidadania</li>
                            <li>Funcionamento do veículo</li>
                        </ul>
                        <p>Após o curso, faça a prova teórica no DETRAN.</p>

                        <h3>Passo 4: Aulas Práticas e Exame Prático de Direção</h3>
                        <p>Se aprovado na prova teórica, você iniciará as aulas práticas de direção (25 horas/aula). Após concluir as aulas, realize o exame prático de direção com um avaliador do DETRAN.</p>

                        <h3>Passo 5: Recebimento da PPD e CNH Definitiva</h3>
                        <p>Após passar no exame prático, você receberá a Permissão para Dirigir (PPD), válida por 1 ano. Se, durante esse período, você não cometer infrações, poderá solicitar a CNH definitiva.</p>

                        <h3>Finalização</h3>
                        <p>Seguindo esses cinco passos com atenção, você estará no caminho certo para obter sua CNH. Lembre-se de que dirigir com responsabilidade é fundamental para a segurança de todos no trânsito.</p>

                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Sobre;
