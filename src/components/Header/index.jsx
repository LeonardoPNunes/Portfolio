import React, { useState } from "react";
import { FaBars, FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";
import Sidebar from "../Sidebar";
import file from "../../assets/file/curriculo.pdf";
import {
  Container,
  Brand,
  BrandBadge,
  DesktopNav,
  DownloadButton,
  HeaderInner,
  MenuButton,
  NavItem,
} from "./style";

const navItems = [
  { id: "home", label: "Home" },
  { id: "aboutMe", label: "Sobre" },
  { id: "projects", label: "Projetos" },
  { id: "contact", label: "Contato" },
];

const Header = () => {
  const [sideBar, setSideBar] = useState(false);

  return (
    <Container>
      <HeaderInner>
        <Brand href="#home">
          <BrandBadge />
          Leonardo Nunes
        </Brand>

        <DesktopNav>
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-90}
              duration={700}
            >
              <NavItem>{item.label}</NavItem>
            </Link>
          ))}
        </DesktopNav>

        <DownloadButton href={file} download="curriculo-leonardo-nunes.pdf">
          <FaDownload />
          Currículo
        </DownloadButton>

        <MenuButton
          type="button"
          onClick={() => setSideBar(true)}
          aria-label="Abrir menu"
        >
          <FaBars />
        </MenuButton>
      </HeaderInner>

      {sideBar && <Sidebar active={sideBar} onClose={() => setSideBar(false)} />}
    </Container>
  );
};

export default Header;
