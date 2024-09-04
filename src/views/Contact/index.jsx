import React from "react";
import { IconsContact, ImgContainer, ProfileImg, SectionContact } from "./style";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import profile from "../../assets/img/profile.jpeg";

const Contact = () =>{
    return(
        <SectionContact id="#contact">
            <h1>contato</h1>
            <ImgContainer>
                <ProfileImg src={profile} alt="" />
            </ImgContainer>
            <div>
                <IconsContact
                href="https://contate.me/leonardopnunes" 
                target="_blank" 
                rel="noreferrer">
                    <FaWhatsapp size={55}/>
                    <h1>Whatsapp</h1>
                </IconsContact>
                
                <IconsContact 
                href="mailto:zleo465@gmail.com"
                target="_blank" 
                rel="noreferrer">
                    <SiGmail size={55}/>
                    <h1>Gmail</h1>
                </IconsContact>

                <IconsContact  
                href="https://www.linkedin.com/in/leonardo-paulo-nunes-de-freitas/message/" 
                target="_blank" 
                rel="noreferrer">
                    <FaLinkedin size={55}/>
                    <h1>Linkedin</h1>
                </IconsContact> 
            </div>
            
        </SectionContact>
    )
}
export default Contact