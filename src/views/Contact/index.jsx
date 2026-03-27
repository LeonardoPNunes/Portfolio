import React from "react";
import { FaDownload, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import profile from "../../assets/img/profile.jpeg";
import file from "../../assets/file/curriculo.pdf";
import {
  ContactCard,
  ContactGrid,
  ContactHeader,
  ContactWrapper,
  CTABox,
  DownloadLink,
  ProfileImg,
  SectionContact,
  SectionTag,
} from "./style";

const Contact = () => {
  return (
    <SectionContact id="contact">
      <SectionTag>Contato</SectionTag>
      <ContactHeader>
        <div>
          <h2>Vamos conversar</h2>
        </div>
        <DownloadLink href={file} download="curriculo-leonardo-nunes.pdf">
          <FaDownload />
          Baixar currículo
        </DownloadLink>
      </ContactHeader>

      <ContactWrapper>
        <ProfileImg src={profile} alt="Leonardo Nunes" />

        <CTABox>
          <strong>
            Estou aberto para conversar sobre novas oportunidades.
          </strong>
          <p>
            Se fizer sentido para o seu time, será um prazer trocar uma ideia
            sobre projetos, desafios e possibilidades de atuação.
          </p>
        </CTABox>
      </ContactWrapper>

      <ContactGrid>
        <ContactCard
          href="https://contate.me/leonardopnunes"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp size={55} />
          <h3>WhatsApp</h3>
          <span>Conversa rápida para orçamento ou oportunidade.</span>
        </ContactCard>

        <ContactCard
          href="mailto:leonardo.desenvolvedorfront@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <SiGmail size={55} />
          <h3>Gmail</h3>
          <span>Contato direto para propostas e networking.</span>
        </ContactCard>

        <ContactCard
          href="https://www.linkedin.com/in/leonardo-paulo-nunes-de-freitas/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={55} />
          <h3>LinkedIn</h3>
          <span>Perfil profissional e histórico de atuação.</span>
        </ContactCard>

        <ContactCard
          href="https://github.com/LeonardoPNunes"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={55} />
          <h3>GitHub</h3>
          <span>Repositórios, estudos e projetos publicados.</span>
        </ContactCard>
      </ContactGrid>
    </SectionContact>
  );
};

export default Contact;
