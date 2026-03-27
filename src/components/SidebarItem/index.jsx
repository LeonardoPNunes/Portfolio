import React from "react";
import { Link } from "react-scroll";
import { ContainerButton } from "./style";

const SidebarItem = ({ Icon, Text, navigateItem, onClick }) => {
  return (
    <Link
      to={navigateItem}
      spy={true}
      smooth={true}
      offset={-90}
      duration={600}
      onClick={onClick}
    >
      <ContainerButton>
        <Icon />
        {Text}
      </ContainerButton>
    </Link>
  );
};

export default SidebarItem;
