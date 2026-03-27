import React from "react";
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import profile from "../../assets/img/profile.jpeg";
import file from "../../assets/file/curriculo.pdf";
import {
  AccentCard,
  BackgroundGlow,
  Button,
  ButtonContainer,
  FloatingBadge,
  HeroCard,
  HeroContent,
  HeroGrid,
  HighlightChip,
  Highlights,
  HomeContainer,
  InfoCard,
  Intro,
  Metric,
  MetricLabel,
  ProfileImage,
  SecondaryButton,
  SocialLink,
  SocialLinks,
  SupportingText,
  Title,
} from "./style";

const highlightItems = [
  "4 anos de experiência em front-end",
  "React, Next.js, React Native e TypeScript",
  "Aplicações web e mobile em produção",
];

const Home = () => {
  return (
    <HomeContainer id="home">
      <BackgroundGlow />
      <HeroGrid>
        <Intro>
          <Title>
            Leonardo Nunes
            <span>
              Desenvolvedor Front-End com experiência em aplicações web e
              mobile, focado em construir interfaces escaláveis e bem
              estruturadas.
            </span>
          </Title>

          <HeroContent>
            Gosto de construir aplicações que sejam agradáveis de usar, bem
            resolvidas visualmente e funcionem bem em qualquer tela. Tenho
            experiência com projetos web e mobile e busco sempre entregar algo
            bonito, leve e consistente.
          </HeroContent>

          <Highlights>
            {highlightItems.map((item) => (
              <HighlightChip key={item}>{item}</HighlightChip>
            ))}
          </Highlights>

          <ButtonContainer>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-90}
              duration={800}
            >
              <Button>
                Ver projetos
                <FaArrowRight />
              </Button>
            </Link>

            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-90}
              duration={800}
            >
              <SecondaryButton>Falar comigo</SecondaryButton>
            </Link>

            <SecondaryButton
              as="a"
              href={file}
              download="curriculo-leonardo-nunes.pdf"
            >
              <FaDownload />
              Currículo
            </SecondaryButton>
          </ButtonContainer>

          <SocialLinks>
            <SocialLink
              href="https://github.com/LeonardoPNunes"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/leonardo-paulo-nunes-de-freitas/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
              LinkedIn
            </SocialLink>
          </SocialLinks>
        </Intro>

        <HeroCard>
          <FloatingBadge>Disponível para novas oportunidades</FloatingBadge>
          <ProfileImage src={profile} alt="Leonardo Nunes" />
          <InfoCard>
            <Metric>Aberto a novos desafios profissionais</Metric>
            <MetricLabel>
              Busco uma oportunidade para contribuir com produtos digitais,
              crescer em um time forte e seguir evoluindo como desenvolvedor.
            </MetricLabel>
          </InfoCard>
          <AccentCard>
            <SupportingText>Especialidades</SupportingText>
            <p>
              React, Next.js, React Native, Typescript, Tanstack Query, Redux e
              Tailwind.
            </p>
          </AccentCard>
        </HeroCard>
      </HeroGrid>
    </HomeContainer>
  );
};

export default Home;
