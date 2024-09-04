import React, { useEffect, useState } from 'react';
import { HomeContainer, Intro, Title, Description, ButtonContainer, Button } from "./style";
import { Link } from 'react-scroll';


const Home = () =>{
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 1000);
  }, []);

  return (
    <HomeContainer id="#home" fadeIn={fadeIn}>
      <Intro>
        <Title>Olá, sou Leonardo Nunes</Title>
        <Description>Desenvolvedor Web & Mobile</Description>
        <ButtonContainer>
        <Link
      to={"#projects"}
      spy={true}
      smooth={true}
      offset={-70}
      duration={1000}
      style={{"marginBottom":"25px"}}
    >
          <Button href="#projects">Veja meus projetos</Button>
    </Link>
    <Link
      to={"#contact"}
      spy={true}
      smooth={true}
      offset={-70}
      duration={1000}
    >
          <Button href="#contact">Contato</Button>
    </Link>
        </ButtonContainer>
      </Intro>
    </HomeContainer>
  );
};
export default Home