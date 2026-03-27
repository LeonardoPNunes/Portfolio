import React from "react";
import {
  AboutGrid,
  IntroText,
  JourneyCard,
  JourneyGrid,
  SectionAboutMe,
  SectionTag,
  StackChip,
  StackGrid,
} from "./style";

const journey = [
  {
    title: "Começo na programação",
    description:
      "Meu primeiro contato com desenvolvimento veio ainda na adolescência. Foi nesse período que comecei estudando HTML, CSS e JavaScript e passei a levar a programação cada vez mais a sério.",
  },
  {
    title: "Entrada no mercado",
    description:
      "Em 2021, entrei na JSM Tecnologia e comecei a atuar em projetos web e mobile para diferentes contextos de negócio, ganhando experiência prática em ambiente profissional.",
  },
  {
    title: "Evolução profissional",
    description:
      "Ao longo dessa trajetória, evoluí tecnicamente, ampliei minha atuação com React, React Native, Next.js e TypeScript e fui promovido a Desenvolvedor Front-End Pleno.",
  },
  {
    title: "Momento atual",
    description:
      "Hoje atuo na Blue, trabalhando na evolução de plataformas estratégicas e no desenvolvimento de novas soluções, com foco em performance, escalabilidade e arquitetura front-end.",
  },
];

const stack = [
  "React",
  "Next.js",
  "React Native",
  "TypeScript",
  "JavaScript",
  "TanStack Query",
  "Redux",
  "Tailwind CSS",
  "Design Systems",
];

const AboutMe = () => {
  return (
    <SectionAboutMe id="aboutMe">
      <SectionTag>Sobre mim</SectionTag>
      <AboutGrid>
        <div>
          <h2>Desenvolvedor Front-End com foco em produtos web e mobile</h2>
          <IntroText>
            Tenho 4 anos de experiência no desenvolvimento de aplicações web e
            mobile, atuando principalmente com React, React Native, Next.js,
            TypeScript e JavaScript. Ao longo desse período, fui construindo uma
            base sólida em interfaces escaláveis, componentização, arquitetura
            modular e padronização de projetos.
          </IntroText>
          <IntroText>
            Minha experiência também passa por gerenciamento de estado,
            integração com APIs, formulários, performance, SSR e SSG com
            Next.js, além de projetos com dashboards, filtros dinâmicos,
            aplicações de alta complexidade e produtos com integração de
            inteligência artificial. Hoje busco seguir evoluindo como
            Desenvolvedor Front-End Pleno, contribuindo com produtos digitais,
            arquitetura de aplicações e soluções escaláveis.
          </IntroText>
        </div>

        <StackGrid>
          {stack.map((item) => (
            <StackChip key={item}>{item}</StackChip>
          ))}
        </StackGrid>
      </AboutGrid>

      <JourneyGrid>
        {journey.map((item) => (
          <JourneyCard key={item.title}>
            <strong>{item.title}</strong>
            <p>{item.description}</p>
          </JourneyCard>
        ))}
      </JourneyGrid>
    </SectionAboutMe>
  );
};

export default AboutMe;
