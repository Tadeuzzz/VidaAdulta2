import Footer from '../../components/Footer';
import Header from '../../components/Header';
import VotingSystemCarreira from '../../components/VotingSystems/VotingSystemCarreira';
import '../../pages/Sublista.css';
import React from 'react';

const Sobre = () => (
  <section className="sobre">
    <Header />
    <div className="interface">
      <div className="flex">
        <div className="txt-sobre">
          <h1>Guia Extensivo de Carreira e Educação: Planeje Seu Futuro com Clareza</h1>
          <img 
            src="https://images-ext-1.discordapp.net/external/P-8DtB5u8Ho0ToqpSkbQkaiezrAM-QODk8yFMTppnpU/%3Fe%3D2147483647%26v%3Dbeta%26t%3D4uPyjxQBzPAPKc-VjPYoXQXaesdAd7GAYSksUYYG4wU/https/media.licdn.com/dms/image/C4D12AQF3QI5s2V2dqQ/article-cover_image-shrink_600_2000/0/1597409322934?format=webp&width=960&height=439" 
            alt="Guia de Carreira e Educação" 
            className="image-banner"
          />
          <p>
            Aos 18 anos, suas decisões moldarão o futuro. Este guia foi
            cuidadosamente elaborado para ajudá-lo a explorar todas as
            possibilidades e tomar decisões informadas sobre educação e
            carreira. De opções acadêmicas a planejamento financeiro, tudo está
            aqui.
          </p>

          <h2>1. Explorando Suas Opções de Carreira</h2>
          <p>
            Escolher uma carreira é um processo que envolve autoconhecimento e
            pesquisa de mercado. Aqui estão os passos essenciais:
          </p>
          <ul>
            <li>
              **Autoconhecimento:** Descubra o que motiva você. Experimente
              ferramentas como testes vocacionais e orientações de carreira.
            </li>
            <li>
              **Pesquisa de Mercado:** Use plataformas como LinkedIn e Glassdoor
              para explorar profissões, salários e demandas.
            </li>
            <li>
              **Planejamento Estratégico:** Defina metas de curto, médio e longo
              prazo para sua carreira.
            </li>
          </ul>

          <h3>1.1. Recursos de Autoconhecimento</h3>
          <p>
            Ferramentas como MBTI (Indicador de Tipos de Myers-Briggs) ajudam a
            identificar seus pontos fortes e preferências. Combine essas
            informações com feedback de mentores e professores para obter uma
            visão mais clara.
          </p>

          <h2>2. Opções Educacionais: Da Teoria à Prática</h2>
          <h3>2.1. Ensino Técnico</h3>
          <p>
            Para quem busca uma formação prática, o ensino técnico é uma opção
            excelente. Escolha cursos de áreas como tecnologia, mecânica,
            design, saúde ou administração.
          </p>
          <ul>
            <li>
              Instituições como SENAI e SENAC oferecem programas reconhecidos
              nacionalmente.
            </li>
            <li>Tempo de formação: de 1 a 3 anos.</li>
          </ul>

          <h3>2.2. Ensino Superior</h3>
          <p>
            As universidades oferecem programas para quem busca formações mais
            abrangentes ou específicas. Escolha entre bacharelado, tecnólogo ou
            licenciatura, dependendo de seus objetivos.
          </p>
          <ul>
            <li>**Bacharelado:** Foco geral (4 a 6 anos).</li>
            <li>**Tecnólogo:** Rápido e prático (2 a 3 anos).</li>
            <li>**Licenciatura:** Voltado para formação de professores.</li>
          </ul>

          <h2>3. Planejamento de Carreira</h2>
          <h3>3.1. Definindo Metas</h3>
          <p>
            Use a técnica SMART para definir objetivos alcançáveis e relevantes:
          </p>
          <ul>
            <li>**Específicas:** Descreva exatamente o que deseja alcançar.</li>
            <li>
              **Mensuráveis:** Estabeleça critérios para medir o progresso.
            </li>
            <li>**Alcançáveis:** Seja realista com seus recursos.</li>
            <li>**Relevantes:** Alinhe suas metas ao seu propósito.</li>
            <li>**Temporais:** Defina prazos claros.</li>
          </ul>

          <h2>4. Ferramentas e Recursos Adicionais</h2>

        </div>
      </div>
    </div>
    <VotingSystemCarreira />
    <Footer />
  </section>
);

export default Sobre;
