import styled from "styled-components";

export const SectionContact = styled.section`
  padding: 30px;
  background-color: #252e3f;

  > h1 {
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    font-family: "Gemunu Libre", sans-serif;
    font-size: 1.5rem;
    opacity: 0.7;
    margin-bottom: 10vh;
  }
  > div {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    @media (max-width: 400px) {
      flex-direction: column;
      align-items: start;
    }
  }
`;
export const IconsContact = styled.a`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
  transition: color 0.3s;
  &:hover {
    color: #1e40af;
  }
  @media (max-width: 400px) {
    flex-direction: row;
  }
  > h1 {
    font-size: 15px;
    @media (max-width: 400px) {
      margin-left: 10px;
    }
  }
`;

export const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ImgContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center !important;
  align-items: center !important;
`;

export const ContactsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 50px;
`;
