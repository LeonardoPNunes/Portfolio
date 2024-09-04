import styled,{ keyframes } from "styled-components";

const titleAnimation = keyframes`
  100% {
    padding: 7px 12px;
  }
`
export const TitlePortfolio = styled.h1`
font-size: 20px;
background:#680091;
width: fit-content;
padding:5px 10px;
border-radius: 7px;
&:hover{
    transition: all .3s ease-in-out;
    padding:7px 12px;
    
}
`