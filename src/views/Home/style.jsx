import styled, { keyframes } from 'styled-components';

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  height: 85vh;
  background: linear-gradient(135deg, #0f172a, #1e3a8a);
  color: white;
  text-align: center;
  opacity: ${(props) => (props.fadeIn ? 1 : 0)};
  animation: ${(props) => (props.fadeIn ? fadeInAnimation : '')} 2s ease;

    
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const Title = styled.h1`
  font-size: 48px;
  margin: 0 5px;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 18px;
  margin: 10px 0 30px;
  color: #9ca3af;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media (max-width: 337px) {
    flex-direction: column;
  }
`;

export const Button = styled.a`
  padding: 12px 24px;
  background-color: #2563eb;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1e40af;
  }
  @media (max-width: 337px) {
    margin:10px;
  }
`;