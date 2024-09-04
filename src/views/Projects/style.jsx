import styled from "styled-components";

export const SectionProjects = styled.section`
padding:30px;

> h1{
    text-transform: uppercase;
    color:white;
    text-decoration: none;
    font-family: "Gemunu Libre", sans-serif;
    font-size: 1.5rem;
    opacity: 0.7;
}
`
export const Cards = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    z-index: 1;

`
export const Card = styled.div`
    width:20vw;
    height:500px;
    padding: 3.5rem;
    margin:20px;
    background: hsl(0, 0%, 8%);

    border-radius: 0.6rem;
    box-shadow: -1rem 1rem 1rem rgba(0, 0, 0, 0.267);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;

    transition: 400ms;
    >div{
        margin:0;
        >p{
            color:white;
        }
    }
    >h3{
        color:white;
    }
    >p{
            color:white;
    }
    @media (max-width: 638px) {
        width:90vw;
        padding: 1.5rem;
      }
`
export const ImageProject = styled.img`
width:20vw;
transition: 600ms;

&:hover{
width:21vw;
}
@media (max-width: 638px) {
    width:99%;
    &:hover{
    width:100%;
    }
}
`
export const ContainerButtons = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top:10px;

`
export const CardButton = styled.a`
margin:0 8px;
`
export const ButtonModal = styled.button`
border:none;
cursor: pointer;
background-color: transparent;
`
export const CardAlign =styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

>p{
    width: 100%;
}

`