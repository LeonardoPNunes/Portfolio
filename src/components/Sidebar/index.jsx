import React from 'react'
import { Container, Content } from './style'
import { 
  FaTimes, 
  FaHome, 
  FaUserAlt, 
  FaTasks
} from 'react-icons/fa'
import {
    SiAboutdotme
} from "react-icons/si"

import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <SidebarItem navigateItem="#home" Icon={FaHome} Text="Home" />
        <SidebarItem navigateItem="#aboutMe" Icon={SiAboutdotme} Text="Sobre Mim" />
        <SidebarItem navigateItem="#projects" Icon={FaTasks} Text="Projetos" />
        <SidebarItem navigateItem="#contact" Icon={FaUserAlt} Text="Contatos" />
      </Content>
    </Container>
  )
}

export default Sidebar