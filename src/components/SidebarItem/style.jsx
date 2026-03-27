import styled from "styled-components";

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  background: rgba(15, 23, 42, 0.82);
  font-size: 1rem;
  color: var(--text);
  padding: 14px 16px;
  cursor: pointer;
  border-radius: 16px;
  margin: 0 16px 14px;
  border: 1px solid rgba(148, 163, 184, 0.1);
  transition: 0.25s ease;

  > svg {
    margin: 0 14px 0 4px;
  }

  &:hover {
    transform: translateX(4px);
    background: rgba(56, 189, 248, 0.12);
    border-color: rgba(56, 189, 248, 0.2);
  }
`;
