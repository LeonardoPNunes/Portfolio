import styled from 'styled-components';

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  background-color: #1A202C; 
  font-size: 20px;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 15px 20px;
  border:none;

  > svg {
    margin: 0 20px;
  }

  &:hover {
    background-color: black;
  }
`;