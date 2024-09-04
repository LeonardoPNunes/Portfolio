import styled from "styled-components";

export const Container = styled.div`
z-index: 100;
 position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
background-color: rgba(0, 0, 0, 0.7);

>div{
    width: 98%;
    display: flex;
    align-items: end;
    justify-content: end;
}

`
export const GifModal = styled.img`
width:100%;

`
export const GifClose = styled.button`


color:white;
font-size: 25px;
background-color: transparent;
padding:5px;
border:none;
cursor: pointer;

`