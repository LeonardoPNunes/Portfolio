import styled from "styled-components";

export const Container = styled.div`
  z-index: 100;
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.78);
  padding: 20px;
`;

export const ModalContent = styled.div`
  width: min(1080px, 100%);
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 12px;
`;

export const GifModal = styled.img`
  width: 100%;
  max-height: calc(100vh - 120px);
  object-fit: contain;
  border-radius: 20px;
`;

export const GifClose = styled.button`
  color: white;
  font-size: 1rem;
  background-color: rgba(15, 23, 42, 0.85);
  padding: 10px 16px;
  border-radius: 12px;
  border: 1px solid rgba(148, 163, 184, 0.14);
  cursor: pointer;
`;
