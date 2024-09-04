import React, { useState } from "react"
import { FaBars, FaFileDownload } from "react-icons/fa"

import { Container,Logo,AlignItens } from "./style"

import Sidebar from "../Sidebar";

import file from "../../assets/file/curriculo.pdf"
const Header = () =>{
    const [sideBar,setSideBar] = useState(false)
    const showSideBar = () => setSideBar(!sideBar)

    return(
        <Container>
            <AlignItens>
                <FaBars onClick={showSideBar}/>
                <Logo href={file} download="currículo.pdf"><FaFileDownload style={{marginRight:"10px"}}/>Portfólio</Logo>
            </AlignItens>
            {sideBar && <Sidebar active={setSideBar}/>}
        </Container>
    )
}
export default Header