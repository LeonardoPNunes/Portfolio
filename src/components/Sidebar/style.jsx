import styled from "styled-components";

export const Container = styled.div`
  background: rgba(9, 16, 27, 0.98);
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  width: min(320px, 86vw);
  left: ${(props) => (props.sidebar ? "0" : "-100%")};
  border-right: 1px solid rgba(148, 163, 184, 0.12);
  box-shadow: var(--shadow);
  animation: showSidebar 0.35s ease;
  z-index: 35;

  @keyframes showSidebar {
    from {
      opacity: 0;
      transform: translateX(-18px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const Overlay = styled.button`
  position: fixed;
  inset: 0;
  border: none;
  background: rgba(2, 6, 23, 0.6);
  backdrop-filter: blur(3px);
  z-index: 30;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 26px;
  right: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid rgba(148, 163, 184, 0.14);
  background: rgba(15, 23, 42, 0.85);
  color: var(--text);
  cursor: pointer;
`;

export const Content = styled.div`
  margin-top: 110px;
`;
