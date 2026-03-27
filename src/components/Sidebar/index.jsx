import React from "react";
import { FaHome, FaTasks, FaTimes, FaUserAlt } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import SidebarItem from "../SidebarItem";
import { CloseButton, Container, Content, Overlay } from "./style";

const Sidebar = ({ active, onClose }) => {
  return (
    <>
      <Overlay onClick={onClose} />
      <Container sidebar={active}>
        <CloseButton type="button" onClick={onClose} aria-label="Fechar menu">
          <FaTimes />
        </CloseButton>

        <Content>
          <SidebarItem navigateItem="home" Icon={FaHome} Text="Home" onClick={onClose} />
          <SidebarItem
            navigateItem="aboutMe"
            Icon={SiAboutdotme}
            Text="Sobre mim"
            onClick={onClose}
          />
          <SidebarItem
            navigateItem="projects"
            Icon={FaTasks}
            Text="Projetos"
            onClick={onClose}
          />
          <SidebarItem
            navigateItem="contact"
            Icon={FaUserAlt}
            Text="Contato"
            onClick={onClose}
          />
        </Content>
      </Container>
    </>
  );
};

export default Sidebar;
