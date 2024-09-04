import React from 'react'
import { ContainerButton } from './style'
import { Link } from 'react-scroll';

const SidebarItem = ({ Icon, Text, navigateItem }) => {

  return (
     <Link
      to={navigateItem}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
    <ContainerButton>
     
      <Icon />
      {Text}
    
    </ContainerButton>
    </Link>
  )
}

export default SidebarItem