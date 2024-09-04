import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  position: fixed;
  top:0px;
  background-color: #1A202C; 
  box-shadow: 0 0 20px 5px;
  z-index: 1;
  
  
`;
export const AlignItens = styled.div`
width:100%;
display: flex;
justify-content: space-between;
align-items: center;
margin:0 30px;


> svg {
    color: white;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`
export const Logo = styled.a`
display: flex;
justify-content: space-between;
  border:1px solid white;
  padding:13px;
  border-radius: 5px;
  text-transform: uppercase;
  color:white;
  text-decoration: none;
  font-family: "Gemunu Libre", sans-serif;
  font-size: 1rem;
  
`